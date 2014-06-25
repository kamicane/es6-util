'use strict';

import createIterator from '../create';

var arrayKeysNext = (array) => {
  var i = 0;
  return () => (i === array.length) ? { value: void 0, done: true } : { value: i++, done: false };
};

export default (array) => createIterator(arrayKeysNext(array));
