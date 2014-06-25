/* global Symbol */
'use strict';

export default () => (global.Symbol && Symbol.iterator) || '@@iterator';
