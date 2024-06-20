const CONTENT_SRC = 'https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt';

/** Fetch content from `CONTENT_SRC` and inject it into element at given id.
 * @param {string} marqueeId - The id of the element to inject the content into.
 */
const fetchContent = async (marqueeId) => {
    try {
        const response = await fetch(CONTENT_SRC, {cache: "no-cache"});
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
