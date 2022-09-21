<template>
  <button type="button" v-on:click="click">クリックしてください</button>
</template>

<script lang="ts">
export default {
  name: "btn",
  methods: {
    click() {
      return console.log("クリックされたよ！！！！")
    },
  },
}
</script>
