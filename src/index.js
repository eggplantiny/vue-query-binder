import ComputedQuery  from './mixins/ComputedQuery'

function install(Vue, options) {
    const mixin = ComputedQuery(options)
    Vue.mixin(mixin)
}

export default {
    install,
    version: process.env.VUE_APP_VERSION,
}
