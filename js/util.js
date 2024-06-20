/** Read query params from URL.
 * @returns {{contentUrl: string}} - An object containing the query params.
 */
function getQueryParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}
