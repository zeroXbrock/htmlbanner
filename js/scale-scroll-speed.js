/** Sets animationDuration according to the amount of content in an element with class `targetClass`.
 * @param {string} targetClass - The class of the element to scale the scroll speed of.
 * @param {number} secondsPerChar - The number of seconds each character adds to the animation duration. Defaults to `0.13`.
 */
const scaleAnimationDuration = (targetClass, secondsPerChar) => {
    document.addEventListener('DOMContentLoaded', function() {
        const marqueeElements = document.querySelectorAll(`.${targetClass}`);
        marqueeElements.forEach(el => {
            const textLength = el.textContent.length;
            el.style.animationDuration = `${textLength * (secondsPerChar || 0.13)}s`;
        });
    });
}
