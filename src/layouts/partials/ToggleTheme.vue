<template>
  <a
    role="button"
    @click.prevent="toggleTheme()"
    :aria-label="'Toggle ' + nextTheme"
    :title="'Toggle ' + nextTheme"
    class="toggle--theme"
  >
    <span v-for="theme in themes" :key="theme" :data-theme="theme" />

    <svg
      v-if="current === 'light'"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-sun"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>

    <svg
      v-else-if="current === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-moon"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </a>
</template>

<script>
export default {
  data() {
    return {
      themes: ['light', 'dark'],
      current: 'light',
    }
  },
  computed: {
    nextTheme() {
      const currentIndex = this.themes.indexOf(this.current)
      const nextIndex = (currentIndex + 1) % this.themes.length
      return this.themes[nextIndex]
    },
  },
  methods: {
    toggleTheme() {
      const currentIndex = this.themes.indexOf(this.current)
      const nextIndex = (currentIndex + 1) % this.themes.length
      window.__setPreferredTheme(this.themes[nextIndex])
      this.current = this.themes[nextIndex]
    },
  },
  mounted() {
    if (window.__theme) {
      this.current = window.__theme
    }
  },
}
</script>

<style lang="scss">
.toggle--theme {
  position: absolute;
  width: 1em;
  height: 1em;
  top: 0.15rem;
  right: 1.3rem;
  z-index: 9999;
  color: var(--color-g-5);
  background-color: transparent;
  padding: 0.4rem 0.4rem 0;
  border: none;
  cursor: pointer;
  svg {
    fill: var(--color-g-5);
  }

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  span {
    margin-bottom: 0;
  }
}
</style>
