const POLL_PERIOD_SECS = 30;
const DEFAULT_CONTENT_SRC = 'https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt';

/** Register scripts to run when DOM content is loaded.
 * @param {{
 *  contentUrl: string,
 *  marqueeId: string,
 *  secondsPerChar: number,
 * }} params - Configuration parameters.
 */
const init = (params) => {
    const queryParams = getQueryParams();
    if (!('contentUrl' in queryParams)) {
        console.warn(`No content URL provided, using default. To display your own content, set the 'contentUrl' query parameter in this page's URL.\nExample: ${window.location.href}?contentUrl=${DEFAULT_CONTENT_SRC}`)
    }
    const contentUrl = queryParams['contentUrl'] || DEFAULT_CONTENT_SRC
    const args = {
        ...params,
        contentUrl,
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
        secondsPerChar,
        contentUrl,
    } = params
    console.log("fetching content...")
    await fetchContent(marqueeId, contentUrl)
    scaleAnimationDuration(marqueeId, secondsPerChar)
}
