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
Bold notification blocks, to alert your users of something
*/
var Notification = function Notification(_ref) {
  var primary = _ref.primary,
      info = _ref.info,
      success = _ref.success,
      warning = _ref.warning,
      danger = _ref.danger,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['primary', 'info', 'success', 'warning', 'danger', 'className']);

  var classes = (0, _classnames2.default)('notification', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

Notification.displayName = 'Notification';

Notification.propTypes = {
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool
};

exports.default = Notification;