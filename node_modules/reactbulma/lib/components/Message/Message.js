'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MessageHeader = require('./MessageHeader');

var _MessageHeader2 = _interopRequireDefault(_MessageHeader);

var _MessageBody = require('./MessageBody');

var _MessageBody2 = _interopRequireDefault(_MessageBody);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
Colored message blocks, to emphasize part of your page
*/
var Message = function Message(_ref) {
  var Article = _ref.as,
      dark = _ref.dark,
      primary = _ref.primary,
      info = _ref.info,
      success = _ref.success,
      warning = _ref.warning,
      danger = _ref.danger,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'dark', 'primary', 'info', 'success', 'warning', 'danger', 'className']);

  var classes = (0, _classnames2.default)('message', {
    'is-dark': dark,
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className);

  return _react2.default.createElement(Article, _extends({ className: classes }, props));
};

Message.displayName = 'Message';

Message.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dark: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool
};

Message.defaultProps = {
  as: 'article'
};

Message.Header = _MessageHeader2.default;
Message.Body = _MessageBody2.default;

exports.default = Message;