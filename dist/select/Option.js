import React, { useContext } from 'react'
import classNames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
import { SelectContext } from './select'
export var Option = function(_a) {
  var value = _a.value,
    label = _a.label,
    disabled = _a.disabled,
    children = _a.children,
    index = _a.index
  var _b = useContext(SelectContext),
    onSelect = _b.onSelect,
    selectedValues = _b.selectedValues,
    multiple = _b.multiple
  var isSelected = selectedValues.includes(value)
  var classes = classNames('mk-select-item', {
    'is-disabled': disabled,
    'is-selected': isSelected,
  })
  // eslint-disable-next-line no-shadow
  var handleClick = function(e, value, isSelected) {
    e.preventDefault()
    if (onSelect && !disabled) {
      onSelect(value, isSelected)
    }
  }
  return React.createElement(
    'li',
    {
      key: index,
      className: classes,
      onClick: function(e) {
        handleClick(e, value, isSelected)
      },
    },
    children || label || value,
    multiple && isSelected && React.createElement(CheckOutlined, null),
  )
}
Option.displayName = 'Option'
export default Option
