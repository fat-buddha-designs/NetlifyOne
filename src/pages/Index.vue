<template>
  <Layout>
    <article>
      <h2 data-aos='fade-in' data-aos-delay='100' data-aos-offset='50' data-aos-easing='ease-in-sine' data-aos-duration='2500'>Welcome to {{ $static.metadata.company }}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste
        tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis explicabo consectetur quis. Sint tempore molestiae nisi in, consequuntur sunt. Officia saepe rem ex dolor natus est in ut adipisci!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href='https://google.co.uk' aria-label='Google' target='_blank' rel='noopener noreferrer'>Google</a> excepturi labore tempore expedita, et iste
        tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quos similique dolorum corporis. Numquam aperiam nemo, iure, rem libero fugit corporis a iste qui voluptate voluptatum dolore. Voluptatem, aut consectetur.</p>
    </article>
    <FullBleed />
    <article>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste
        tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis explicabo consectetur quis. Sint tempore molestiae nisi in, consequuntur sunt. Officia saepe rem ex dolor natus est in ut adipisci!</p>
      <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href='https://google.co.uk' aria-label='Google' target='_blank' rel='noopener noreferrer'>Google</a> excepturi labore tempore expedita, et iste
        tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</blockquote>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quos similique dolorum corporis. Numquam aperiam nemo, iure, rem libero fugit corporis a iste qui voluptate voluptatum dolore. Voluptatem, aut consectetur.</p>
    </article>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
    siteName
    company
  }
}
</static-query>

<script>
import FullBleed from '~/components/base/FullBleed.vue';
export default {

  components: {
    FullBleed,
  },

  metaInfo() {
    return {
      title: 'We are Medium-Three',
      link: [{
        rel: 'canonical',
        href: 'https://mediumthree.co.uk/'
      }],
      meta: [{
          name: 'description',
          content: 'We are absolutely awesome and have the power to rule the world'
        },
        {
          name: 'keywords',
          content: 'Home, Awesome, Medium-Three'
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
          content: 'Medium-Three',
        },
        {
          property: 'og:url',
          content: 'https://mediumthree.co.uk/',
        },
        {
          property: 'og:title',
          content: 'We are Medium-Three | Medium-Three',
        },
        {
          property: 'og:description',
          content: 'We are absolutely awesome and have the power to rule the world'
        },
        {
          property: 'og:image',
          content: 'https://mediumthree.co.uk/assets/img/header-background.jpg',
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
          content: 'We are Medium-Three | Medium-Three',
        },
        {
          name: 'twitter:description',
          content: 'We are absolutely awesome and have the power to rule the world'
        },
        {
          name: 'twitter:image',
          content: 'https://mediumthree.co.uk/assets/img/header-background.jpg',
        },
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://www.schema.org',
          '@type': 'LocalBusiness',
          'name': 'Medium-Three',
          'url': 'https://www.mediumthree.co.uk/',
          'logo': 'https://www.mediumthree.co.uk/assets/img/favicon.png',
          'image': 'https://www.mediumthree.co.uk/assets/img/header-background.jpg',
          'description': 'mediumthree offer lots of lovely services to help you live a fulfilling life',
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
          'email': 'mailto:info@mediumthree.uk',
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
