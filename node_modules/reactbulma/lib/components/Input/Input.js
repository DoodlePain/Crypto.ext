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

var Input = function Input(_ref) {
  var className = _ref.className,
      danger = _ref.danger,
      focused = _ref.focused,
      hovered = _ref.hovered,
      info = _ref.info,
      large = _ref.large,
      loading = _ref.loading,
      medium = _ref.medium,
      primary = _ref.primary,
      small = _ref.small,
      success = _ref.success,
      warning = _ref.warning,
      props = _objectWithoutProperties(_ref, ['className', 'danger', 'focused', 'hovered', 'info', 'large', 'loading', 'medium', 'primary', 'small', 'success', 'warning']);

  var classes = (0, _classnames2.default)('input', {
    'is-danger': danger,
    'is-focused': focused,
    'is-hovered': hovered,
    'is-info': info,
    'is-large': large,
    'is-medium': medium,
    'is-primary': primary,
    'is-small': small,
    'is-success': success,
    'is-warning': warning
  }, className);

  return _react2.default.createElement('input', _extends({ className: classes }, props));
};

Input.displayName = 'Input';

Input.propTypes = {
  className: _propTypes2.default.string,
  danger: _propTypes2.default.bool,
  focused: _propTypes2.default.bool,
  hovered: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  type: _propTypes2.default.string.isRequired,
  warning: _propTypes2.default.bool
};

Input.defaultProps = {
  type: 'text'
};

exports.default = Input;