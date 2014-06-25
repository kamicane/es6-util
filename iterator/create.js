'use strict';

import getIteratorSymbol from './symbol';

export default function createIterator(next) {
  var it = { next };
  it[getIteratorSymbol()] = () => it;
  return it;
}
