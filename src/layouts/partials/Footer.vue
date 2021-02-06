<template>
    <footer><!-- footer -->
    <div class="footer--container">
      <div>
        <h6>Page Links</h6>
      <FooterNav />
      </div>
      </div>
    </footer><!-- /footer -->
</template>

<script>
import FooterNav from '~/components/FooterNav.vue';
export default {
  name: 'Footer',
  components: {
    FooterNav,
  },
}
</script>


<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

footer {
  padding: 1em;
  background-color: var(--color-g-12);


  .footer--container {
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    color: var(--color-wh);
    margin: 0 auto;

    div {
      margin: 0 auto;

      h6 {
        color: var(--color-wh);
        margin-bottom: 1em;
        text-align: center;
      }

      ul {
        margin: 0 auto;

        li {
          padding: 0.2em 0;
          color: inherit;
        }

        a {
          color: var(--color-g-3);
          padding: 0.4em 0 0;
          font-size: inherit;
          text-decoration: none;
          background-image: linear-gradient(transparent calc(100% - 2px), currentColor 2px);
          background-repeat: no-repeat;
          background-size: 0% 100%;
          transition: background-size .35s;

          &:hover,
          &:focus {
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}

@include respond-to(sm) {
  footer {
    padding: 2em 2%;

    .footer--container {
      flex-direction: row;
      justify-content: space-around;

      div ul li {
        display: inline-flex;
        padding: 0 0.6em;
      }

      hr {
        display: none;
      }
    }
  }
}

@include respond-to(md) {
  footer {
    padding: 2.5em 8%;
  }
}

@include respond-to(lg) {
  footer {
    padding: 2.5em 15%;
  }
}
</style>