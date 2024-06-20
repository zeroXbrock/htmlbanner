const POLL_PERIOD_SECS = 30

/** Register scripts to run when DOM content is loaded. */
const init = (params) => {
    const queryParams = getQueryParams();
    const args = {
        ...params,
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
        secondsPerChar,
        contentUrl,
    } = params
    console.log("fetching content...")
    await fetchContent(marqueeId, contentUrl)
    scaleAnimationDuration(marqueeId, secondsPerChar)
}
