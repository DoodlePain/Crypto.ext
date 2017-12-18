'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FileCta = require('./FileCta');

var _FileCta2 = _interopRequireDefault(_FileCta);

var _FileIcon = require('./FileIcon');

var _FileIcon2 = _interopRequireDefault(_FileIcon);

var _FileInput = require('./FileInput');

var _FileInput2 = _interopRequireDefault(_FileInput);

var _FileLabel = require('./FileLabel');

var _FileLabel2 = _interopRequireDefault(_FileLabel);

var _FileName = require('./FileName');

var _FileName2 = _interopRequireDefault(_FileName);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
A multi-purpose horizontal level, which can contain almost any other element
*/
var File = function File(_ref) {
  var boxed = _ref.boxed,
      className = _ref.className,
      centered = _ref.centered,
      danger = _ref.danger,
      fullwidth = _ref.fullwidth,
      info = _ref.info,
      large = _ref.large,
      medium = _ref.medium,
      name = _ref.name,
      primary = _ref.primary,
      right = _ref.right,
      small = _ref.small,
      warning = _ref.warning,
      props = _objectWithoutProperties(_ref, ['boxed', 'className', 'centered', 'danger', 'fullwidth', 'info', 'large', 'medium', 'name', 'primary', 'right', 'small', 'warning']);

  var classes = (0, _classnames2.default)('file', {
    'is-boxed': boxed,
    'is-centered': centered,
    'is-danger': danger,
    'is-fullwidth': fullwidth,
    'is-info': info,
    'is-large': large,
    'is-medium': medium,
    'has-name': name,
    'is-primary': primary,
    'is-right': right,
    'is-small': small,
    'is-warning': warning
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

File.displayName = 'File';

File.propTypes = {
  boxed: _propTypes2.default.bool,
  centered: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  danger: _propTypes2.default.bool,
  fullwidth: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  name: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  warning: _propTypes2.default.bool
};

File.Cta = _FileCta2.default;
File.Icon = _FileIcon2.default;
File.Input = _FileInput2.default;
File.Label = _FileLabel2.default;
File.Name = _FileName2.default;

exports.default = File;