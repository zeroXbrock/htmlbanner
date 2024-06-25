/** Fetch content from `contentSrc` and inject it into element with id `marqueeId`.
 * @param {string} contentSrc - The URL to fetch the content from.
 */
const fetchContent = async (contentSrc) => {
    try {
        const response = await fetch(contentSrc, {cache: "no-cache"});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching content:', error);
        return null
    }
}
