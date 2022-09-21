<template><Accodeon /></template>
<!-- <template><Accodeon title:array="['test1','test2']" content="text" /></template> -->

<script lang="ts">
import Accodeon from "./Accodeon.vue"
export default {
  name: "AccodeonList",
  components: { Accodeon },
  props: {
    type: String,
    arrey: [
      {
        title: "test1",
        text: "text1",
      },
      {
        title: "test2",
        text: "text2",
      },
      {
        title: "test3",
        text: "text3",
      },
      {
        title: "test4",
        text: "text",
      },
    ],
  },
}
</script>

<style lang="scss"></style>