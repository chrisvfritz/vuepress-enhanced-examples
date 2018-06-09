<script>
import VueExampleSimple from '../../../../src/components/vue-example-simple'

export default {
  inheritAttrs: false,
  components: { VueExampleSimple },
}
</script>

<template>
  <VueExampleSimple
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
