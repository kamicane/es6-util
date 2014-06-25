'use strict';

import createIterator from '../create';

var arrayValuesNext = (array) => {
  var i = 0;
  return () => (i === array.length) ? { value: void 0, done: true } : { value: array[i++], done: false };
};

export default (array) => createIterator(arrayValuesNext(array));
