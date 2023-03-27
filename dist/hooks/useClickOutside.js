import { useEffect } from 'react'
function useClickOutside(ref, handler) {
  useEffect(
    function() {
      var listener = function(event) {
        var _a, _b
        var isClickOutside = !((_b =
          (_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains) === null ||
        _b === void 0
          ? void 0
          : _b.call(_a, event.target))
        if (isClickOutside && ref.current) {
          handler(event)
        }
      }
      document.addEventListener('click', listener)
      return function() {
        document.removeEventListener('click', listener)
      }
    },
    [ref, handler],
  )
}
export default useClickOutside
