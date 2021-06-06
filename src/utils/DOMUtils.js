'use strict';

/**
 * This function removes all the html inside the given element
 *
 * @param {HTMLElement} DOMElement
 */
export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  id - the id of the element
 *
 * @param {string} tag - The name of the element to be created
 * @param {object} options - attribute/values to be added to the element
 */
export const createDOMElement = (tag, options) => {
  const { id } = options || {};

  const element = document.createElement(tag);

  if (id != null) {
    element.id = id;
  }

  return element;
};

/**
 * Find and return a DOM element by its id
 *
 * @param {string} id - the id of the element to be found
 */
export const getDOMElement = (id) => {
  return document.getElementById(id);
};
