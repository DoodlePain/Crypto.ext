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

var Textarea = function Textarea(_ref) {
  var Element = _ref.as,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      hovered = _ref.hovered,
      focused = _ref.focused,
      primary = _ref.primary,
      info = _ref.info,
      success = _ref.success,
      warning = _ref.warning,
      danger = _ref.danger,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'small', 'medium', 'large', 'hovered', 'focused', 'primary', 'info', 'success', 'warning', 'danger', 'className']);

  var classes = (0, _classnames2.default)('textarea', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className);

  return _react2.default.createElement(Element, _extends({ className: classes }, props));
};

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  hovered: _propTypes2.default.bool,
  focused: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};

Textarea.defaultProps = {
  as: 'textarea'
};

exports.default = Textarea;