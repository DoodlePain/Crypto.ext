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
Small tag labels to insert anywhere
*/
var Tag = function Tag(_ref) {
  var Span = _ref.as,
      medium = _ref.medium,
      large = _ref.large,
      black = _ref.black,
      dark = _ref.dark,
      light = _ref.light,
      white = _ref.white,
      primary = _ref.primary,
      info = _ref.info,
      success = _ref.success,
      warning = _ref.warning,
      danger = _ref.danger,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'medium', 'large', 'black', 'dark', 'light', 'white', 'primary', 'info', 'success', 'warning', 'danger', 'className']);

  var classes = (0, _classnames2.default)('tag', {
    'is-medium': medium,
    'is-large': large,
    'is-black': black,
    'is-dark': dark,
    'is-light': light,
    'is-white': white,
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className);

  return _react2.default.createElement(Span, _extends({ className: classes }, props));
};

Tag.displayName = 'Tag';

Tag.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  black: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  white: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool
};

Tag.defaultProps = {
  as: 'span'
};

exports.default = Tag;