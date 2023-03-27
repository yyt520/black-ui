import React, { useContext } from 'react'
import classNames from 'classnames'
import MenuContext from './MenuContext'
var MenuItem = function(_a) {
  var index = _a.index,
    className = _a.className,
    style = _a.style,
    disabled = _a.disabled,
    children = _a.children
  var context = useContext(MenuContext)
  var classes = classNames('mk-menu-item', className, {
    'is-disabled': disabled,
    // eslint-disable-next-line react/destructuring-assignment
    'is-active': context.key === index,
  })
  var handleClick = function() {
    var onClick = context.onClick
    if (onClick && !disabled && typeof index === 'string') {
      onClick(index)
    }
  }
  return React.createElement(
    'li',
    { className: classes, style: style, onClick: handleClick },
    children,
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
