<template>
  <section class="banner centered__both"><!-- banner -->
    <p>Looking for love, give {{ $static.metadata.company }} a call on <BasicMobileLink /> or <BasicPhoneLink /></p>
  </section><!-- /banner -->
</template>

<static-query>
query {
  metadata {
    company
    slogan
  }
}
</static-query>

<script>
import BasicMobileLink from '~/components/base/BasicMobileLink.vue';
import BasicPhoneLink from '~/components/base/BasicPhoneLink.vue';
export default {
  name: 'Banner',

  components: {
	  BasicMobileLink,
	  BasicPhoneLink,

  }
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';
.banner {
      display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-content: center;
    margin: 0;
    padding: 1em;
    background: var(--color-blk);
    color: var(--color-wh);

    p {margin-top: 0;
        text-align: center;
        margin-bottom: 0;
    }

    a {
        color: var(--color-g-3);
        padding: 0;
        font-size: inherit;
        text-decoration: none;
        background-image: linear-gradient(transparent calc(100% - 2px), currentColor 2px);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        transition: all var(--dur) var(--trans);

        &:hover,
        &:focus {
            background-size: 100% 100%;
            color: var(--color-g-5);
            text-decoration: none;
        }

        .icon {
            position: relative;
            top: 0;
            width: 1em;
            height: 1em;
            margin-right: var(--space-xxs);
            color: var(--color-g-3);
        }
    }
}


@include respond-to(sm) {
    .banner {
        flex-direction: row !important;
        padding: 1.2em;

    }
}

@include respond-to(md) {
    .banner {
        padding: 1.4em;
    }
}

@include respond-to(lg) {
    .banner {
        padding: 1.6em;
    }
} 
</style>