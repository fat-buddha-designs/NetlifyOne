<template>
  <li class="centered">
    <a
      :title="`Phone ${$static.metadata.siteName} mobile`"
      :href="`${$static.metadata.mobile}`"
      :aria-label="`Phone ${$static.metadata.siteName} mobile`"
      ><font-awesome class="icon" :icon="['fal', 'mobile-alt']" />{{
        $static.metadata.mobileDisplay
      }}</a
    >
  </li>
</template>

<static-query>
query {
  metadata {
    siteName
    mobile
    mobileDisplay
  }
}
</static-query>

<script>
export default {
  name: 'MobileLink',
}
</script>

<style lang="scss">
.centered {
  padding-top: 0.55em;
}
</style>
