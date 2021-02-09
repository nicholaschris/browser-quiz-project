'use strict';

import jsdom from 'jsdom';
import chai from 'chai';
import { artify } from './artify.js';

// build the DOM properties we will use in testing
const { document, Element } = new jsdom.JSDOM('').window;
// create a global variable named `document` that behaves just like in the browser
// you view function will not work without this
global.document = document;

// declare the `expect` variable for testing
const expect = chai.expect;

describe('artify renders lines of text mirrored around a separator', () => {
  describe('renders an empty PRE when the data is empty', () => {
    const rendered = artify([], '');
    it('returns a DOM element', () => {
      expect(rendered).to.be.instanceOf(Element);
    });
    it('the element is a PRE tag', () => {
      expect(rendered.nodeName).to.equal('PRE');
    });
    it('with empty innerHTML', () => {
      expect(rendered.innerHTML).to.equal('');
    });
  });
  describe('when there is a separator and no lines, render an empty PRE', () => {
    const rendered = artify([], 'hello');
    it('returns a DOM element', () => {
      expect(rendered).to.be.instanceOf(Element);
    });
    it('the element is a PRE tag', () => {
      expect(rendered.nodeName).to.equal('PRE');
    });
    it('with empty innerHTML', () => {
      expect(rendered.innerHTML).to.equal('');
    });
  });
  describe('when there is no separator, render mirrored lines separated by two spaces', () => {
    const rendered = artify(['abc', 'xyz'], '');
    it('returns a DOM element', () => {
      expect(rendered).to.be.instanceOf(Element);
    });
    it('the element is a PRE tag', () => {
      expect(rendered.nodeName).to.equal('PRE');
    });
    it('correct innerHTML', () => {
      expect(rendered.innerHTML).to.equal('abc  cba\nxyz  zyx\n');
    });
  });
  describe('when there are lines and a separator, render it all!', () => {
    const rendered = artify(['abc', 'xyz'], '|');
    it('returns a DOM element', () => {
      expect(rendered).to.be.instanceOf(Element);
    });
    it('the element is a PRE tag', () => {
      expect(rendered.nodeName).to.equal('PRE');
    });
    it('correct innerHTML', () => {
      expect(rendered.innerHTML).to.equal('abc | cba\nxyz | zyx\n');
    });
  });
});
