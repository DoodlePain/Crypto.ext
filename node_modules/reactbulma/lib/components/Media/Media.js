'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MediaLeft = require('./MediaLeft');

var _MediaLeft2 = _interopRequireDefault(_MediaLeft);

var _MediaContent = require('./MediaContent');

var _MediaContent2 = _interopRequireDefault(_MediaContent);

var _MediaRight = require('./MediaRight');

var _MediaRight2 = _interopRequireDefault(_MediaRight);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
The famous media object prevalent in social media interfaces, but useful in any context
*/
var Media = function Media(_ref) {
  var Article = _ref.as,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['as', 'className']);

  var classes = (0, _classnames2.default)('media', className);

  return _react2.default.createElement(Article, _extends({ className: classes }, props));
};

Media.displayName = 'Media';

Media.propTypes = {
  as: _propTypes2.default.node,
  className: _propTypes2.default.string
};

Media.defaultProps = {
  as: 'article'
};

Media.Left = _MediaLeft2.default;
Media.Content = _MediaContent2.default;
Media.Right = _MediaRight2.default;

exports.default = Media;