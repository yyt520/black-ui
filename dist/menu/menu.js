import React, { useState } from 'react'
import classNames from 'classnames'
import MenuContext from './MenuContext'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
var RootMenu = function(_a) {
  var className = _a.className,
    style = _a.style,
    mode = _a.mode,
    onClick = _a.onClick,
    defaultSelectedKey = _a.defaultSelectedKey,
    defaultOpenKeys = _a.defaultOpenKeys,
    children = _a.children
  var _b = useState(defaultSelectedKey),
    currentSelectedKey = _b[0],
    setCurrentSelectedKey = _b[1]
  var classes = classNames('mk-menu', className, {
    'mk-menu-horizontal': mode === 'horizontal',
    'mk-menu-inline': mode === 'inline',
  })
  var handleClick = function(key) {
    setCurrentSelectedKey(key)
    if (typeof onClick === 'function') {
      onClick(key)
    }
  }
  var menuContext = {
    key: currentSelectedKey || '0',
    onClick: handleClick,
    mode: mode,
    defaultOpenKeys: defaultOpenKeys,
  }
  var renderChildren = function() {
    return React.Children.map(children, function(child, index) {
      //  child 是 ReactNode 类型，先断言成 FunctionComponentElement 类型，再拿到 displayName 内置属性
      var childElement = child
      var displayName = childElement.type.displayName
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 添加 index 属性，利用遍历时可以拿到的 index 变量来设置，这样使用时则无需给 MenuItem 传入 index 属性
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      }
      // eslint-disable-next-line no-console
      console.error('Warning: Menu has a child which is not a MenuItem component')
    })
  }
  return React.createElement(
    'ul',
    { style: style, className: classes },
    React.createElement(MenuContext.Provider, { value: menuContext }, renderChildren()),
  )
}
RootMenu.defaultProps = {
  mode: 'horizontal',
  defaultSelectedKey: '0',
  defaultOpenKeys: [],
}
var Menu = RootMenu
Menu.Item = MenuItem
Menu.SubMenu = SubMenu
export default Menu
