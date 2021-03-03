<template>
  <li class="centered">
    <a
      :title="`Phone ${$static.metadata.siteName}`"
      :href="`${$static.metadata.telephone}`"
      :aria-label="`Phone ${$static.metadata.siteName}`"
      ><font-awesome class="icon" :icon="['fal', 'phone']" />{{
        $static.metadata.telephoneDisplay
      }}</a
    >
  </li>
</template>

<static-query>
query {
  metadata {
    siteName
    telephone
    telephoneDisplay
  }
}
</static-query>

<script>
export default {
  name: 'PhoneLink',
}
</script>

<style lang="scss">
.centered {
  padding-top: 0.55em;
}
</style>
