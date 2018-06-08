import Vue from 'vue'

const globalSettingsScope = '__vueExampleGlobalSettings'
const data = {
  jsStyle: 'es5',
}

for (const dataPropertyName in data) {
  const dataPropertyDefault = data[dataPropertyName]
  data[dataPropertyName] =
    window.localStorage.getItem(`${globalSettingsScope}.${dataPropertyName}`) ||
    dataPropertyDefault
}

export default new Vue({
  data,
  watch: {
    ...Object.keys(data)
      .map(dataPropertyName => ({
        [dataPropertyName](newValue) {
          window.localStorage.setItem(
            `${globalSettingsScope}.${dataPropertyName}`,
            newValue
          )
        },
      }))
      .reduce((a, b) => ({ ...a, ...b }), {}),
  },
})
