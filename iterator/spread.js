'use strict';

import iteratorOf from './get';

export default function spread(object) {
  var iterator = iteratorOf(object), array = [], step;
  while (!(step = iterator.next()).done) array.push(step.value);
  return array;
}
