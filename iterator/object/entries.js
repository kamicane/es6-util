'use strict';

import createIterator from '../create';

var objectEntriesNext = (object) => {
  var keys = Object.keys(object), i = 0;
  return () => {
    if (i === keys.length) return { value: void 0, done: true };
    var key = keys[i++], value = object[key];
    return { value: [key, value], done: false };
  };
};

export default (object) => createIterator(objectEntriesNext(object));
