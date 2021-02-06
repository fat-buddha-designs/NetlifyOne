<template>
  <header><!-- /header -->
   <h1 data-aos="fade-left" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine"
      data-aos-duration="1500">{{ $static.metadata.company }}</h1>
    <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="50" data-aos-easing="ease-in-sine"
      data-aos-duration="1500">{{ $static.metadata.slogan }}</p>
  </header><!-- /header -->
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
header {
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(black, black), url('~@/assets/img/header-background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: saturation;
  
  h1,
  p {
    text-align: center;
    text-shadow: 1px 1px 2px #444;
  }

  h1 {
    color: var(--color-wh);
    padding-top: 1em;
  }

  p {
    margin-top: 0;
    padding-bottom: 1em;
    --max-font: 30;
    --min-font: 24;
    font-size: var(--responsive);
    color: var(--color-g-4);
    font-style: italic;
    font-weight: 400;
  }
}



@media only screen and (min-width: 49.9rem) {
  header {
    padding: 2.8em;


    h1,
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}


@media only screen and (min-width: 64rem) {
  header {
    padding: 5em;
  }
}

@media only screen and (min-width: 80rem) {
  header {
    padding: 8em;
  }
}
</style>