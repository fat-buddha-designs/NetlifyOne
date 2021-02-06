<template>
  <Layout>
    <section>
      <h2 data-aos="fade-in" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine"
        data-aos-duration="2500">Contact {{ $static.metadata.company }}</h2>
      <div class="contact--container">
        <div class="contact--left">
          <div class="contact--block">
            <h5>
              <font-awesome class="icon" :icon="['fas', 'home']" />Address</h5>
            <Address />
          </div>
          <div class="contact--block">
            <h5>
              <font-awesome class="icon" :icon="['fas', 'envelope']" />Email</h5>
            <ul>
              <EmailLink />
            </ul>
          </div>
          <div class="contact--block">
            <h5>
              <font-awesome class="icon" :icon="['fas', 'phone']" />Phone</h5>
            <ul>
              <MobileLink />
              <PhoneLink />
            </ul>
          </div>
        </div>
        <div class="contact--right">
          <form action="https://www.form-data.com/_functions/submit/???" method="post">
            <div class="form--row">
              <div>
                <label for="name">Your name</label>
                <input type="text" name="name" class="full--width" required />
              </div>
              <div>
                <label for="email">Your Email</label>
                <input type="email" name="email" class="full--width" required />
              </div>
            </div>

            <div class="form--row">
              <div>
                <label for="mobile">Your Mobile</label>
                <input type="tel" name="mobile" class="full--width" />
              </div>
              <div>
                <label for="landline">Your Landline</label>
                <input type="tel" name="landline" class="full--width" />
              </div>
            </div>

            <div class="textarea--row">
              <label for="message">Message</label>
              <textarea name="message" rows="8" class="full--width" required></textarea>
            </div>
            <input type="text" name="xx_password" style="display:none !important" tabindex="-1" autocomplete="off">

            <label class="is--obscure" for="submit">Submit Form</label>
            <input name="submit" class="full--width" type="submit" value="Submit Form">
          </form>
        </div>
      </div>
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
import MobileLink from '~/components/base/MobileLink.vue';
import PhoneLink from '~/components/base/PhoneLink.vue';
import EmailLink from '~/components/base/EmailLink.vue';
import Address from '~/components/Address.vue';
export default {
    components: {
    Address,
    MobileLink,
    PhoneLink,
    EmailLink,
  },
    metaInfo() {
    return {
      title: 'Contact Medium',
      link: [{
        rel: 'canonical',
        href: 'https://medium.co.uk/contact'
      }],
      meta: [{
          name: 'description',
          content: 'Contact Medium by email or phone'
        },
        {
          name: 'keywords',
          content: 'Contact, Medium, Email, Phone'
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
          content: 'https://medium.co.uk/contact',
        },
        {
          property: 'og:title',
          content: 'Contact Medium',
        },
        {
          property: 'og:description',
          content: 'Contact medium by email or phone'
        },
        {
          property: 'og:image',
          content: 'https://www.medium.co.uk/assets/img/blue-leaves.jpg',
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
          content: 'Contact Medium',
        },
        {
          name: 'twitter:description',
          content: 'Contact medium by email or phone'
        },
        {
          name: 'twitter:image',
          content: 'https://www.medium.co.uk/assets/img/blue-leaves.jpg',
        },
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://www.schema.org',
          '@type': 'LocalBusiness',
          'name': 'medium',
          'url': 'https://www.medium.co.uk/contact',
          'logo': 'https://www.medium.co.uk/assets/img/favicon.png',
          'image': 'https://www.medium.co.uk/assets/img/blue-leaves.jpg',
          'description': 'High quality, punctual, rigid tipper transport around East Anglia.',
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

<style lang="scss">
  .contact--container {
    display: flex;
    flex-direction: column;
    min-width: 100%;


    .contact--left {
      display: flex;
      flex-direction: column;
      min-width: 100%;

      .contact--block {
        border: var(--border-dotted);
        margin-top: 1em;
        padding: 1em;

        h5 {
          margin-top: 0;
        }

        ul {
          margin-bottom: 0;

          li {
            &:before {
              content: '';
              margin-right: 0;
              background-color: transparent;
            }

            a {
              color: var(--color-prim);
              text-decoration: none;
              background-image: linear-gradient(transparent calc(100% - 2px), currentColor 2px);
              background-repeat: no-repeat;
              background-size: 0% 100%;
              transition: background-size .35s;
              margin-left: 0.1em;
              margin-right: 0.1em;
              font-style: italic;

              &:hover {
                background-size: 100% 100%;
              }
            }
          }
        }

        .icon {
          margin-right: 1rem;
          margin-left: 0;
          color: var(--color-sec);
        }
      }

      .contact--block:first-of-type {
        margin-top: 0;
      }
    }

    .contact--right {
      min-width: 100%;
      form {
        border: var(--border-dotted);
        margin-top: 1em;
        padding: 1em;
      }
    }
  }


  @media only screen and (min-width: 49.9rem) {

    .contact--container {

      .contact--left {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 35%;
        margin-right: 1rem;
      }

      .contact--right {
        margin-top: 0;
        width: 65%;

        form {
          margin-top: 0;
        }
      }
    }
  }



  @media only screen and (min-width: 64rem) {

    .contact--container {

      .contact--left {
        width: 45%;
      }

      .contact--right {
        width: 55%;
      }
    }
  }


  @media only screen and (min-width: 80rem) {

    .contact--container {

      .contact--left {
        width: 35%;
      }

      .contact--right {
        width: 65%;
      }
    }
  }

</style>