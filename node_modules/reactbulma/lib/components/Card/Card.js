'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardImage = require('./CardImage');

var _CardImage2 = _interopRequireDefault(_CardImage);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An all-around flexible and composable component
*/
var Card = function Card(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var classes = (0, _classnames2.default)('card', className);

  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

Card.propTypes = {
  className: _propTypes2.default.string
};

Card.Image = _CardImage2.default;
Card.Content = _CardContent2.default;
Card.Header = _CardHeader2.default;
Card.Footer = _CardFooter2.default;

exports.default = Card;