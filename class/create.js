'use strict';

import { getDescriptors } from './descriptors';

var { create, defineProperty, defineProperties } = Object;

export default function createClass(SuperClass, Class, prototypeMethods, staticMethods) {

  if (SuperClass) Class.__proto__ = SuperClass;

  defineProperty(Class, 'prototype', {
    value: create(SuperClass === null ? null : SuperClass.prototype, getDescriptors(prototypeMethods))
  });

  defineProperty(Class.prototype, 'constructor', { value: Class });

  if (staticMethods) defineProperties(Class, getDescriptors(staticMethods));

  return Class;
}
