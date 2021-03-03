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
        404 Error
      </h2>
      <p>We're sorry. The page you are looking for can't be found.</p>
      <p>
        Why not try the
        <a href="/" aria-label="`${ $static.metadata.siteName } Homepage`"
          >Homepage</a
        >? or <a href="#" onClick="history.go(-1)">Go Back</a> to your previous
        page.
      </p>
    </article>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    company
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Oops, we have a 404 Error',
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/404',
          hreflang: 'en-GB',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'We are in a bad place, try the homepage',
        },
        {
          name: 'keywords',
          content: '404, Error, netlify-one',
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
          content: 'https://netlify-one.co.uk/404',
        },
        {
          property: 'og:title',
          content: 'Oops, we have a 404 Error',
        },
        {
          property: 'og:description',
          content: 'We are in a bad place, try the homepage',
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
          content: 'Oops, we have a 404 Error',
        },
        {
          name: 'twitter:description',
          content: 'We are in a bad place, try the homepage',
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
            name: 'netlify-one',
            url: 'https://www.netlify-one.co.uk/404',
            logo: 'https://www.netlify-one.co.uk/assets/img/favicon.png',
            image: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
            description: 'We are in a bad place, try the homepage',
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
