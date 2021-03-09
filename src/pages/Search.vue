<template>
  <Layout>
    <section>
      <div>
        <h1>Search Our Pages</h1>
        <input
          id="search"
          v-model="searchTerm"
          class="search--input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div class="search--results">
        <g-link
          v-for="result in searchResults"
          :key="result.id"
          :to="result.path"
          class="search--results--item"
        >
          <div class="search--results--title">{{ result.title }}</div>
          <div>{{ result.excerpt }}</div>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin'
export default {
  mixins: [Search],
  metaInfo() {
    return {
      title: 'Search Netlify-One',
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/search',
          hreflang: 'en-GB',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'We are a lovely bunch of hairy biker girls',
        },
        {
          name: 'keywords',
          content: 'Search, Netlify-One',
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
          content: 'Netlify-One',
        },
        {
          property: 'og:url',
          content: 'https://netlify-one.co.uk/search',
        },
        {
          property: 'og:title',
          content: 'Search Netlify-One',
        },
        {
          property: 'og:description',
          content: 'We are a lovely bunch of hairy biker girls',
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
          content: 'Search Netlify-One',
        },
        {
          name: 'twitter:description',
          content: 'We are a lovely bunch of hairy biker girls',
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
            url: 'https://www.netlify-one.co.uk/search',
            logo: 'https://www.netlify-one.co.uk/assets/img/favicon.png',
            image: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
            description: 'We are a lovely bunch of hairy biker girls',
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

<style lang="scss">
.search--input {
  padding: 0.6rem;
}
.search--results {
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  &--item {
    margin-bottom: 1.5rem;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
  }
  &--title {
    margin-bottom: 1.5rem;
  }
}
</style>
