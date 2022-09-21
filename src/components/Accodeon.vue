<template>
  <div class="c-c-accdeon">
    <vue-collapsible-panel-group>
      <vue-collapsible-panel>
        <template #title> {{ title }}</template>
        <template #content> {{ content }} </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel>
        <template #title> Panel B Title </template>
        <template #content> Panel B Content </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>
  </div>
</template>

<script lang="ts">
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from "@dafcoe/vue-collapsible-panel"
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css"
import { title } from "process"

export default {
  name: "Accodeon",
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  data() {
    return {}
  },
  props:['array']
}
</script>

<style lang="scss">
.vcp__header-title {
  color: #000;
}
.vcp__body-content {
  color: #000;
}
</style>
