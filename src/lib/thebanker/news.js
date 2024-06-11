import { renderRss2 } from '../../utils/util';

const deal = async (ctx) => {
    const { category = 'News-in-Brief' } = ctx.req.param();
    const limit = ctx.req.query('limit') ? Number.parseInt(ctx.req.query('limit'), 10) : 20;
    const rootUrl = 'https://www.thebanker.com';
    const currentUrl = new URL(`${category}/`, rootUrl).href;

    let res = await fetch(currentUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        }
    });

    let articles = [];
    const rewriter = new HTMLRewriter()
        .on('div[type="horizCard"]', {
            element(element) {
                const titleElement = element.querySelector('a[data-cy="card-title-link"] h3');
                const linkElement = element.querySelector('a[data-cy="card-title-link"]');
                const dateElement = element.querySelector('div:nth-child(1) div');  // Adjust the selector based on actual structure

                const title = titleElement ? titleElement.text().trim() : 'No title';
                const link = linkElement ? `https://www.thebanker.com${linkElement.getAttribute('href')}` : '#';
                const pubDate = dateElement ? parseRelativeDate(dateElement.text().trim()) : new Date().toISOString();

                articles.push({
                    title,
                    link,
                    description: title,  // Assuming description is similar to title for simplification
                    pubDate
                });
            }
        });

    await rewriter.transform(res).text();  // Processing the HTML and capturing the text outputs

    const title = 'Latest News from The Banker';
    const description = 'Updates and news briefs from The Banker.';
    const language = 'en-us';

    ctx.header('Content-Type', 'application/xml');
    return ctx.text(renderRss2({
        title,
        link: currentUrl,
        description,
        language,
        items: articles.slice(0, limit)
    }));
};

export { deal };
