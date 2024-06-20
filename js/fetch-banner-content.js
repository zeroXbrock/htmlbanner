/** Fetch content from `contentSrc` and inject it into element with id `marqueeId`.
 * @param {string} marqueeId - The id of the element to inject the content into.
 * @param {string} contentSrc - The URL to fetch the content from.
 */
const fetchContent = async (marqueeId, contentSrc) => {
    try {
        const response = await fetch(contentSrc, {cache: "no-cache"});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const content = await response.text();
        const bannerElement = document.getElementById(marqueeId);
        bannerElement.innerHTML = `&#xe0b1;&#xe0b1;&#xe0b1; ${content} &#xe0b3;&#xe0b3;&#xe0b3;`;
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}
