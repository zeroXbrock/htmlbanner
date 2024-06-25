const POLL_PERIOD_SECS = 30;
const DEFAULT_CONTENT_SRC = 'https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt';

/** Register scripts to run when DOM content is loaded.
 * @param {{
 *  contentUrl?: string,
 *  marqueeId: string,
 *  _period?: number,
 * _content?: string,
 * }} params - hardcoded configuration parameters.
 */
const init = (params) => {
    // query params take precedence over hardcoded parameters
    const queryParams = getQueryParams();
    if (!('contentUrl' in queryParams)) {
        console.warn(`No content URL provided, using default. To display your own content, set the 'contentUrl' query parameter in this page's URL.\nExample: ${window.location.href}?contentUrl=${DEFAULT_CONTENT_SRC}`)
    }
    const contentUrl = queryParams['contentUrl'] || DEFAULT_CONTENT_SRC
    const args = {
        ...params,
        contentUrl,
        ...queryParams,
    }
    document.addEventListener('DOMContentLoaded', () => {
        doInit(args)

        // poll for new content so the banner gets live updates
        setInterval(() => {
            doInit(args)
        }, POLL_PERIOD_SECS * 1000);
    })
}

/** Initialize DOM-dependent things.
  * Note: DOMContent must be loaded.
  */
async function doInit(params) {
    const {
        marqueeId,
        contentUrl,
        _period,
        _content,
    } = params
    let content = _content
    if (!_content) {
        console.log("fetching content from URL...")
        content = await fetchContent(contentUrl)
    }

    const bannerElement = document.getElementById(marqueeId);
    bannerElement.innerHTML = `&#xe0b1;&#xe0b1;&#xe0b1; ${content} &#xe0b3;&#xe0b3;&#xe0b3;`;
    scaleAnimationDuration(marqueeId, _period)
}
