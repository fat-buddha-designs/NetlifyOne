<template>
  <Layout>
    <section>
      <h2
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        Tag — {{ $page.tag.title }}
      </h2>
      <article
        class="post"
        v-for="element in $page.tag.belongsTo.edges"
        :key="element.node.id"
      >
        <h3>
          <g-link :to="element.node.path">{{ element.node.title }}</g-link>
        </h3>
        <p class="is--meta">
          <time>{{ element.node.date }}</time>
        </p>
        <p>{{ element.node.excerpt }}</p>
      </article>
    </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Blog {
            id
            title
            path
            date(format: "D MMM Y")
            excerpt
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Tags',
  },
}
</script>

<style lang="scss">
.post {
  padding: var(--space-unit) 0;

  h3 {
    margin-top: 0;

    a {
      font-size: inherit;
      max-width: 1px;
    }
  }
}
</style>
