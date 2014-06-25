'use strict';

import iteratorOf from './get';

export default function forOf(object, fn, ctx) {
  var iterator = iteratorOf(object), step;
  while (!(step = iterator.next()).done) {
    var result = fn.call(ctx, step.value, object);
    if (result === false) break;
  }
  return object;
}
