<template>
  <a
    :title="`Phone ${$static.metadata.siteName} mobile`"
    :href="`${$static.metadata.mobile}`"
    :aria-label="`Phone ${$static.metadata.siteName} mobile`"
    >{{ $static.metadata.mobileDisplay }}</a
  >
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
  name: 'BasicMobileLink',
}
</script>
