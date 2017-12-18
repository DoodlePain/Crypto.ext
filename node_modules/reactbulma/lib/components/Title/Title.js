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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
Simple headings to add depth to your page
*/
var Title = function Title(_ref) {
  var _classNames;

  var Hn = _ref.as,
      className = _ref.className,
      is = _ref.is,
      spaced = _ref.spaced,
      props = _objectWithoutProperties(_ref, ['as', 'className', 'is', 'spaced']);

  var classes = (0, _classnames2.default)('title', (_classNames = {}, _defineProperty(_classNames, 'is-' + is, is), _defineProperty(_classNames, 'is-spaced', spaced), _classNames), className);

  return _react2.default.createElement(Hn, _extends({ className: classes }, props));
};

Title.displayName = 'Title';

Title.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  spaced: _propTypes2.default.bool,
  is: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6'])
};

Title.defaultProps = {
  as: 'h1',
  is: '1',
  spaced: false
};

exports.default = Title;