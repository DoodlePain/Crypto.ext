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
A simple container to divide your page into sections, like the one you're currently reading
*/
var Section = function Section(_ref) {
  var small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['small', 'medium', 'large', 'className']);

  var classes = (0, _classnames2.default)('section', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className);

  return _react2.default.createElement('section', _extends({ className: classes }, props));
};

Section.displayName = 'Section';

Section.propTypes = {
  className: _propTypes2.default.node,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool
};

exports.default = Section;