<!-- Default Layout -->
<template>
  <div id="app">
    <Accessibiliity />
    <Header />
    <Nav />
    <Banner />

    <main id="main" role="main" tabindex="-1"><!-- /main -->
        <slot />
    </main><!-- /main -->

    <SocialBanner />
    <Footer />
    <Copyright />
    <CookieConsent />
    <Scrollup />
  </div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Accessibiliity from '~/layouts/partials/Accessibility.vue';
import Nav from '~/layouts/partials/Nav.vue';
import Header from '~/layouts/partials/Header.vue';
import Banner from '~/layouts/partials/Banner.vue';
import SocialBanner from '~/layouts/partials/SocialBanner.vue';
import Footer from '~/layouts/partials/Footer.vue';
import Copyright from '~/layouts/partials/Copyright.vue';
import CookieConsent from '~/layouts/partials/CookieConsent.vue';
import Scrollup from '~/layouts/partials/Scrollup.vue';
export default {
  components: {
    Accessibiliity,
    Nav,
    Header,
    Banner,
    SocialBanner,
    Footer,
    Copyright,
    CookieConsent,
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

html,
body {
  background-color: var(--color-wh);
  color: var(--f-color);
}

body {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 100%;
  cursor: default;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  touch-action: auto;
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

  >*:not(img):not(div) {
    max-width: var(--cont-width);
    padding: var(--space-unit);
    margin: var(--space-unit) auto;
  }

  div.wrapper {
    background: var(--color-p);
  }

  section, article {

    a {
      color: var(--color-pri);
      text-decoration: none;
      background-image: linear-gradient(transparent calc(100% - 2px), currentColor 2px);
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size .35s;
      margin-left: 0.1em;
      margin-right: 0.1em;
      font-style: italic;

      &:hover {
        background-size: 100% 100%;
      }
    }

    nav a {
      background: var(--color-pri-lgt);
      color: var(--color-wh);
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