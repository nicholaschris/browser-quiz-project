'use strict';

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 * 
 *  id - the id of the element
 */
const createDOMElement = (tag, options) => {
    const { id } = options || {};

    const element = document.createElement(tag);
    
    if (id != null) {
        element.id = id;
    }

    return element;
}

export default createDOMElement;