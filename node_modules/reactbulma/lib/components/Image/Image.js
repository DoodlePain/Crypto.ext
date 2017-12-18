'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
A container for responsive images
*/
var Image = function Image(_ref) {
  var _classNames;

  var is = _ref.is,
      src = _ref.src,
      alt = _ref.alt,
      square = _ref.square,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['is', 'src', 'alt', 'square', 'className']);

  var classes = (0, _classnames2.default)('image', (_classNames = {}, _defineProperty(_classNames, 'is-' + is, is), _defineProperty(_classNames, 'is-' + square, square), _classNames), className);

  return _react2.default.createElement(
    'figure',
    _extends({ className: classes }, props),
    _react2.default.createElement('img', { src: src, alt: alt })
  );
};

Image.displayName = 'Image';

Image.propTypes = {
  className: _propTypes2.default.string,
  square: _propTypes2.default.oneOf(['1by1', '4by3', '3by2', '16by9', '2by1']),
  is: _propTypes2.default.oneOf(['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128']),
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string
};

exports.default = Image;