'use strict';

import { reverse } from '../logic/reverse.js';

/**
 * creates a PRE element with artful text
 * each line in the provided array will be mirrored around the separator
 * @param {string[]} lines - an array of strings, each one will be mirrored around the separator on a new line
 * @param {string} separator - the string to separate mirrored lines
 * @return {HTMLPreElement} a PRE element with the rendered string content
 */
export const artify = (lines = [], separator = '') => {
  let combinedLines = '';
  for (const line of lines) {
    const reversedLine = reverse(line);
    combinedLines += `${line} ${separator} ${reversedLine}\n`;
  }

  const pre = document.createElement('pre');
  pre.innerHTML = combinedLines;

  return pre;
};
