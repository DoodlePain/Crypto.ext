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
Native HTML progress bars
*/
var Progress = function Progress(_ref) {
  var value = _ref.value,
      max = _ref.max,
      primary = _ref.primary,
      info = _ref.info,
      success = _ref.success,
      warning = _ref.warning,
      danger = _ref.danger,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['value', 'max', 'primary', 'info', 'success', 'warning', 'danger', 'small', 'medium', 'large', 'className']);

  var classes = (0, _classnames2.default)('progress', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className);

  return _react2.default.createElement('progress', _extends({ className: classes, value: value, max: max }, props));
};

Progress.displayName = 'Progress';

Progress.propTypes = {
  className: _propTypes2.default.node,
  primary: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

Progress.defaultProps = {
  value: 0,
  max: 100
};

exports.default = Progress;