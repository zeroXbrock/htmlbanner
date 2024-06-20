/** Sets animationDuration according to the amount of content in element with id `targetClass`.
 * @param {string} targetClass - The class of the element to scale the scroll speed of.
 * @param {number} secondsPerChar - The number of seconds each character adds to the animation duration. Defaults to `0.13`.
 *
 * Notice: MUST be called after DOM is loaded. See [app.js](./app.js).
 */
const scaleAnimationDuration = (targetClass, secondsPerChar) => {
    const marqueeElement = document.getElementById(targetClass);
    const textLength = marqueeElement.textContent.length;
    marqueeElement.style.animationDuration = `${Math.max(45, textLength * (secondsPerChar || 0.13))}s`;
}
