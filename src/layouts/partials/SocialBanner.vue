<template>
  <section class="social--banner">
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
          ><font-awesome
            class="social--icon twitter"
            :icon="['fab', 'twitter']"
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
        <g-link
          class="social--link"
          target="_blank"
          href="https://www.flickr.com"
          ><font-awesome class="social--icon flickr" :icon="['fab', 'flickr']"
        /></g-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SocialBanner',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

.social--banner {
  background-color: var(--color-g-11);
  margin: 0;
  padding: var(--space-unit);

  .social--links {
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 0;

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
}

@include respond-to(sm) {
  .social--banner {
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);

    .social--links {
      li {
        .social--icon {
          margin: 1.25em;
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
}

@include respond-to(md) {
  .social--banner {
    padding-top: var(--space-lg);
    padding-bottom: var(--space-lg);

    .social--links {
      li {
        .social--icon {
          margin: 1.5em;
          width: 2.75rem;
          height: 2.75rem;
        }
      }
    }
  }
}

@include respond-to(lg) {
  .social--banner {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);

    .social--links {
      li {
        .social--icon {
          margin: 1.75em;
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
}
</style>
