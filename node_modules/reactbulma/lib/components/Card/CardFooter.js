'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardFooterItem = require('./CardFooterItem');

var _CardFooterItem2 = _interopRequireDefault(_CardFooterItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardFooter = function CardFooter(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var classes = (0, _classnames2.default)('card-footer', className);

  return _react2.default.createElement('footer', { className: classes });
};

CardFooter.displayName = 'Card.Footer';

CardFooter.propTypes = {
  className: _propTypes2.default.string
};

CardFooter.Item = _CardFooterItem2.default;

exports.default = CardFooter;