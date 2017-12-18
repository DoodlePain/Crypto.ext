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
Bulma is compatible with Font Awesome icons.
*/
var Icon = function Icon(_ref) {
  var Span = _ref.as,
      large = _ref.large,
      left = _ref.left,
      medium = _ref.medium,
      right = _ref.right,
      small = _ref.small,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'large', 'left', 'medium', 'right', 'small', 'className']);

  var classes = (0, _classnames2.default)('icon', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-left': left,
    'is-right': right
  }, className);

  return _react2.default.createElement(Span, _extends({ className: classes }, props));
};

Icon.displayName = 'Icon';

Icon.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  large: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  small: _propTypes2.default.bool
};

Icon.defaultProps = {
  as: 'span'
};

exports.default = Icon;