<template>
  <Layout>
    <section>
      <h2 data-aos="fade-in" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="2500">Our Policies</h2>
      <h3>Accessibility Policy</h3>
    <p>We’ve built this website to make it easier for all web users to contact '{{ $static.metadata.siteName }}' or find out more
      about us.</p>
      <h5>Zooming</h5>
    <p>You can always zoom in or out if that works better for you.</p>
    <p><font-awesome class="icon" :icon="['fal', 'search-plus']" /> Press CTRL + PLUS SIGN (+) to zoom in.</p>
    <p><font-awesome class="icon" :icon="['fal', 'search-minus']" /> Press CTRL + HYPHEN (-) to zoom out.</p>
      <h5>Images</h5>
    <p>We have added ALT tags to all images, ALT Tags are invisible descriptions of images which are read aloud to
      blind users on a screen reader. Adding ALT text allows us to include images, but still provide the content in an
      alternative text based format. If no ALT tags are provided, then a screen reader would only be able to say
      "IMAGE" or perhaps provide a file name.</p>
      <h5>ARIA</h5>
    <p>We also make use of Accessible Rich Internet Applications (ARIA) attributes where possible. ARIA is a set of
      special accessibility attributes which can be added to any markup, but is especially suited to HTML. The role
      attribute defines what the general type of object is (such as an article, alert, or slider).
    </p>
    <p>The aria-label attribute is used to define a string that labels the current element. Use it in cases where a
      text label is not visible on the screen.</p>
    <p>The aria-hidden attribute is used to hide elements, such as icon names; that would otherwise make following a
      web page difficult for screen readers.</p>
      <h5>Langauge</h5>
    <p>We have included a Langauge Tag, this tag is designed to signal screen readers pronunciation engines which
      language to use.</p>
      <h5>Skip to Main Content Link</h5>
      <p>The accessibility feature of “Skip to Main Content” allows you to get past all the navigation and end up at the main event. This is an element that usually appears high in the page hierarchy, often the first focusable element on the page. When selected, it will move focus for the keyboard user or screen reader to the main content on the page, allowing reading or navigation to continue from there.</p>


      <h3>Cookies Policy</h3>
      <p>When you view this website, we may store some information on your computer in the form of a cookie file (referred to here as “Cookies”), which will enable us to tailor the site to improve your browsing experience. Cookies are small text files that are placed on your computer by websites that you visit.</p>
      <h5>The Cookies we use on the Site can be described as follows:</h5>
      <p>CMSSESSID[unique id] - used to maintain continuity as you move between pages in the Site and expire when you close your web browser.</p>
      <h5>Cookies used by Google Analytics</h5>
      <p>--utma - this cookie keeps track of the number of times a visitor has been to the Site, as well as information about when their first visit was, and when their last visit occurred. All data is anonymous and expires 2 years from set up.</p>
      <p>--utmb and --utmc - these cookies work together to calculate how long a visit takes. --utmb takes a timestamp of the exact moment in time when a visitor enters the Site, while --utmc takes a timestamp of the exact moment in time when a visitor leaves. The cookies effect can be said to wait 30 minutes for another pageview to happen, and if it does not, they expire.</p>
      <p>--utmz - this cookie allows analytics to ascertain where the visitor came from, what search engine was used, what link the user clicked on, what keyword was used, and from where in the world the Site was accessed. It is used to calculate search engine traffic, advertising campaigns and page navigation within the Site and expires 6 months after set up.</p>

      <h3>Privacy Policy</h3>
      <p>In May 2018, the original Data Protection Act 1998 was replaced by General Data Protection Regulation (GDPR). This had an impact on small businesses such as mine to notify users of how we collect and use their personal details. This page outlines how I do this.</p>
      <p>What this confidentiality notice covers</p>
      <p>{{ $static.metadata.siteName }} is committed to protecting your personal information. In this notice, references to 'we' or 'us' means ‘{{ $static.metadata.siteName }}’. This notice explains how we collect and use the personal information about you.</p>
      <h5>Information we gather</h5>
      <p>{{ $static.metadata.siteName }} gathers certain information about people using our business. We collect information in the following ways:</p>
      <h5>Information from Website Use</h5>
      <p>We do not gather or collect any information about you when you browse our website.</p>
      <p>We do collect information from you when you submit a contact form to us, i.e. name, email address etc. we use this information to make contact with you. In submitting a contact form you agree to us using the information supplied to contact you and also to us storing the information you submitted.</p>
      <h5>Information about you from third parties</h5>
      <p>We do not collect your personal information from other 3rd party sources.</p>
      <h5>How we may use your information</h5>
      <p>We only use your information for the purposes of running our business.</p>
      <p>We do not use your information for other 3rd party marketing in any way.</p>
      <p>We may use your information for a number of purposes including the following:</p>
      <ul>
        <li>1. Compliance with legal, regulatory and corporate governance obligations and good practice</li>
        <li>2. To provide you with information about our business, your treatment, your appointments, etc.</li>
      </ul>
      <p>We will use the information you give us to:</p>
      <ul>
        <li>1. Perform services you have requested or providing you with information you have asked for;</li>
        <li>2. Any other reasonable purposes of {{ $static.metadata.siteName }}, acting always in accordance with the data protection law (as amended from time to time).</li>
      </ul>
      <h5>Marketing</h5>
      <p>We do not use your information for marketing purposes.</p>
      <h5>Information Sharing and Disclosure</h5>
      <p>We do not normally share your information with 3rd parties at all.</p>
      <p>However, we may disclose your personal information to law enforcement agencies:</p>
      <ul>
        <li>1. If we are under a duty to disclose your personal data in order to comply with any legal obligation (for example to government bodies and law enforcement agencies) on production of an appropriate warrant for such
          data;</li>
        <li>2. To protect the rights, property, information or safety of {{ $static.metadata.siteName }} employees or others.</li>
      </ul>
      <h5>Keeping your records</h5>
      <p>We keep records only for as long as required to operate the business in accordance with legal requirements.</p>
      <h5>Where we may store your information</h5>
      <p>We may keep your personal data in digital format, in a database, on personal computers, laptops, tablets or similar.</p>
      <p>'{{ $static.metadata.siteName }}' will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Notice.</p>
      <h5>Your rights</h5>
      <p>You have the right to:</p>
      <ul>
        <li>1. Request a copy of the personal information we hold about yourself. This request has a charge of £10 to cover postage etc.</li>
        <li>2. Have any inaccuracies in your data corrected. If you would like to update the details we hold about you please contact us via telephone or by letter.</li>
      </ul>
      <h5>Changes to this notice and the way we treat personal information</h5>
      <p>We may update the terms of this privacy notice at any time.</p>
      <p>We will notify you about significant changes in the way we treat personal information by informing you at our next point of contact.</p>
      <h5>Enquires and Complaints</h5>
      <p><b>'{{ $static.metadata.author }}'</b> is the first point of contact regarding any enquires arising from this Privacy Policy. Where possible, please raise all enquires in writing.</p>
      <p>If you are unhappy with our work or something that we have done or failed to do in regard of protecting your personal data, please inform us in writing. {{ $static.metadata.siteName }} will acknowledge receipt of all complaints and will endeavour to investigate the complaint within 15 working days.</p>
      <p>All information enquires or complaints should be sent in writing to:</p>
      <ul>
        <li class="is--bold">{{ $static.metadata.author }}</li>
        <li class="is--bold">{{ $static.metadata.siteName }}</li>
        <li>{{ $static.metadata.address }}</li>
        <li>{{ $static.metadata.village }}</li>
        <li>{{ $static.metadata.city }}</li>
        <li>{{ $static.metadata.county }}</li>
        <li>{{ $static.metadata.postcode }}</li>
      </ul>
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
  siteName
  author
	company
	address
	village
	city
	county
	postcode
	telephone
	telephoneDisplay
	mobile
	mobileDisplay
  }
}
</static-query>

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

