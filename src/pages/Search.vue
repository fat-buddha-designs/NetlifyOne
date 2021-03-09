<template>
  <Layout>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search"
    />
    {{ searchResults }}
  </Layout>
</template>

<static-query>
query Posts {
  posts: allBlog {
    edges {
      node {
        id
        title
        date
        path
        excerpt
      }
    }
  }
}
</static-query>

<script>
import Flexsearch from 'flexsearch'

export default {
  data() {
    return {
      index: null,
      searchTerm: '',
    }
  },
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: 'forward',
      doc: {
        id: 'id',
        field: ['title', 'excerpt'],
      },
    })
    this.index.add(this.$static.posts.edges.map((e) => e.node))
  },
  computed: {
    searchResults() {
      if (this.index === null || this.searchTerm.length < 3) return []
      return this.index.search({
        query: this.searchTerm,
        limit: 10,
      })
    },
  },
}
</script>
