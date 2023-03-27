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
import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import { DownOutlined } from '@ant-design/icons'
import MenuContext from './MenuContext'
import Transition from '../transition'
var SubMenu = function(_a) {
  var index = _a.index,
    title = _a.title,
    className = _a.className,
    style = _a.style,
    children = _a.children
  var _b = useContext(MenuContext),
    key = _b.key,
    mode = _b.mode,
    defaultOpenKeys = _b.defaultOpenKeys
  var openedSubMenus = defaultOpenKeys
  var isOpened = index && mode === 'inline' ? openedSubMenus.includes(index) : false
  var _c = useState(isOpened),
    menuOpen = _c[0],
    setOpen = _c[1]
  var classes = classNames('mk-menu-item mk-submenu-item', className, {
    'is-active': key === index,
    'is-opened': menuOpen,
    'is-inline': mode === 'inline',
  })
  var handleClick = function(e) {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  var timer
  var handleMouse = function(e, toggle) {
    clearTimeout(timer)
    e.preventDefault()
    timer = window.setTimeout(function() {
      setOpen(toggle)
    }, 100)
  }
  var handleEvents =
    mode !== 'inline'
      ? {
          onMouseEnter: function(e) {
            return handleMouse(e, true)
          },
          onMouseLeave: function(e) {
            return handleMouse(e, false)
          },
        }
      : {}
  var clickEvents = mode === 'inline' ? { onClick: handleClick } : {}
  var renderChildren = function() {
    var subMenuClasses = classNames('mk-submenu', {
      'menu-opened': menuOpen,
    })
    var childrenComponent = React.Children.map(children, function(child, i) {
      var childElement = child
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: index + '-' + i,
        })
      }
      // eslint-disable-next-line no-console
      console.error('Warning: SubMenu has a child which is not a MenuItem component')
    })
    return React.createElement(
      Transition,
      { in: menuOpen, timeout: 300, animation: 'zoom-in-top' },
      React.createElement('ul', { className: subMenuClasses }, childrenComponent),
    )
  }
  return React.createElement(
    'li',
    __assign({ style: style, className: classes }, handleEvents),
    React.createElement(
      'div',
      __assign({ className: 'mk-submenu-title' }, clickEvents),
      title,
      React.createElement(DownOutlined, { className: 'arrow-icon' }),
    ),
    renderChildren(),
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
