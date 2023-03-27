import React, { useState } from 'react'
import classNames from 'classnames'
import TabPane from './TabPane'
var RootTab = function(_a) {
  var className = _a.className,
    defaultActiveKey = _a.defaultActiveKey,
    type = _a.type,
    onTabClick = _a.onTabClick,
    children = _a.children
  var _b = useState(defaultActiveKey),
    activeKey = _b[0],
    setActiveKey = _b[1]
  var navClass = classNames('mk-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  })
  var handleClick = function(e, index, disabled) {
    if (!disabled) {
      setActiveKey(index)
      if (onTabClick) {
        onTabClick(index)
      }
    }
  }
  var renderNavLinks = function() {
    return React.Children.map(children, function(child, index) {
      var childElement = child
      var _a = childElement.props,
        tab = _a.tab,
        disabled = _a.disabled
      var classes = classNames('mk-tabs-nav-item', {
        'is-active': activeKey === index,
        disabled: disabled,
      })
      return React.createElement(
        'li',
        {
          className: classes,
          /* eslint-disable-next-line react/no-array-index-key */
          key: 'nav-item-' + index,
          onClick: function(e) {
            handleClick(e, index, disabled)
          },
        },
        tab,
      )
    })
  }
  var renderContent = function() {
    return React.Children.map(children, function(child, index) {
      if (index === activeKey) {
        return child
      }
    })
  }
  return React.createElement(
    'div',
    { className: 'mk-tabs ' + className },
    React.createElement('ul', { className: navClass }, renderNavLinks()),
    React.createElement('div', { className: 'mk-tabs-content' }, renderContent()),
  )
}
RootTab.defaultProps = {
  defaultActiveKey: 0,
  type: 'line',
}
var Tabs = RootTab
Tabs.TabPane = TabPane
export default Tabs
