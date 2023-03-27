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
import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { LoadingOutlined } from '@ant-design/icons'
import Transition from '../transition'
import Input from '../input/input'
import useDebounce from '../hooks/useDebounce'
import useClickOutside from '../hooks/useClickOutside'
var AutoComplete = function(_a) {
  var _b = _a.value,
    value = _b === void 0 ? '' : _b,
    onSearch = _a.onSearch,
    onSelect = _a.onSelect,
    renderOption = _a.renderOption,
    restProps = __rest(_a, ['value', 'onSearch', 'onSelect', 'renderOption'])
  var _c = useState(value),
    inputValue = _c[0],
    setInputValue = _c[1]
  var _d = useState(false),
    showDropdown = _d[0],
    setShowDropdown = _d[1]
  var _e = useState(false),
    isLoading = _e[0],
    setIsLoading = _e[1]
  var _f = useState([]),
    options = _f[0],
    setOptions = _f[1]
  var _g = useState(-1),
    highlightIndex = _g[0],
    setHighlightIndex = _g[1]
  var triggerSearch = useRef(false)
  var dropdownRef = useRef(null)
  var debouncedValue = useDebounce(inputValue, 300)
  // 当点击到AutoComplete组件外的区域，会自动关闭下拉框选项部分
  useClickOutside(dropdownRef, function() {
    setOptions([])
    setShowDropdown(false)
  })
  useEffect(
    function() {
      if (debouncedValue && triggerSearch.current) {
        setOptions([])
        var result = onSearch(debouncedValue)
        if (result instanceof Promise) {
          setIsLoading(true)
          result.then(function(data) {
            setIsLoading(false)
            setOptions(data)
            if (data.length > 0) {
              setShowDropdown(true)
            }
          })
        } else {
          setOptions(result)
          if (result.length > 0) {
            setShowDropdown(true)
          }
        }
      } else {
        setShowDropdown(false)
      }
      setHighlightIndex(-1)
    },
    [debouncedValue, onSearch],
  )
  var handleChange = function(e) {
    var newValue = e.target.value.trim()
    setInputValue(newValue)
    triggerSearch.current = true
  }
  var handleSelect = function(item) {
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  // eslint-disable-next-line no-confusing-arrow
  var renderTemplate = function(item) {
    return renderOption ? renderOption(item) : item.value
  }
  var highlight = function(index) {
    var currentIndex = index
    if (index < 0) currentIndex = 0
    if (index >= options.length) {
      currentIndex = options.length - 1
    }
    setHighlightIndex(currentIndex)
  }
  var handleKeyDown = function(e) {
    switch (e.key) {
      // 回车
      case 'Enter':
        if (options[highlightIndex]) {
          handleSelect(options[highlightIndex])
        }
        break
      // 上
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      // 下
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      // ESC
      case 'Escape':
        setShowDropdown(false)
        break
      default:
        break
    }
  }
  var generateDropdown = function() {
    return React.createElement(
      Transition,
      { in: showDropdown || isLoading, animation: 'zoom-in-top', timeout: 300 },
      React.createElement(
        'ul',
        { className: 'mk-suggestion-list' },
        isLoading &&
          React.createElement(
            'div',
            { className: 'suggestion-loading-icon' },
            React.createElement(LoadingOutlined, null),
          ),
        options.map(function(item, index) {
          var classes = classNames('suggestion-item', {
            'is-active': index === highlightIndex, // 结合highlightIndex，做高亮处理
          })
          return (
            // eslint-disable-next-line react/no-array-index-key
            React.createElement(
              'li',
              {
                key: index,
                className: classes,
                onClick: function() {
                  return handleSelect(item)
                },
              },
              renderTemplate(item),
            )
          )
        }),
      ),
    )
  }
  return React.createElement(
    'div',
    { className: 'mk-auto-complete', ref: dropdownRef },
    React.createElement(
      Input,
      __assign(
        { value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown },
        restProps,
      ),
    ),
    generateDropdown(),
  )
}
export default AutoComplete
