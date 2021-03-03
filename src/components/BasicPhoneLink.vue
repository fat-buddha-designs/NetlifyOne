<template>
  <a
    :title="`Phone ${$static.metadata.siteName}`"
    :href="`${$static.metadata.telephone}`"
    :aria-label="`Phone ${$static.metadata.siteName}`"
    >{{ $static.metadata.telephoneDisplay }}</a
  >
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
  name: 'BasicPhoneLink',
}
</script>
