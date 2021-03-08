<template>
  <div class="wrapper">
    <div class="full--bleed--cont">
      <div
        class="card"
        v-for="{ node } in $static.allBlog.edges"
        :key="node.id"
      >
        <div class="image--block">
          <g-link :to="node.path">
            <figure>
              <g-image :alt="node.image_alt" :src="node.image" />
            </figure>
          </g-link>
        </div>
        <div class="text--block">
          <h3>
            <g-link :to="node.path">{{ node.title }}</g-link>
          </h3>
          <p>{{ node.excerpt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query latestPost {
  allBlog(limit: 4, sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
        image
        image_caption
        date(format: "D MMMM Y")
        excerpt
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'FullBleed',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

.full--bleed--cont {
  --auto-grid-min-size: 280px;
  margin: auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size, 16rem), 1fr)
  );
  grid-gap: 1rem;

  .card {
    border-radius: var(--bor-rad);

    * {
      margin: 0;
    }

    .image--block {
      padding: 0;
      margin: 0;
      line-height: 0;

      figure {
        margin-bottom: 0;
        position: relative;
        top: -2px;

        img {
          margin-bottom: 0;
          height: 15rem;
        }
      }
    }

    .text--block {
      padding: 1rem;

      h3 {
        line-height: 1;
        margin-bottom: 1rem;
      }
    }
  }
}

@include respond-to(sm) {
  .full--bleed--cont {
    padding: 1.5rem 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

@include respond-to(md) {
  .full--bleed--cont {
    padding: 2rem 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
