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

var _Image = require('../Image/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardImage = function CardImage(_ref) {
  var alt = _ref.alt,
      is = _ref.is,
      square = _ref.square,
      src = _ref.src,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['alt', 'is', 'square', 'src', 'className']);

  var classes = (0, _classnames2.default)('card-image', className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    _react2.default.createElement(_Image2.default, { square: square, is: is, src: src, alt: alt })
  );
};

CardImage.displayName = 'Card.Image';

CardImage.propTypes = {
  className: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  square: _propTypes2.default.oneOf(['1by1', '4by3', '3by2', '16by9', '2by1']),
  is: _propTypes2.default.oneOf(['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128']),
  src: _propTypes2.default.string.isRequired
};

exports.default = CardImage;