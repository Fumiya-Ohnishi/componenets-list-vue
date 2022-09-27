<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <Accodeon />
  <AccodeonList />
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
  <Btn />
  <CountBtn />
  <AccodeonTab />
</template>

<script lang="ts" setup>

import Accodeon from '../components/Accodeon.vue'
import AccodeonList from '../components/Accodeon-list.vue'
import Btn from '../components/Btn.vue'
import CountBtn from '../components/CountBtn.vue'
import AccodeonTab from '../components/Accodeon-tab.vue'
import AccordionTs from '../components/Accordion-ts.vue'

</script>