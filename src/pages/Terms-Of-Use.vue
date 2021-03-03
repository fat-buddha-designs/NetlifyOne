<template>
  <Layout>
    <article v-for="{ node } in $page.allTermsPage.edges" :key="node.id">
      <h2>{{ node.title }}</h2>
      <div v-html="node.content" />
    </article>
  </Layout>
</template>

<page-query>
query {
  allTermsPage {
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
      title: 'Our Terms Of Use Statement',
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/terms-of-use',
          hreflang: 'en-GB',
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'This statement sets out how we expect you to use the content on our website.',
        },
        {
          name: 'keywords',
          content: 'Terms, Of, Use, Statement',
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
          content: 'https://netlify-one.co.uk/terms-of-use',
        },
        {
          property: 'og:title',
          content: 'Our Terms Of Use Statement | Netlify-One',
        },
        {
          property: 'og:description',
          content:
            'This statement sets out how we expect you to use the content on our website.',
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
          content: 'Our Terms Of Use Statement | Netlify-One',
        },
        {
          name: 'twitter:description',
          content:
            'This statement sets out how we expect you to use the content on our website.',
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
            url: 'https://www.netlify-one.co.uk/terms-of-use',
            logo: 'https://www.netlify-one.co.uk/assets/img/favicon.png',
            image: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
            description:
              'This statement sets out how we expect you to use the content on our website.',
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
