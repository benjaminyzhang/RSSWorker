import { renderRss2 } from '../../utils/util';

const getNewsItems = async (url) => {
    let res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        }
    });
    let articles = [];
    let rewriter = new HTMLRewriter()
        .on('article', {
            element(element) {
                const title = element.getAttribute('data-title');
                const link = element.getAttribute('data-url');
                const description = element.getAttribute('data-summary');
                articles.push({ title, link, description });
            }
        })
        .transform(res);
    await rewriter.text();
    return articles;
};

const generateRss = async (ctx) => {
    const url = 'https://www.thebanker.com/News-in-Brief';
    const newsItems = await getNewsItems(url);

    const title = 'Latest News from The Banker';
    const description = 'Updates and news briefs from The Banker.';
    const link = url;

    ctx.header('Content-Type', 'application/xml');
    return ctx.text(
        renderRss2({
            title,
            description,
            link,
            items: newsItems.map(item => ({
                title: item.title,
                link: item.link,
                description: `<p>${item.description}</p>`
            }))
        })
    );
};

let setup = (route) => {
    route.get('/thebanker/news', generateRss);
};

export default { setup };
