'use strict';

/**
 * This function removes all the html inside the given element
 */
const clearDOMElement = (DOMElement) => {
    DOMElement.innerHTML = '';
}

export default clearDOMElement;