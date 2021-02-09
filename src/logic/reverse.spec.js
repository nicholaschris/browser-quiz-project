'use strict';

import chai from 'chai';
const expect = chai.expect;

import { reverse } from './reverse.js';

describe('reverseLogic reverses a string', () => {
  it('"toads" -> "sdaot"', () => {
    expect(reverse('toads')).to.equal('sdaot');
  });
  it('"sdaot" -> "toads"', () => {
    expect(reverse('sdaot')).to.equal('toads');
  });
});
