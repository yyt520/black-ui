var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
    return t
  }
import React from 'react'
import classNames from 'classnames'
var isString = function(children) {
  if (typeof children === 'string') {
    return React.createElement('span', null, children)
  }
  return children
}
var Button = function(_a) {
  var _b
  var type = _a.type,
    htmlType = _a.htmlType,
    size = _a.size,
    disabled = _a.disabled,
    block = _a.block,
    className = _a.className,
    href = _a.href,
    children = _a.children,
    restProps = __rest(_a, [
      'type',
      'htmlType',
      'size',
      'disabled',
      'block',
      'className',
      'href',
      'children',
    ])
  var classes = classNames(
    'mk-btn',
    className,
    ((_b = {}),
    (_b['mk-btn-' + type] = type),
    (_b['mk-btn-' + size] = size),
    (_b['mk-btn-block'] = block),
    _b),
  )
  if (type === 'link' && href) {
    return React.createElement(
      'a',
      __assign({ className: classes, href: href }, restProps),
      children,
    )
  }
  var kids = isString(children)
  return React.createElement(
    'button',
    __assign({ type: htmlType, className: classes, disabled: disabled }, restProps),
    kids,
  )
}
Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'md',
  block: false,
  htmlType: 'button',
}
export default Button
