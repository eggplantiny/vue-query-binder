let stringToDynamicValue = (str) => {
    try {
        return JSON.parse(str)
    } catch (e) {
        return str
    }
}

export default function createComputedQuery (
    { prefix = '', suffix = '', overwrite = false } =
        { prefix: '', suffix: '', overwrite: false }) {
    return {
        beforeCreate () {
            if (this.$options.computed === undefined) {
                this.$options.computed = { }
            }

            if (this.$route !== undefined) {
                Object.keys(this.$route.query).forEach(key => {
                    const generatedKey = `${prefix}${key}${suffix}`

                    if (this.$options.computed[generatedKey] !== undefined && overwrite === false) {
                        return
                    }

                    this.$options.computed[generatedKey] = () => stringToDynamicValue(this.$route.query[key])
                })
            }
        }
    }
}
