'use strict';

import getIteratorSymbol from './symbol';

import arrayValues from './array/values';

export default function iteratorOf(object) {
  var iteratorSymbol = getIteratorSymbol();
  if (iteratorSymbol in object) return object[iteratorSymbol]();
  if (object instanceof Array) return arrayValues(object);
  throw new TypeError('object is not iterable');
}
