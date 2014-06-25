'use strict';

import createIterator from '../create';

var objectKeysNext = (object) => {
  var keys = Object.keys(object), i = 0;
  return () => (i === keys.length) ? { value: void 0, done: true } : { value: keys[i++], done: false };
};

export default (object) => createIterator(objectKeysNext(object));
