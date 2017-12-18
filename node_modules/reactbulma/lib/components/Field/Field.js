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

var Field = function Field(_ref) {
  var hasAddons = _ref.hasAddons,
      grouped = _ref.grouped,
      groupedCentered = _ref.groupedCentered,
      groupedRight = _ref.groupedRight,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['hasAddons', 'grouped', 'groupedCentered', 'groupedRight', 'className']);

  var classes = (0, _classnames2.default)('field', {
    'has-addons': hasAddons,
    'is-grouped': grouped || groupedCentered || groupedRight,
    'is-grouped-centered': groupedCentered,
    'is-grouped-right': groupedRight
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

Field.displayName = 'Field';

Field.propTypes = {
  className: _propTypes2.default.string,
  hasAddons: _propTypes2.default.bool,
  grouped: _propTypes2.default.bool,
  groupedCentered: _propTypes2.default.bool,
  groupedRight: _propTypes2.default.bool
};

exports.default = Field;