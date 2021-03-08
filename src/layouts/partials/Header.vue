<template>
  <header>
    <!-- /header -->
    <p
      class="header--text"
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-offset="50"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
    >
      {{ $static.metadata.company }}
    </p>
    <p
      class="header--sub--text"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-offset="50"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
    >
      {{ $static.metadata.slogan }}
    </p>
  </header>
  <!-- /header -->
</template>

<static-query>
query {
  metadata {
    company
    slogan
    menu {
      name
      link
    }
  }
}
</static-query>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';
@import '~/assets/scss/base/_typography.scss';

header {
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  overflow: hidden;
  background-image: url('~@/assets/img/world-map.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .header--text,
  .header--sub--text {
    text-align: center;
    text-shadow: 1px 1px 2px #444;
  }

  .header--text {
    color: var(--color-wh);
    padding-top: 1em;
    @include fluid-type(20rem, 64rem, 3rem, 4.5rem);
  }

  .header--sub--text {
    margin-top: 0;
    padding-bottom: 1em;
    @include fluid-type(20rem, 64rem, 2rem, 3rem);
    color: var(--color-g-4);
    font-style: italic;
    font-weight: 400;
  }
}

@include respond-to(sm) {
  header {
    padding: 2.8em;

    h1,
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}

@include respond-to(md) {
  header {
    padding: 5em;
  }
}

@include respond-to(lg) {
  header {
    padding: 8em;
  }
}
</style>
