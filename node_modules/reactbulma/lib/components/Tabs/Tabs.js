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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
Simple responsive horizontal navigation tabs, with different styles
*/
var Tabs = function Tabs(_ref) {
  var boxed = _ref.boxed,
      right = _ref.right,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      fullwidth = _ref.fullwidth,
      centered = _ref.centered,
      toggle = _ref.toggle,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['boxed', 'right', 'small', 'medium', 'large', 'fullwidth', 'centered', 'toggle', 'className']);

  var classes = (0, _classnames2.default)('tabs', {
    'is-boxed': boxed,
    'is-right': right,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-fullwidth': fullwidth,
    'is-centered': centered,
    'is-toggle': toggle
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
  className: _propTypes2.default.string,
  right: _propTypes2.default.bool,
  centered: _propTypes2.default.bool,
  boxed: _propTypes2.default.bool,
  fullwidth: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  toggle: _propTypes2.default.bool
};

exports.default = Tabs;