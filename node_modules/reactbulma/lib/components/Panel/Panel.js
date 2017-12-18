'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PanelBlock = require('./PanelBlock');

var _PanelBlock2 = _interopRequireDefault(_PanelBlock);

var _PanelHeading = require('./PanelHeading');

var _PanelHeading2 = _interopRequireDefault(_PanelHeading);

var _PanelIcon = require('./PanelIcon');

var _PanelIcon2 = _interopRequireDefault(_PanelIcon);

var _PanelTabs = require('./PanelTabs');

var _PanelTabs2 = _interopRequireDefault(_PanelTabs);

var _PanelTab = require('./PanelTab');

var _PanelTab2 = _interopRequireDefault(_PanelTab);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
A composable panel, for compact controls
*/
var Panel = function Panel(_ref) {
  var Nav = _ref.as,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'className']);

  var classes = (0, _classnames2.default)('panel', className);

  return _react2.default.createElement(Nav, _extends({ className: classes }, props));
};

Panel.displayName = 'Panel';

Panel.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string
};

Panel.defaultProps = {
  as: 'nav'
};

Panel.Block = _PanelBlock2.default;
Panel.Heading = _PanelHeading2.default;
Panel.Icon = _PanelIcon2.default;
Panel.Tabs = _PanelTabs2.default;
Panel.Tab = _PanelTab2.default;

exports.default = Panel;