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

var Control = function Control(_ref) {
  var Div = _ref.as,
      hasIconsLeft = _ref.hasIconsLeft,
      hasIconsRight = _ref.hasIconsRight,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      loading = _ref.loading,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'hasIconsLeft', 'hasIconsRight', 'small', 'medium', 'large', 'loading', 'className']);

  var classes = (0, _classnames2.default)('control', {
    'has-icons-left': hasIconsLeft,
    'has-icons-right': hasIconsRight,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-loading': loading
  }, className);

  return _react2.default.createElement(Div, _extends({ className: classes }, props));
};

Control.displayName = 'Control';

Control.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  hasIconsLeft: _propTypes2.default.bool,
  hasIconsRight: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  loading: _propTypes2.default.bool
};

Control.defaultProps = {
  as: 'div'
};

exports.default = Control;