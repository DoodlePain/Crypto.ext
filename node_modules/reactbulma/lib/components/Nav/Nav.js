'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavLeft = require('./NavLeft');

var _NavLeft2 = _interopRequireDefault(_NavLeft);

var _NavCenter = require('./NavCenter');

var _NavCenter2 = _interopRequireDefault(_NavCenter);

var _NavRight = require('./NavRight');

var _NavRight2 = _interopRequireDefault(_NavRight);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavToggle = require('./NavToggle');

var _NavToggle2 = _interopRequireDefault(_NavToggle);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
A responsive horizontal nav bar that can contain links, tabs, buttons, icons, and a logo
*/
var Nav = function Nav(_ref) {
  var Div = _ref.as,
      hasShadow = _ref.hasShadow,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'hasShadow', 'className']);

  var classes = (0, _classnames2.default)('nav', {
    'has-shadow': hasShadow
  }, className);

  return _react2.default.createElement(Div, _extends({ className: classes }, props));
};

Nav.displayName = 'Nav';

Nav.propTypes = {
  as: _propTypes2.default.node,
  hasShadow: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

Nav.defaultProps = {
  as: 'nav'
};

Nav.Left = _NavLeft2.default;
Nav.Center = _NavCenter2.default;
Nav.Right = _NavRight2.default;
Nav.Item = _NavItem2.default;
Nav.Toggle = _NavToggle2.default;

exports.default = Nav;