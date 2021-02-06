<template>
  	<a href="#main" class="skip">Skip to content</a>
</template>


<script>
export default {
  name: 'Accessibilty',
    mounted () {
    this.init()
  },
  methods: {
    init () {
      window.addEventListener('hashchange', () => {
        this.focusElement(location.hash.substring(1))
      }, false)
      if (location.hash && location.hash.substring(1)) {
        this.focusElement(location.hash.substring(1))
      }
    },
    focusElement (id) {
      if (!id) return
      let element = window.document.getElementById(id)
      if (element) {
        if (!/^(a|select|input|button|textarea)/i.test(element.tagName.toLowerCase())) {
          element.setAttribute('tabindex', -1)
        }
        element.focus()
      }
    }
  }
}

</script>

<style lang="scss">
.skip {
  z-index: 9999;
  position: absolute;
  top: -1000px;
  left: -1000px;
  overflow: hidden;
  width: 1px;
  height: 1px;
  text-align: left;
}

a.skip:active,
a.skip:focus,
a.skip:hover {
  z-index: 9999;
  top: 0;
  left: 0;
  overflow: visible;
  padding: 0.4rem 1rem;
  width: auto;
  height: auto;
  border-radius: var(--bor-rad);
  color:var(--color-pri);
  background: var(--color-wh);
}
</style>