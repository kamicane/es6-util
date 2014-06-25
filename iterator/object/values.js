'use strict';

import createIterator from '../create';

var objectValuesNext = (object) => {
  var keys = Object.keys(object), i = 0;
  return () => (i === keys.length) ? { value: void 0, done: true } : { value: object[keys[i++]], done: false };
};

export default (object) => createIterator(objectValuesNext(object));
