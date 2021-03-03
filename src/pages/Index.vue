<template>
  <Layout>
    <section v-for="{ node } in $page.allIndexPage.edges" :key="node.id">
      <article>
        <h2
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
        >
          {{ node.heading }}
        </h2>
        <div v-html="node.first_section" />
      </article>
      <FullBleed />
      <article>
        <div v-html="node.second_section" />
      </article>
    </section>
  </Layout>
</template>

<page-query>
query {
  allIndexPage {
    edges {
      node {
        heading
        first_section
        second_section
      }
    }
  }
}
</page-query>

<script>
import FullBleed from '~/components/FullBleed.vue'
export default {
  components: {
    FullBleed,
  },

  metaInfo() {
    return {
      title: 'We are Netlify-One',
      link: [
        {
          rel: 'canonical',
          href: 'https://Netlify-Onethree.co.uk/',
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'We are absolutely awesome and have the power to rule the world',
        },
        {
          name: 'keywords',
          content: 'Home, Awesome, Netlify-One',
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
          content: 'https://Netlify-Onethree.co.uk/',
        },
        {
          property: 'og:title',
          content: 'We are Netlify-One | Netlify-One',
        },
        {
          property: 'og:description',
          content:
            'We are absolutely awesome and have the power to rule the world',
        },
        {
          property: 'og:image',
          content: 'https://Netlify-Onethree.co.uk/assets/img/header-background.jpg',
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
          content: 'We are Netlify-One | Netlify-One',
        },
        {
          name: 'twitter:description',
          content:
            'We are absolutely awesome and have the power to rule the world',
        },
        {
          name: 'twitter:image',
          content: 'https://Netlify-Onethree.co.uk/assets/img/header-background.jpg',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://www.schema.org',
            '@type': 'LocalBusiness',
            name: 'Netlify-One',
            url: 'https://www.Netlify-Onethree.co.uk/',
            logo: 'https://www.Netlify-Onethree.co.uk/assets/img/favicon.png',
            image:
              'https://www.Netlify-Onethree.co.uk/assets/img/header-background.jpg',
            description:
              'Netlify-Onethree offer lots of lovely services to help you live a fulfilling life',
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
            email: 'mailto:info@Netlify-Onethree.uk',
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
