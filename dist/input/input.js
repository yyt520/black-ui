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
import React, { forwardRef } from 'react'
import classNames from 'classnames'
var Input = forwardRef(function(props, ref) {
  var _a
  var size = props.size,
    disabled = props.disabled,
    prefix = props.prefix,
    suffix = props.suffix,
    style = props.style,
    icon = props.icon,
    restProps = __rest(props, ['size', 'disabled', 'prefix', 'suffix', 'style', 'icon'])
  var classes = classNames(
    'mk-input-wrapper',
    ((_a = {}),
    (_a['input-size-' + size] = size),
    (_a['is-disabled'] = disabled),
    (_a['input-group'] = prefix || suffix),
    (_a['input-group-suffix'] = !!suffix),
    (_a['input-group-prefix'] = !!prefix),
    _a),
  )
  return React.createElement(
    'div',
    { className: classes, style: style },
    prefix && React.createElement('div', { className: 'mk-input-group-prefix' }, prefix),
    icon && React.createElement('div', { className: 'icon-wrapper' }, icon),
    React.createElement(
      'input',
      __assign({ ref: ref, className: 'mk-input-inner', disabled: disabled }, restProps),
    ),
    suffix && React.createElement('div', { className: 'mk-input-group-suffix' }, suffix),
  )
})
export default Input
