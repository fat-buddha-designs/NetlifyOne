<template>
  <Layout>
   <article>
    <h2 data-aos="fade-in" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="2500">Success</h2>
    <p>Your contact form submission was successful.</p>
    <p>We will get back to you as soon as possible, thanks for contacting us.</p>
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
export default {
  metaInfo() {
    return {
      title: 'You have been successful | Speak Soon',
      link: [{
        rel: 'canonical',
        href: 'https://medium.co.uk/success'
      }],
      meta: [{
          name: 'description',
          content: 'Your contact form submission has been successfully sent.'
        },
        {
          name: 'keywords',
          content: 'Contact, Form, Submission, Success, medium'
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
          content: 'You have been successful | Speak Soon',
        },
        {
          property: 'og:description',
          content: 'Your contact form submission has been successfully sent.'
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
          content: 'You have been successful | Speak Soon',
        },
        {
          name: 'twitter:description',
          content: 'Your contact form submission has been successfully sent.'
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
          'url': 'https://www.medium.co.uk/success',
          'logo': 'https://www.medium.co.uk/assets/img/favicon.png',
          'image': 'https://www.medium.co.uk/assets/img/blue-leaves.jpg',
          'description': 'Your contact form submission has been successfully sent.',
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
          'email': 'mailto:andy@medium.uk',
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

