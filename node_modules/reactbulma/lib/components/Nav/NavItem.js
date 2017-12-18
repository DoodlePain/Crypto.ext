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

var NavItem = function NavItem(_ref) {
  var Item = _ref.as,
      active = _ref.active,
      tab = _ref.tab,
      hiddenTablet = _ref.hiddenTablet,
      hiddenMobile = _ref.hiddenMobile,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'active', 'tab', 'hiddenTablet', 'hiddenMobile', 'className']);

  var classes = (0, _classnames2.default)('nav-item', {
    'is-active': active,
    'is-tab': tab,
    'is-hidden-tablet': hiddenTablet,
    'is-hidden-mobile': hiddenMobile
  }, className);

  return _react2.default.createElement(Item, _extends({ className: classes }, props));
};

NavItem.displayName = 'Nav.Item';

NavItem.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  tab: _propTypes2.default.bool,
  hiddenTablet: _propTypes2.default.bool,
  hiddenMobile: _propTypes2.default.bool
};

NavItem.defaultProps = {
  as: 'a'
};

exports.default = NavItem;