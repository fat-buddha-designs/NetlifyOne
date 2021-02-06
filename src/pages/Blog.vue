<template>
  <Layout>
    <section>
      <h2 data-aos="fade-in" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine"
        data-aos-duration="2500">Blog</h2>
      <div class="auto--grid">
        <article class="post--block" v-for="entry in $page.allBlog.edges" :key="entry.node.id">
          <g-link :to="entry.node.path">
            <figure>
              <g-image :alt="entry.node.image_caption" :src="entry.node.image" />
            </figure>
          </g-link>
          <div class="post--text--block">
            <h5>
              <g-link :to="entry.node.path">{{ entry.node.title }}</g-link>
            </h5>
            <p>{{ entry.node.excerpt }}</p>
            <p class="is--meta">Posted By <span class="is--italic"> {{ entry.node.author.name }} </span> On <span
                class="is--italic"><time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time></span></p>
          </div>
        </article>
      </div>
      <Pager :info="$page.allBlog.pageInfo" />
    </section>
  </Layout>
</template> 

<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    Pager
  }
};
</script>

<page-query>
  query ($page: Int) {
    allBlog(perPage: 6, page: $page, sortBy: "created", order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
      edges {
        node {
          title
          path
          image
          image_caption
          humanTime : created(format:"DD MMMM YYYY")
          datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
          author {
            name
          }
          category {
            title
          }
          excerpt
        }
      }
    }
  }
</page-query>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss'; 
.post--block {

  padding-top: 0;
  border: var(--bor-lg);

  padding: 0;

  figure {

    img {
      margin-top: -1.7rem;
      min-width: 100%;
      height: 180px;
      object-fit: cover;
      margin-bottom: 0;
    }
  }

  .post--text--block {
    padding: 0 0.8rem 0.8rem;

    h5 {
      margin-top: -0.5em;

      p, a {
        font-size: inherit;
      }
    }
  }
}

</style>