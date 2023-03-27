import { useState, useEffect } from 'react'
function useDebounce(value, delay) {
  var _a = useState(value),
    debouncedValue = _a[0],
    setDebouncedValue = _a[1]
  useEffect(
    function() {
      var timer = setTimeout(function() {
        return setDebouncedValue(value)
      }, delay || 500)
      return function() {
        clearTimeout(timer)
      }
    },
    [value, delay],
  )
  return debouncedValue
}
export default useDebounce
