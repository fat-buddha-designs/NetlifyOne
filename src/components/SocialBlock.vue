<template>
  <ul class="social--links">
    <li>
      <g-link
        class="social--link"
        target="_blank"
        href="https://www.facebook.com"
        ><font-awesome
          class="social--icon facebook"
          :icon="['fab', 'facebook']"
      /></g-link>
    </li>
    <li>
      <g-link
        class="social--link"
        target="_blank"
        href="https://www.pinterest.com"
        ><font-awesome
          class="social--icon pinterest"
          :icon="['fab', 'pinterest']"
      /></g-link>
    </li>
    <li>
      <g-link
        class="social--link"
        target="_blank"
        href="https://www.instagram.com"
        ><font-awesome
          class="social--icon instagram"
          :icon="['fab', 'instagram']"
      /></g-link>
    </li>
    <li>
      <g-link
        class="social--link"
        target="_blank"
        href="https://www.twitter.com"
        ><font-awesome class="social--icon twitter" :icon="['fab', 'twitter']"
      /></g-link>
    </li>
    <li>
      <g-link
        class="social--link"
        target="_blank"
        href="https://www.whatsapp.com"
        ><font-awesome
          class="social--icon whatsapp"
          :icon="['fab', 'whatsapp']"
      /></g-link>
    </li>
    <li>
      <g-link class="social--link" target="_blank" href="https://www.flickr.com"
        ><font-awesome class="social--icon flickr" :icon="['fab', 'flickr']"
      /></g-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialBlock',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

.social--links {
  display: -ms-flexbox;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 280px;

  li {
    .social--link {
      background-size: 0% 100%;

      &:hover,
      &:focus {
        background-size: 0% 0%;
      }
    }

    .social--icon {
      width: 2rem;
      height: 2rem;
      margin: 1em;
      color: var(--color-wh);
      transition: all 0.5s ease-in-out;
      transform: scale(1);

      &.instagram {
        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #e95950;
        }
      }

      &.facebook {
        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #3b5998;
        }
      }

      &.pinterest {
        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #cb2027;
        }
      }

      &.twitter {
        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #55acee;
        }
      }

      &.whatsapp {
        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #4dc247;
        }
      }

      &.flickr {
        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #ff0084;
        }
      }
    }
  }
}

@include respond-to(sm) {
  .social--links {
    li {
      .social--icon {
        margin: 1.25em;
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
}

@include respond-to(md) {
  .social--links {
    li {
      .social--icon {
        margin: 1.5em;
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
}

@include respond-to(lg) {
  .social--links {
    li {
      .social--icon {
        margin: 1.75em;
        width: 2.6rem;
        height: 2.6rem;
      }
    }
  }
}
</style>
