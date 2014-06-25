'use strict';

var { keys, getOwnPropertyDescriptor } = Object;

export var getDescriptor = (object, key) => {
  var descriptor = getOwnPropertyDescriptor(object, key);
  if (!('get' in descriptor) && !('set' in descriptor)) descriptor.enumerable = false;
  return descriptor;
};

export var getDescriptors = (object) => {
  var base = {}, key;
  for (var i = 0, array = keys(object); i < array.length; i++) {
    key = array[i];
    base[key] = getDescriptor(object, key);
  }
  return base;
};
