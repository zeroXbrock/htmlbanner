const POLL_PERIOD_SECS = 30

/** Register scripts to run when DOM content is loaded. */
const init = (params) => {
    document.addEventListener('DOMContentLoaded', () => {
        doInit(params)

        // poll for new content so the banner gets live updates
        setInterval(() => {
            doInit(params)
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
    } = params
    console.log("fetching content...")
    await fetchContent(marqueeId)
    scaleAnimationDuration(marqueeId, secondsPerChar)
}
