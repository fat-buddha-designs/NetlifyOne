<template>
  <Layout>
    <section>
      <h2
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2500"
      >
        Contact {{ $static.metadata.company }}
      </h2>
      <div class="contact--container">
        <div class="contact--left">
          <div class="contact--block">
            <h5>
              <font-awesome class="icon" :icon="['fas', 'home']" />Address
            </h5>
            <Address />
          </div>
          <div class="contact--block">
            <h5>
              <font-awesome class="icon" :icon="['fas', 'envelope']" />Email
            </h5>
            <ul>
              <EmailLink />
            </ul>
          </div>
          <div class="contact--block">
            <h5><font-awesome class="icon" :icon="['fas', 'phone']" />Phone</h5>
            <ul>
              <MobileLink />
              <PhoneLink />
            </ul>
          </div>
        </div>
        <div class="contact--right">
          <form
            name="contact-form"
            method="POST"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              class="is--obscure"
              type="hidden"
              name="contact-form"
              value="contact"
            />
            <p class="is--obscure">
              <label> Don’t fill this out: <input name="bot-field" /> </label>
            </p>
            <div class="form--row">
              <div>
                <label for="name">Your name</label>
                <input
                  type="text"
                  name="name"
                  class="full--width"
                  required
                  v-model="formData.name"
                />
              </div>
              <div>
                <label for="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  class="full--width"
                  required
                  v-model="formData.email"
                />
              </div>
            </div>

            <div class="form--row">
              <div>
                <label for="mobile">Your Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  class="full--width"
                  v-model="formData.mobile"
                />
              </div>
              <div>
                <label for="landline">Your Landline</label>
                <input
                  type="tel"
                  name="landline"
                  class="full--width"
                  v-model="formData.landline"
                />
              </div>
            </div>

            <div class="textarea--row">
              <label for="message">Message</label>
              <textarea
                name="message"
                rows="8"
                class="full--width"
                required
                v-model="formData.message"
              ></textarea>
            </div>

            <button name="submit" class="icon--button rounded" type="submit">
              <span class="button--text">Submit Form</span>
              <span class="button--icon rounded"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                  /></svg
              ></span>
            </button>
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
import MobileLink from '~/components/MobileLink.vue'
import PhoneLink from '~/components/PhoneLink.vue'
import EmailLink from '~/components/EmailLink.vue'
import Address from '~/components/Address.vue'
export default {
  components: {
    Address,
    MobileLink,
    PhoneLink,
    EmailLink,
  },
  data: () => ({
    formData: {},
  }),

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/success/'))
        .catch((error) => alert(error))
    },
  },
  metaInfo() {
    return {
      title: 'Contact Netlify-One',
      link: [
        {
          rel: 'canonical',
          href: 'https://netlify-one.co.uk/contact',
          hreflang: 'en-GB',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Contact Netlify-One by email or phone',
        },
        {
          name: 'keywords',
          content: 'Contact, Netlify-One, Email, Phone',
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
          content: 'https://netlify-one.co.uk/contact',
        },
        {
          property: 'og:title',
          content: 'Contact Netlify-One',
        },
        {
          property: 'og:description',
          content: 'Contact Netlify-One by email or phone',
        },
        {
          property: 'og:image',
          content: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
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
          content: 'Contact Netlify-One',
        },
        {
          name: 'twitter:description',
          content: 'Contact Netlify-One by email or phone',
        },
        {
          name: 'twitter:image',
          content: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://www.schema.org',
            '@type': 'LocalBusiness',
            name: 'Netlify-One',
            url: 'https://www.netlify-one.co.uk/contact',
            logo: 'https://www.netlify-one.co.uk/assets/img/favicon.png',
            image: 'https://www.netlify-one.co.uk/assets/img/blue-leaves.jpg',
            description:
              'High quality, punctual, rigid tipper transport around East Anglia.',
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
              'https://www.facebook.com/Netlify-One',
              'https://www.twitter.com/Netlify-One',
            ],
            priceRange: '£250-£700',
          },
        },
      ],
    }
  },
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
            background-image: linear-gradient(
              transparent calc(100% - 2px),
              currentColor 2px
            );
            background-repeat: no-repeat;
            background-size: 0% 100%;
            transition: background-size 0.35s;
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
