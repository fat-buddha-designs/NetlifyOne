<template>
  <Layout>
    <article>
      <h2
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2500"
      >
        Success
      </h2>
      <p>Your contact form submission was successful.</p>
      <p>
        We will get back to you as soon as possible, thanks for contacting us.
      </p>
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
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/success',
          hreflang: 'en-GB',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Your contact form submission has been successfully sent.',
        },
        {
          name: 'keywords',
          content: 'Contact, Form, Submission, Success, netlify-one',
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
          content: 'https://netlify-one.co.uk/success',
        },
        {
          property: 'og:title',
          content: 'You have been successful | Speak Soon',
        },
        {
          property: 'og:description',
          content: 'Your contact form submission has been successfully sent.',
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
          content: 'You have been successful | Speak Soon',
        },
        {
          name: 'twitter:description',
          content: 'Your contact form submission has been successfully sent.',
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
            url: 'https://www.netlify-one.co.uk/success',
            logo: 'https://www.netlify-one.co.uk/assets/img/favicon.png',
            image: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
            description:
              'Your contact form submission has been successfully sent.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '9 Blofield Corner Road, Blofield Heath',
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
            email: 'mailto:andy@netlify-one.co.uk',
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
                opens: '07:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '07:00',
                closes: '12:00',
              },
            ],
            sameAs: [
              'https://www.facebook.com/netlify-one',
              'https://www.twitter.com/netlify-one',
            ],
            priceRange: '£250-£700',
          },
        },
      ],
    }
  },
}
</script>
