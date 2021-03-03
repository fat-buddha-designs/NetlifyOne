<template>
  <a
    href="#page_top"
    class="scrollup"
    aria-label="scroll to the top of this page"
    ><font-awesome class="icon" :icon="['fas', 'angle-up']"
  /></a>
</template>

<script>
export default {
  name: 'Scrollup',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';
a.scrollup {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 0.3em;
  border-radius: var(--bor-rad);
  border-bottom: none;
  background: var(--color-pri);
  color: var(--color-wh);
  text-align: center;
  text-decoration: none;
  line-height: 1;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: var(--color-pri-lgt);
    transform: translateY(-0.25em);
  }

  .icon {
    position: relative;
    top: 0.15em;
    margin: 0;
    width: 1.5em;
    height: 1.5em;
    color: var(--color-wh);
  }
}

@include respond-to(sm) {
  a.scrollup {
    .icon {
      width: 1.65em;
      height: 1.65em;
    }
  }
}

@include respond-to(md) {
  a.scrollup {
    .icon {
      width: 1.8em;
      height: 1.8em;
    }
  }
}
</style>
