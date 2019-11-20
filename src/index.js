import ComputedQuery  from './mixins/ComputedQuery'

function install(Vue, options) {
    Vue.mixin(ComputedQuery(options))
}

export default {
    install,
    version: process.env.VUE_APP_VERSION,
}
