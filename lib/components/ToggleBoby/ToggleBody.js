'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _reactBootstrap = require('react-bootstrap');

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

var ToggleBody = function ToggleBody(props) {
  return _react2.default.createElement(
    _terraSpacer2.default,
    { margin: 'large' },
    _react2.default.createElement(
      _reactBootstrap.Container,
      null,
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { style: { textAlign: 'right' } },
          _react2.default.createElement(
            _terraSpacer2.default,
            { margin: 'medium' },
            _react2.default.createElement(_terraButton2.default, { onClick: props.onClose, icon: _react2.default.createElement(_IconClose2.default, null), isIconOnly: true, text: 'Close', variant: 'utility' })
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          null,
          _react2.default.createElement(
            _terraSpacer2.default,
            { marginBottom: 'medium' },
            props.children
          )
        )
      )
    )
  );
};

ToggleBody.propTypes = {
  onClose: _proptypes2.default.func,
  children: _proptypes2.default.node
};

ToggleBody.defaultProps = {
  onClose: function onClose() {},
  children: null
};

exports.default = ToggleBody;