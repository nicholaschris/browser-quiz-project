'use strict';

import { logger } from '../../lib/logger.js';

import { data } from '../data.js';
import { artify } from '../views/artify.js';

/**
 * creates a mirror-image rendering of the user input and displays the growing artwork
 * @param {Event} event - triggered whenever a user releases a key in the input area
 */
export const artifyHandler = (event) => {
  // ignore the event if the user is correcting a mistake
  if (event.keyCode === 8 || event.keyCode === 46) {
    return;
  }

  // read & process user input
  // remove newlines from the input value
  //  keeps things pretty for the art
  //  and allows user to use enter to submit the same input unchanged
  const target = event.target;
  const newEntry =
    event.keyCode === 13 ? target.value.split('\n').join('') : target.value;

  // update state
  data.lines.push(newEntry);

  // render state & update UI
  const renderedArtwork = artify(data.lines, data.separator);
  const outputContainer = document.getElementById('output');
  outputContainer.innerHTML = '';
  outputContainer.appendChild(renderedArtwork);

  logger.add({
    handler: 'artify',
    newEntry,
    renderedArtwork,
    data,
    event,
  });
};
