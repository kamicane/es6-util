'use strict';

import { values as arrayValues, keys as arrayKeys, entries as arrayEntries } from './array';
import { values as objectValues, keys as objectKeys, entries as objectEntries } from './object';

export var values = (object) => object instanceof Array ? arrayValues(object) : objectValues(object);
export var keys = (object) => object instanceof Array ? arrayKeys(object) : objectKeys(object);
export var entries = (object) => object instanceof Array ? arrayEntries(object) : objectEntries(object);
