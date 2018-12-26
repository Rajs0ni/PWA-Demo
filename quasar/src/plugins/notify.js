// import something here
import { Notify } from 'quasar'

// leave the export, even if you don't use it

let defaults = {
  color: 'white',
  textColor: 'white',
  timeout: 1000,
  position: 'top'
}

let notifyInstance = (options) => {
  if (typeof options !== 'object') {
    options = Object.assign({}, defaults, { message: options })
  }

  let optionsToUse = Object.assign({}, defaults, options)

  return Notify.create(optionsToUse)
}

export default ({ Vue }) => {
  Vue.prototype.$notify = notifyInstance
}

export {
  // for use outside components
  notifyInstance as Notify
}
