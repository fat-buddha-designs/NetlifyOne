<template>
  <div class="previous--next--link">
    <g-link :to="record.path">
      <p class="is--bold">
        {{ record.title }}
      </p>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
    border: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
