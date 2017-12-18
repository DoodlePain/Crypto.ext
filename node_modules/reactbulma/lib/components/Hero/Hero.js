'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HeroHead = require('./HeroHead');

var _HeroHead2 = _interopRequireDefault(_HeroHead);

var _HeroBody = require('./HeroBody');

var _HeroBody2 = _interopRequireDefault(_HeroBody);

var _HeroFoot = require('./HeroFoot');

var _HeroFoot2 = _interopRequireDefault(_HeroFoot);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An imposing hero banner to showcase something
*/
var Hero = function Hero(_ref) {
  var Section = _ref.as,
      primary = _ref.primary,
      info = _ref.info,
      success = _ref.success,
      warning = _ref.warning,
      danger = _ref.danger,
      light = _ref.light,
      dark = _ref.dark,
      bold = _ref.bold,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      fullheight = _ref.fullheight,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'primary', 'info', 'success', 'warning', 'danger', 'light', 'dark', 'bold', 'small', 'medium', 'large', 'fullheight', 'className']);

  var classes = (0, _classnames2.default)('hero', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-light': light,
    'is-dark': dark,
    'is-bold': bold,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-fullheight': fullheight
  }, className);

  return _react2.default.createElement(Section, _extends({ className: classes }, props));
};

Hero.displayName = 'Hero';

Hero.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  bold: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  fullheight: _propTypes2.default.bool
};

Hero.defaultProps = {
  as: 'section'
};

Hero.Head = _HeroHead2.default;
Hero.Body = _HeroBody2.default;
Hero.Foot = _HeroFoot2.default;

exports.default = Hero;