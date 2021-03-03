<template>
  <section class="copyright">
    <!-- copyright -->
    <div>
      <ul>
        <li>
          Copyright <font-awesome class="icon" :icon="['fas', 'copyright']" />
          {{ $static.metadata.siteName }}, All Rights Reserved - Website By
          <g-link
            target="_blank"
            href="https://fatbuddhadesigns.co.uk"
            aria-label="Fat Buddha Designs"
            >Fat Buddha Designs</g-link
          >
          - Created with
          <g-link
            target="_blank"
            href="https://gridsome.org/"
            aria-label="Gridsome"
            >Gridsome</g-link
          >
        </li>
        <li>
          <g-link to="/policies/">Policies</g-link>
        </li>

        <li>
          <g-link to="/terms-of-use/">Terms Of Use</g-link>
        </li>
      </ul>
    </div>
  </section>
  <!-- /copyright -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'Copyright',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

.copyright {
  padding: 0.6em;
  font-size: 14px;
  margin-bottom: 0;
  background-color: var(--color-blk);

  li {
    padding: 1em;
    font-size: inherit;
    text-align: center;
    color: var(--color-wh);
  }

  a {
    color: var(--color-g-3);
    margin: 0;
    padding: 0.4em 0 0;
    font-size: inherit;
    text-decoration: none;
    background-image: linear-gradient(
      transparent calc(100% - 1px),
      currentColor 1px
    );
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.35s;

    &:hover {
      background-size: 100% 100%;
      text-decoration: none;
      color: var(--color-g-3);
    }
  }
}

@include respond-to(sm) {
  .copyright {
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    padding: 1.2em 0 0.4em;

    li {
      display: inline-block;
    }

    hr {
      display: none;
    }
  }
}
</style>
