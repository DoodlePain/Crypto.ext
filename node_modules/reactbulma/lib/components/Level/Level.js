'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LevelItem = require('./LevelItem');

var _LevelItem2 = _interopRequireDefault(_LevelItem);

var _LevelLeft = require('./LevelLeft');

var _LevelLeft2 = _interopRequireDefault(_LevelLeft);

var _LevelRight = require('./LevelRight');

var _LevelRight2 = _interopRequireDefault(_LevelRight);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
A multi-purpose horizontal level, which can contain almost any other element
*/
var Level = function Level(_ref) {
  var Nav = _ref.as,
      mobile = _ref.mobile,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'mobile', 'className']);

  var classes = (0, _classnames2.default)('level', {
    'is-mobile': mobile
  }, className);

  return _react2.default.createElement(Nav, _extends({ className: classes }, props));
};

Level.displayName = 'Level';

Level.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string,
  mobile: _propTypes2.default.bool
};

Level.defaultProps = {
  as: 'nav',
  mobile: false
};

Level.Item = _LevelItem2.default;
Level.Left = _LevelLeft2.default;
Level.Right = _LevelRight2.default;

exports.default = Level;