<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Accodeon from "./components/Accodeon.vue"
import AccordionTs from "./components/Accordion-ts.vue"
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <Accodeon />
  <AccordionTs class="mb-4">
    <template v-slot:title>
      <span class="font-semibold text-xl">Accordion 1</span>
    </template>
    <template v-slot:content>
      <p>
        <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
        porro. Non a excepturi, voluptatibus ipsam magnam, eligendi, accusantium
        ipsa quae quis praesentium voluptate saepe ullam sint ea itaque
        consectetur impedit?
      </p>
    </template>
  </AccordionTs>
</template>

<style scoped lang="scss"></style>