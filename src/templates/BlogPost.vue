<template>
  <Layout>
    <article>
      <div class="post">
        <h2
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          v-html="$page.blog.title"
        ></h2>

        <p class="is--meta">
          <span>Posted By </span
          ><span class="is--italic"> {{ $page.blog.author }}</span>
          <span> On </span
          ><span class="is--italic"
            ><time>{{ $page.blog.date }}</time></span
          >,<span> Reading Time - {{ $page.blog.timeToRead }} minutes </span>
        </p>
        <p>
          <font-awesome class="icon" :icon="['fas', 'list-alt']" />
          <g-link :to="$page.blog.category.path">{{
            $page.blog.category.title
          }}</g-link>
        </p>

        <ul class="tag--list">
          <li v-for="tag in $page.blog.tags" :key="tag.id">
            <font-awesome class="icon" :icon="['fas', 'tag']" />
            <g-link :to="tag.path">{{ tag.title }}</g-link>
          </li>
        </ul>

        <figure>
          <g-image :alt="$page.blog.image_caption" :src="$page.blog.image" />
        </figure>

        <div v-html="$page.blog.content"></div>
      </div>
      <div class="previous--next">
        <PostListItem
          v-if="$page.previous"
          :record="$page.previous"
        ></PostListItem>
        <PostListItem v-if="$page.next" :record="$page.next"></PostListItem>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
  blog(id: $id) {
    title
    path
    image
    image_caption
    content
    date(format: "D MMM Y")
    timeToRead
    category {
      title
      path
    }
    author
    tags {
      id
      title
      path
    }
  }
  previous: blog(id: $previousElement) {
    title
    path
  }

  next: blog(id: $nextElement) {
    title
    path
  }
}
</page-query>

<script>
import PostListItem from '~/components/PostListItem.vue'
export default {
  name: 'Post',
  components: {
    PostListItem,
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';

.post {
  padding: var(--space-unit) 0;

  figure {
    margin: 1em 0;

    img {
      min-width: 100%;
    }
  }

  h3 {
    a {
      font-size: inherit;
      max-width: 1px;
    }
  }
}
.previous--next {
  display: -ms-flexbox;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 1.5rem 0;

  .previous--next--link {
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
  }

  .previous--next--link:nth-of-type(1)::before {
    content: '\2190';
    display: block;
    margin-right: 0.5rem;
    position: relative;
    top: 1.25rem;
  }

  .previous--next--link:nth-of-type(2)::after {
    content: '\2192';
    display: block;
    margin-left: 0.5rem;
    position: relative;
    top: 1.25rem;
  }
}

@include respond-to(sm) {
  .post {
    padding: var(--space-unit) 0;

    figure {
      margin: 1.5em 0;
    }

    .tag--list li {
      display: inline-block;
      margin-right: 1em;
    }
  }
}

@include respond-to(md) {
  .post {
    padding: var(--space-unit) 0;

    figure {
      margin: 2em 0;
    }
  }
}

@include respond-to(lg) {
  .post {
    padding: var(--space-md) 0;
  }
}
</style>
