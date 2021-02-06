<template>
  <Layout>
    <section>
      <h2 data-aos="fade-in" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="2500">What {{ $static.metadata.company }} Build</h2>
      <div class="block--grid">
        <div class="block--grid--item" v-for="item in $static.metadata.block" :key="item.block">
              <g-image :src="require(`!!assets-loader?height=850!~/assets/img/${item.img}`)" :alt="item.alt"  />
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere et magni rem delectus eius dicta libero, error, nobis excepturi harum quasi adipisci beatae iusto. Eum temporibus quae porro magnam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut consequatur, corrupti quae porro architecto qui, natus magni eius odit distinctio hic incidunt soluta obcaecati est non. Velit, sit assumenda!</p>
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
    siteName
    company
    block {
      img
      alt
      title
      description
    }
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'What Medium Build',
      link: [{
        rel: 'canonical',
        href: 'https://medium.co.uk/build'
      }],
      meta: [{
          name: 'description',
          content: 'We are a lovely bunch of hairy biker girls'
        },
        {
          name: 'keywords',
          content: 'Build, Medium'
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
          content: 'Medium',
        },
        {
          property: 'og:url',
          content: 'https://medium.co.uk/build',
        },
        {
          property: 'og:title',
          content: 'What Medium Build',
        },
        {
          property: 'og:description',
          content: 'We are a lovely bunch of hairy biker girls'
        },
        {
          property: 'og:image',
          content: 'https://medium.co.uk/assets/img/blue-leaves.jpg',
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
          content: 'What Medium Build',
        },
        {
          name: 'twitter:description',
          content: 'We are a lovely bunch of hairy biker girls'
        },
        {
          name: 'twitter:image',
          content: 'https://medium.co.uk/assets/img/blue-leaves.jpg',
        },
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://www.schema.org',
          '@type': 'LocalBusiness',
          'name': 'Medium',
          'url': 'https://www.medium.co.uk/build',
          'logo': 'https://www.medium.co.uk/assets/img/favicon.png',
          'image': 'https://www.medium.co.uk/assets/img/blue-leaves.jpg',
          'description': 'We are a lovely bunch of hairy biker girls',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '11 Boiler Road, Salhouse',
            'addressLocality': 'Norwich',
            'addressRegion': 'Norfolk',
            'postalCode': 'NR13 4SA',
            'addressCountry': 'United Kingdom'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': '53.2222',
            'longitude': '1.236587'
          },
          'telephone': '+44603717057',
          'email': 'mailto:info@medium.uk',
          "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "12:00"
            }
          ],
          'sameAs': ['https://www.facebook.com/johnsmith', 'https://www.twitter.com/johnSmith', 'https://www.instagram.com/JohnSmith'],
          'priceRange': '£45-£600'
        }
      }]
    }
  }
}
</script>

<style lang="scss">
@supports (display: grid) {
  .block--grid>* {
    max-width: unset;
    margin: 0;
  }
}

.block--grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 1rem;
}

.block--grid>* {
  max-width: 25rem;
  margin-right: auto;
  margin-left: auto;
}


.block--grid--item {
  border: var(--border);
  padding: 0;

  h3 {
    padding-left: 0.5em;
  }

  p {
    padding: 0 0.6em 0.6em;
  }
}

</style>
