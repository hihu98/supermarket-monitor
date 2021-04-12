"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = exports.updateOne = exports.getOne = exports.createOne = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = "hihuMarket";

var createOne = function createOne(key, value) {
  var vKey = "".concat(prefix, ".").concat(key);
  var vValue = JSON.stringify(value);
  localStorage.setItem(vKey, vValue);
};

exports.createOne = createOne;

var getOne = function getOne(key) {
  var vKey = "".concat(prefix, ".").concat(key);
  var value = localStorage.getItem(vKey);
  return value ? JSON.parse(value) : null;
};

exports.getOne = getOne;

var updateOne = function updateOne(key, value) {
  var vKey = "".concat(prefix, ".").concat(key);
  var vValue = JSON.stringify(value);
  localStorage.setItem(vKey, vValue);
};

exports.updateOne = updateOne;

var getAll = function getAll() {
  var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object.keys(localStorage).reduce(function (obj, k) {
    return _objectSpread({}, obj, _defineProperty({}, k, localStorage.getItem(k)));
  }, {});
};

exports.getAll = getAll;