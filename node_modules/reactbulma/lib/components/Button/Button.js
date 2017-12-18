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
The classic button, in different colors, sizes, and states
 */
var Button = function Button(_ref) {
  var Btn = _ref.as,
      black = _ref.black,
      danger = _ref.danger,
      dark = _ref.dark,
      info = _ref.info,
      large = _ref.large,
      light = _ref.light,
      link = _ref.link,
      medium = _ref.medium,
      fullwidth = _ref.fullwidth,
      outlined = _ref.outlined,
      primary = _ref.primary,
      small = _ref.small,
      success = _ref.success,
      text = _ref.text,
      warning = _ref.warning,
      white = _ref.white,
      inverted = _ref.inverted,
      hovered = _ref.hovered,
      focused = _ref.focused,
      active = _ref.active,
      loading = _ref.loading,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'black', 'danger', 'dark', 'info', 'large', 'light', 'link', 'medium', 'fullwidth', 'outlined', 'primary', 'small', 'success', 'text', 'warning', 'white', 'inverted', 'hovered', 'focused', 'active', 'loading', 'className']);

  var classes = (0, _classnames2.default)('button', {
    'is-black': black,
    'is-danger': danger,
    'is-dark': dark,
    'is-info': info,
    'is-large': large,
    'is-light': light,
    'is-link': link,
    'is-medium': medium,
    'is-outlined': outlined,
    'is-primary': primary,
    'is-small': small,
    'is-success': success,
    'is-text': text,
    'is-warning': warning,
    'is-white': white,
    'is-inverted': inverted,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-loading': loading,
    'is-fullwidth': fullwidth,
    'is-static': props['static']
  }, className);

  delete props['static'];

  return _react2.default.createElement(Btn, _extends({ className: classes }, props));
};

Button.displayName = 'Button';

Button.defaultProps = {
  as: 'button'
};

Button.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  black: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  fullwidth: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  outlined: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  text: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  white: _propTypes2.default.bool,
  inverted: _propTypes2.default.bool,
  hovered: _propTypes2.default.bool,
  focused: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  static: _propTypes2.default.bool
};

exports.default = Button;