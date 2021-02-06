<template>
  <Layout>
    <section>
      <h2 data-aos="fade-in" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="2500">How {{ $static.metadata.company }} Develop</h2>
      <g-image class="full--width" src="~/assets/img/develop.jpg" alt="image"/>
      <p>Consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae,
        consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ducimus consectetur! Temporibus magnam commodi omnis harum accusantium, ea, suscipit dolor eos eaque facilis asperiores repellat quos. Beatae error tempora officiis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quo sapiente libero voluptates beatae odio consectetur voluptatem quae recusandae, quod aliquid blanditiis illo maxime aut in neque exercitationem placeat tempora!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at voluptatem consectetur minima atque nisi blanditiis quae, sint magni laboriosam inventore quisquam iure optio qui doloremque voluptatum laudantium recusandae aspernatur!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum laboriosam dignissimos earum possimus, quidem provident. Nisi delectus ex saepe quaerat voluptatem eius quisquam aliquid quasi, quidem accusantium deleniti vitae.</p>
    </section>
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
      title: 'How Medium Develop',
      link: [{
        rel: 'canonical',
        href: 'https://medium.co.uk/develop'
      }],
      meta: [{
          name: 'description',
          content: 'We are a lovely bunch of hairy biker girls'
        },
        {
          name: 'keywords',
          content: 'Develop, medium'
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
          content: 'https://medium.co.uk/develop',
        },
        {
          property: 'og:title',
          content: 'How Medium Develop',
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
          content: 'How Medium Develop',
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
          'url': 'https://www.medium.co.uk/develop',
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

