import Vue from 'vue'

export default () => {
  let handleOutsideClick
  Vue.directive('closable', {
    bind (el, binding, vnode) {
      handleOutsideClick = (e) => {
        e.stopPropagation()

        const { handler, exclude } = binding.value

        let clickedOnExcludedEl = false

        exclude.forEach(refName => {
          if (!clickedOnExcludedEl) {
            const excludedEl = vnode.context.$refs[refName]
            if (excludedEl) {
              clickedOnExcludedEl = excludedEl.contains(e.target)
            }
          }
        })

        if (!el.contains(e.target) && !clickedOnExcludedEl) {
          vnode.context[handler]()
        }
      }

      document.addEventListener('click', handleOutsideClick)
      document.addEventListener('touchstart', handleOutsideClick)
    },
    unbind() {  
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }

  })
}
