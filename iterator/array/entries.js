'use strict';

import createIterator from '../create';

var arrayEntriesNext = (array) => {
  var i = 0;
  return () => (i === array.length) ? { value: void 0, done: true } : { value: [ i, array[i++] ], done: false };
};

export default (array) => createIterator(arrayEntriesNext(array));
