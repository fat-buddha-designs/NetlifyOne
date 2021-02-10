<template>
  <Layout>
    <article v-for="{ node } in $page.allPoliciesPage.edges" :key="node.id">
      <h2>{{ node.title }}</h2>
      <div v-html="node.content" />
    </article>
  </Layout>
</template>

<page-query>
query {
  allPoliciesPage {
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
      title: 'Welcome to Our Policies',
      link: [{
        rel: 'canonical',
        href: 'https://medium.co.uk/policies'
      }],
      meta: [{
          name: 'description',
          content: 'Our policies are important to us'
        },
        {
          name: 'keywords',
          content: 'Policies, Accessibility, Cookies, Privacy, Awesome, Medium'
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
          content: 'https://medium.co.uk/',
        },
        {
          property: 'og:title',
          content: 'Welcome to Our Policies',
        },
        {
          property: 'og:description',
          content: 'Our policies are important to us'
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
          content: 'Welcome to Our Policies',
        },
        {
          name: 'twitter:description',
          content: 'Our policies are important to us'
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
          '@type': 'Boilerplate',
          'name': 'Medium',
          'url': 'https://www.medium.co.uk/policies',
          'logo': 'https://www.medium.co.uk/assets/img/favicon.png',
          'image': 'https://medium.co.uk/assets/img/blue-leaves.jpg',
          'description': 'Our privacy policy is important to us',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '9 Blofield Corner Road, Blofield Heath',
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
              "opens": "07:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "07:00",
              "closes": "12:00"
            }
          ],
          'sameAs': ['https://www.facebook.com/medium', 'https://www.twitter.com/medium'],
          'priceRange': '£250-£700'
        }
      }]
    }
  }
}
</script>

