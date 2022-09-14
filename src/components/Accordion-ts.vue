<template>
  <div>
    <button @click="toggleAccordion(isOpen)" class="flex items-center space-x-3">
      <slot name="title" />

      <svg
        class="w-3 transition-all duration-200 transform"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div
      class="transition-all duration-400 overflow-hidden"
      :class="{
        'max-h-96': isOpen,
        'max-h-0': !isOpen,
      }"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(): {
    isOpen :boolean
  } {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
