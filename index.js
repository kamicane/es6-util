'use strict';

import iteratorOf from './iterator/get';
import createIterator from './iterator/create';
import forOf from './iterator/for-of';
import spread from './iterator/spread';
import { keys, values, entries } from './iterator';
import createClass from './class/create';

export { createClass, createIterator, forOf, iteratorOf, spread, keys, values, entries };
