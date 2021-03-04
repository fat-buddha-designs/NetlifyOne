<template>
  <Layout>
    <section>
      <h2
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2500"
      >
        Blog
      </h2>
      <div class="auto--grid">
        <article
          class="post--block"
          v-for="entry in $page.allBlog.edges"
          :key="entry.node.id"
        >
          <g-link :to="entry.node.path">
            <figure>
              <g-image
                :alt="entry.node.image_caption"
                :src="entry.node.image"
              />
            </figure>
          </g-link>
          <div class="post--text--block">
            <h5>
              <g-link :to="entry.node.path">{{ entry.node.title }}</g-link>
            </h5>
            <p>{{ entry.node.excerpt }}</p>
            <p class="is--meta">
              Posted By
              <span class="is--italic"> {{ entry.node.author }} </span> On
              <span class="is--italic"
                ><time>{{ entry.node.date }}</time></span
              >
            </p>
          </div>
        </article>
      </div>
      <Pager :info="$page.allBlog.pageInfo" />
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
export default {
  components: {
    Pager,
  },
  metaInfo() {
    return {
      title: 'An interesting collection of articles and posts',
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/blog',
          hreflang: 'en-GB',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'An interesting collection of articles and posts.',
        },
        {
          name: 'keywords',
          content: 'blog, posts, articles, netlify-one',
        },
        {
          property: 'og:locale',
          content: 'en_GB',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'netlify-one',
        },
        {
          property: 'og:url',
          content: 'https://netlify-one.co.uk/blog',
        },
        {
          property: 'og:title',
          content:
            'An interesting collection of articles and posts | Netlify-One',
        },
        {
          property: 'og:description',
          content: 'An interesting collection of articles and posts',
        },
        {
          property: 'og:image',
          content: 'https://netlify-one.co.uk/assets/img/blue-leaves.jpg',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: '.',
        },
        {
          name: 'twitter:creator',
          content: '.',
        },
        {
          name: 'twitter:title',
          content:
            'An interesting collection of articles and posts | Netlify-One',
        },
        {
          name: 'twitter:description',
          content: 'An interesting collection of articles and posts',
        },
        {
          name: 'twitter:image',
          content: 'https://netlify-one.co.uk/assets/img/blue-leaves.jpg',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://www.schema.org',
            '@type': 'LocalBusiness',
            name: 'Netlify-One',
            url: 'https://www.netlify-one.co.uk/blog',
            logo: 'https://www.netlify-one.co.uk/assets/img/favicon.png',
            image: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
            description: 'An interesting collection of articles and posts',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '11 Boiler Road, Salhouse',
              addressLocality: 'Norwich',
              addressRegion: 'Norfolk',
              postalCode: 'NR13 4SA',
              addressCountry: 'United Kingdom',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '53.2222',
              longitude: '1.236587',
            },
            telephone: '+44603717057',
            email: 'mailto:info@netlify-one.co.uk',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '12:00',
              },
            ],
            sameAs: [
              'https://www.facebook.com/johnsmith',
              'https://www.twitter.com/johnSmith',
              'https://www.instagram.com/JohnSmith',
            ],
            priceRange: '£45-£600',
          },
        },
      ],
    }
  },
}
</script>

<page-query>
query($page: Int) {
  allBlog(
    perPage: 6
    page: $page
    sortBy: "date"
    order: DESC
    filter: { published: { eq: true } }
  ) @paginate {
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
        date(format: "D MMM Y")
        author
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

      p,
      a {
        font-size: inherit;
      }
    }
  }
}
</style>
