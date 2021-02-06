<template>
    <ul class="address" id="address-block">
		<li class="is__bold is__larger__text">{{ $static.metadata.company }}</li>
		<li>{{ $static.metadata.address }}</li>
		<li>{{ $static.metadata.village }}</li>
		<li>{{ $static.metadata.city }}</li>
		<li>{{ $static.metadata.county }}</li>
		<li>{{ $static.metadata.postcode }}</li>
	</ul>
</template>

<static-query>
query {
  metadata {
    siteName
	company
	address
	village
	city
	county
	postcode
  }
}
</static-query>

<script>
export default {
  name: 'Address',
}
</script>
