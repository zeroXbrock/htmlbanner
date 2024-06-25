/** Sets animationDuration according to the amount of content in element with id `targetClass`.
 * @param {string} targetClass - The class of the element to scale the scroll speed of.
 * @param {number} _period - Overrides animation duration, ignoring text length.
 *
 * Notice: MUST be called after DOM is loaded. See [app.js](./app.js).
 */
const scaleAnimationDuration = (targetClass, _period) => {
    const marqueeElement = document.getElementById(targetClass);
    const textLength = marqueeElement.textContent.length;
    marqueeElement.style.animationDuration = `${_period || textLength * 0.13}s`;
}
