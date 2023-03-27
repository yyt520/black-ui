import React, { useState } from 'react'
import classNames from 'classnames'
import CloseOutlined from '@ant-design/icons/CloseOutlined'
import Transition from '../transition'
var Alert = function(_a) {
  var _b
  var type = _a.type,
    description = _a.description,
    message = _a.message,
    closable = _a.closable, // Whether Alert can be closed
    onClose = _a.onClose
  var _c = useState(false),
    closed = _c[0],
    setClosed = _c[1]
  var handleClose = function(e) {
    setClosed(true)
    onClose === null || onClose === void 0 ? void 0 : onClose(e)
  }
  var classes = classNames(
    'mk-alert',
    'className',
    ((_b = {}), (_b['mk-alert-' + type] = type), _b),
  )
  var titleClass = classNames('mk-alert-message')
  return React.createElement(
    Transition,
    { in: !closed, timeout: 300, animation: 'zoom-in-left' },
    React.createElement(
      'div',
      { className: classes },
      React.createElement('span', { className: titleClass }, message),
      description &&
        React.createElement('p', { className: 'mk-alert-desc' }, description),
      closable &&
        React.createElement(
          'span',
          { className: 'mk-alert-close', onClick: handleClose },
          React.createElement(CloseOutlined, null),
        ),
    ),
  )
}
Alert.defaultProps = {
  type: 'warning',
  closable: false,
}
export default Alert
