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
          <g-image
            :alt="$page.blog.image_caption"
            :src="$page.blog.image"
            width="500"
          />
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
    image(width: 1000, quality: 90)
    image_caption
    excerpt
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

<static-query>
query {
  metadata {
    siteUrl
    twitterSite
    twitterCreator
  }
}
</static-query>

<script>
import PostListItem from '~/components/PostListItem.vue'
export default {
  name: 'Post',
  components: {
    PostListItem,
  },
  props: {
    image: Object,
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.blog.excerpt,
        },
        // open-graph tags
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.blog.title,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.blog.excerpt,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.$static.metadata.siteUrl + this.$page.blog.image,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.siteUrl + this.$page.blog.path,
        },
        // twitter card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: this.$static.metadata.twitterSite,
        },
        {
          name: 'twitter:creator',
          content: this.$static.metadata.twitterCreator,
        },
        { key: 'twitter:image',
          name: 'twitter:image',
          content: this.$static.metadata.siteUrl + this.$page.blog.image,
        },
        {
          name: 'twitter:title',
          content: this.$page.blog.title,
        },
        {
          name: 'twitter:description',
          content: this.$page.blog.excerpt,
        },
      ],
      script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }],
      // Some ld+json tags
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.blog.description,
            author: {
              name: this.$page.blog.author,
            },
            headline: this.$page.blog.title,
            image: this.$page.blog.image,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': this.$static.metadata.siteUrl + this.$page.blog.path,
            },
          },
        },
      ],
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
    top: 0.15rem;
  }

  .previous--next--link:nth-of-type(2)::after {
    content: '\2192';
    display: block;
    margin-left: 0.5rem;
    position: relative;
    top: 0.15rem;
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
