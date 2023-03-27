var __spreadArray =
  (this && this.__spreadArray) ||
  function(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i]
    return to
  }
import React, { useState, createContext, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { DownOutlined } from '@ant-design/icons'
import Input from '../input'
import Tag from '../tag'
import useClickOutside from '../hooks/useClickOutside'
import Transition from '../transition'
import Option from './Option'
export var SelectContext = createContext({ selectedValues: [] })
export var RootSelect = function(props) {
  var defaultValue = props.defaultValue,
    placeholder = props.placeholder,
    children = props.children,
    multiple = props.multiple,
    name = props.name,
    disabled = props.disabled,
    onChange = props.onChange,
    onVisibleChange = props.onVisibleChange
  var inputRef = useRef(null)
  var containerRef = useRef(null)
  var containerWidth = useRef(0)
  var _a = useState(Array.isArray(defaultValue) ? defaultValue : []),
    selectedValues = _a[0],
    setSelectedValues = _a[1]
  var _b = useState([]),
    options = _b[0],
    setOptions = _b[1]
  var _c = useState(false),
    menuOpen = _c[0],
    setMenuOpen = _c[1]
  var _d = useState(typeof defaultValue === 'string' ? defaultValue : ''),
    value = _d[0],
    setValue = _d[1]
  var handleOptionClick = function(optionValue, isSelected) {
    var updatedValues = [optionValue]
    if (!multiple) {
      setMenuOpen(false)
      setValue(optionValue)
      if (onVisibleChange) {
        onVisibleChange(false)
      }
    } else {
      // 多选模式
      setValue('')
      // 如果当前点击的选项已被选中，则去除选中状态；如果之前未被选中，则设为选中状态
      updatedValues = isSelected
        ? selectedValues.filter(function(v) {
            return v !== optionValue
          })
        : __spreadArray(__spreadArray([], selectedValues), [optionValue])
      setSelectedValues(updatedValues)
    }
    if (onChange) {
      onChange(optionValue, updatedValues)
    }
  }
  var handleInputValueChange = function(e) {
    var newValue = e.target.value.trim()
    if (multiple) return
    setValue(newValue)
  }
  useEffect(
    function() {
      var tempArr = []
      React.Children.map(children, function(child) {
        var childElement = child
        var _a = childElement.props.value,
          value = _a === void 0 ? '' : _a
        if (value !== 'disabled' && value) tempArr.push(value)
      })
      setOptions(tempArr)
    },
    [children],
  )
  useEffect(
    function() {
      // focus input
      if (inputRef.current) {
        inputRef.current.focus()
        if (multiple && selectedValues.length > 0) {
          inputRef.current.placeholder = ''
        } else if (placeholder) inputRef.current.placeholder = placeholder
      }
    },
    [selectedValues, multiple, placeholder],
  )
  useEffect(function() {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.getBoundingClientRect().width
    }
  })
  useClickOutside(containerRef, function() {
    if (!multiple && options.includes(value)) {
      setValue('')
    }
    setMenuOpen(false)
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false)
    }
  })
  var passedContext = {
    onSelect: handleOptionClick,
    selectedValues: selectedValues,
    multiple: multiple,
  }
  var handleClick = function(e) {
    e.preventDefault()
    if (!disabled) {
      setMenuOpen(!menuOpen)
      if (onVisibleChange) {
        onVisibleChange(!menuOpen)
      }
    }
  }
  var generateOptions = function() {
    return React.Children.map(children, function(child, i) {
      var childElement = child
      if (childElement.type.displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: 'select-' + i,
        })
      }
      // eslint-disable-next-line no-console
      console.error('Warning: Select has a child which is not a Option component')
    })
  }
  var containerClass = classNames('mk-select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple,
  })
  return React.createElement(
    'div',
    { className: containerClass, ref: containerRef },
    React.createElement(
      'div',
      { className: 'mk-select-input', onClick: handleClick },
      React.createElement(Input, {
        ref: inputRef,
        placeholder: placeholder,
        value: value,
        readOnly: multiple,
        onChange: handleInputValueChange,
        disabled: disabled,
        name: name,
        icon: React.createElement(DownOutlined, null),
        autoComplete: 'off',
      }),
    ),
    React.createElement(
      SelectContext.Provider,
      { value: passedContext },
      React.createElement(
        Transition,
        { in: menuOpen, animation: 'zoom-in-top', timeout: 300 },
        React.createElement('ul', { className: 'mk-select-dropdown' }, generateOptions()),
      ),
    ),
    multiple &&
      React.createElement(
        'div',
        {
          className: 'mk-selected-tags',
          style: { maxWidth: containerWidth.current - 32 },
        },
        selectedValues.map(function(selectedValue, index) {
          return React.createElement(
            Tag,
            // eslint-disable-next-line react/no-array-index-key
            {
              // eslint-disable-next-line react/no-array-index-key
              key: 'tag-' + index + '-' + Math.random(),
              text: selectedValue,
              onClose: function() {
                handleOptionClick(selectedValue, true)
              },
              closable: true,
            },
          )
        }),
      ),
  )
}
RootSelect.defaultProps = {
  name: 'mk-select',
}
var Select = RootSelect
Select.Option = Option
export default Select
