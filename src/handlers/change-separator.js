'use strict';

import { logger } from '../../lib/logger.js';

import { data } from '../data.js';
import { artify } from '../views/artify.js';

/**
 * changes the program's separator value
 * @param {Event} event - triggered whenever a user types in the separator input area
 */
export const changeSeparatorHandler = (event) => {
  // read user input
  const newSeparator = event.target.value;

  // update state
  data.separator = newSeparator;

  // render state & update UI
  const renderedArtwork = artify(data.lines, data.separator);
  const outputContainer = document.getElementById('output');
  outputContainer.innerHTML = '';
  outputContainer.appendChild(renderedArtwork);

  logger.add({
    handler: 'change separator',
    newSeparator,
    renderedArtwork,
    data,
    event,
  });
};
