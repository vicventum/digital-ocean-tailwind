// plugins/sal.js
import sal from 'sal.js'
import 'sal.js/dist/sal.css'

export default {
  install(app) {
    app.config.globalProperties.$sal = sal
    app.mixin({
      mounted() {
        sal({
          once: false,
          threshold: 0.2
        })
      }
    })
  }
}
