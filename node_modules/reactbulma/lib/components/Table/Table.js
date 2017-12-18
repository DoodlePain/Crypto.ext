'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableThead = require('./TableThead');

var _TableThead2 = _interopRequireDefault(_TableThead);

var _TableFoot = require('./TableFoot');

var _TableFoot2 = _interopRequireDefault(_TableFoot);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableTr = require('./TableTr');

var _TableTr2 = _interopRequireDefault(_TableTr);

var _TableTd = require('./TableTd');

var _TableTd2 = _interopRequireDefault(_TableTd);

var _TableTh = require('./TableTh');

var _TableTh2 = _interopRequireDefault(_TableTh);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
The inevitable HTML table, with special case cells
*/
var Table = function Table(_ref) {
  var bordered = _ref.bordered,
      hoverable = _ref.hoverable,
      narrow = _ref.narrow,
      striped = _ref.striped,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['bordered', 'hoverable', 'narrow', 'striped', 'className']);

  var classes = (0, _classnames2.default)('table', {
    'is-bordered': bordered,
    'is-hoverable': hoverable,
    'is-narrow': narrow,
    'is-striped': striped
  }, className);

  return _react2.default.createElement('table', _extends({ className: classes }, props));
};

Table.displayName = 'Table';

Table.propTypes = {
  bordered: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  hoverable: _propTypes2.default.bool,
  narrow: _propTypes2.default.bool,
  striped: _propTypes2.default.bool
};

Table.Head = _TableThead2.default;
Table.Foot = _TableFoot2.default;
Table.Body = _TableBody2.default;
Table.Tr = _TableTr2.default;
Table.Td = _TableTd2.default;
Table.Th = _TableTh2.default;

exports.default = Table;