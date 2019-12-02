let stringToDynamicValue = (str) => {
    try {
        return JSON.parse(str)
    } catch (e) {
        return str
    }
}

export default function createComputedQuery ({ prefix = '', suffix = '' } = { prefix: '', suffix: '' }) {
    return {
        beforeCreate () {
            if (this.$options.computed === undefined) {
                this.$options.computed = { }
            }

            if (this.$route !== undefined) {
                Object.keys(this.$route.query).forEach(key => {
                    this.$options.computed[`${prefix}${key}${suffix}`] = () => stringToDynamicValue(this.$route.query[key])
                })
            }
        }
    }
}
