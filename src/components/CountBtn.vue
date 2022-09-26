<template>
  <p>{{ number }}回クリックされました！！</p>
  <button type="button" v-on:click="countUp(number)" class="c-btn">+</button>
  <button type="button" v-on:click="countDoun(number)" class="c-btn">-</button>
</template>

<style lang="scss">
.c-btn {
  width: 100px;
}
</style>

<script lang="ts">
export default {
  name: "countBtn",
  data() {
    return {
      number: 0 as number,
    }
  },
  methods: {
    countUp(number: number): number {
      console.log(number)
      console.log(typeof this.number)
      return this.number++
    },
    countDoun(number: number): number {
      console.log(number)
      console.log(typeof number)
      return this.number--
    },
  },
}
</script>
