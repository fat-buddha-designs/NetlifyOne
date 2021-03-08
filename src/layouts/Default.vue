<!-- Default Layout -->
<template>
  <div id="app">
    <ToggleTheme />
    <Accessibiliity />
    <Nav />
    <Header />

    <main id="main" role="main" tabindex="-1">
      <slot />
    </main>

    <SocialBanner />
    <Footer />
    <Copyright />
    <Scrollup />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import ToggleTheme from '~/layouts/partials/ToggleTheme.vue'
import Accessibiliity from '~/layouts/partials/Accessibility.vue'
import Nav from '~/layouts/partials/Nav.vue'
import Header from '~/layouts/partials/Header.vue'
import SocialBanner from '~/layouts/partials/SocialBanner.vue'
import Footer from '~/layouts/partials/Footer.vue'
import Copyright from '~/layouts/partials/Copyright.vue'
import Scrollup from '~/layouts/partials/Scrollup.vue'
export default {
  components: {
    ToggleTheme,
    Accessibiliity,
    Nav,
    Header,
    SocialBanner,
    Footer,
    Copyright,
    Scrollup,
  },

  mounted() {
    AOS.init()
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
  min-height: 0;

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }
}

html {
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

@media not all and (prefers-color-scheme: light) {
  :root {
    --f-color: var(--color-g-10);
    --bkg-color: var(--color-wh);
  }
}

@media not all and (prefers-color-scheme: dark) {
  :root {
    --f-color: var(--color-g-wh);
    --bkg-color: var(--color-blk);
    --color-p: var(--color-g-7);
    --color-p-1: var(--color-g-8);
  }
}

[data-theme*='light'] {
  --f-color: var(--color-g-10);
  --bkg-color: var(--color-wh);
}

[data-theme*='dark'] {
  --f-color: var(--color-wh);
  --bkg-color: var(--color-blk);
  --color-p: var(--color-g-7);
  --color-p-1: var(--color-g-8);
}

body {
  position: relative;
  margin: 0;
  padding: 1rem;
  min-height: 100%;
  cursor: default;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  touch-action: auto;
  background-color: var(--bkg-color-drkt) !important;
}

@include respond-to(md) {
  body {
    padding: 1.5rem;
  }
}

@include respond-to(lg) {
  body {
    padding: 2rem;
  }
}

body::-webkit-scrollbar {
  width: 15px;
}

body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 0;
  border: 2px solid var(--scrollbarBG);
}

#app {
  position: relative;
}

main {
  margin: 0 auto;
  padding: 1rem;
  overflow: hidden;
  color: var(--f-color);
  background-color: var(--bkg-color);

  > *:not(img):not(div) {
    max-width: var(--cont-width);
    padding: var(--space-unit);
    margin: var(--space-unit) auto;
  }

  div.wrapper {
    color: var(--f-color);
    background-color: var(--bkg-color-drk);
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    display: grid;
    place-content: center;
  }

  section,
  article {
    margin-top: 1.5em;
    a {
      color: var(--color-pri);
      text-decoration: none;
      background-image: linear-gradient(
        transparent calc(100% - 2px),
        currentColor 2px
      );
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.35s;
      margin-left: 0.1em;
      margin-right: 0.1em;
      font-style: italic;

      &:hover {
        background-size: 100% 100%;
      }
    }

    nav a {
      background: var(--color-pri-lgt);
      color: var(--color-blk);
      padding: 0.4em 0.6em;
      margin-right: 0.6em;
      transition: all 0.35s ease-in-out;

      &:focus,
      &:hover {
        background: var(--color-pri);
      }
    }

    nav {
      margin-top: 2em;
    }
  }
}
</style>
