<template>
      <ul>
        <li
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
              >{{ element.name }}</g-link>
        </li>
      </ul>
</template>

<static-query>
query {
  metadata {
    menu {
      name
      link
    }
  }
}
</static-query>

<script>
export default {
  name: 'FooterNav',
}
</script>