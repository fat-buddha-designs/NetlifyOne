<template>
  <Layout>
    <section v-for="{ node } in $page.allAboutPage.edges" :key="node.id">
      <h2
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2500"
      >
        {{ node.title }}
      </h2>
      <div v-html="node.content" />
    </section>
  </Layout>
</template>

<page-query>
query {
  allAboutPage {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'About Netlify-One',
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/about',
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
          content: 'About, Netlify-One',
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
          content: 'https://netlify-one.co.uk/about',
        },
        {
          property: 'og:title',
          content: 'About Netlify-One',
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
          content: 'About Netlify-One',
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
            url: 'https://www.netlify-one.co.uk/about',
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
