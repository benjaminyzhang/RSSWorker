import { renderRss2 } from '../../utils/util';

const getNewsItems = async (url) => {
    let res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        }
    });
    let articles = [];
    let rewriter = new HTMLRewriter()
        .on('[data-cy="card-title-link"]', {
            element(element) {
                const title = element.querySelector('h3').text;
                const link = element.getAttribute('href'); // 假设链接是在同一个元素上的 href 属性
                articles.push({ title, link });
            }
        })
        .on('div.description', { // 假设描述在 class="description" 的 div 中
            element(element) {
                const description = element.text;
                articles.push({ description });
            }
        })
        .transform(res);
    await rewriter.text();
    return articles.map(article => ({ ...article, description: article.description || '' }));
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
