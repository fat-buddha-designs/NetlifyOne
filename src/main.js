// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('typeface-livvic')
require('typeface-raleway')
import DefaultLayout from '~/layouts/Default.vue'
//Bootstrap-Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Cookie Consent
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
// Scss
import '~/assets/scss/styles.scss'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faCopyright,
  faEnvelope,
  faMobileAlt,
  faPhone,
  faAngleUp,
  faSearchMinus,
  faSearchPlus,
  faClock,
  faTimes,
  faBars,
  faListAlt,
  faTag,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faPinterest,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faFlickr,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(
  faCopyright,
  faEnvelope,
  faMobileAlt,
  faPhone,
  faAngleUp,
  faSearchMinus,
  faSearchPlus,
  faClock,
  faTimes,
  faBars,
  faTwitter,
  faPinterest,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faFlickr,
  faListAlt,
  faTag,
  faHome
)

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline)
  Vue.use(BootstrapVue)
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', dir: 'ltr' }
  // Add a meta tag
  head.meta.push({
    name: 'author',
    content: 'Will Moody',
  })
  // Add a meta tag
  head.meta.push({
    name: 'robots',
    content: 'index,follow,noodp',
  })
  // Add a meta tag
  head.meta.push({
    name: 'googlebot',
    content: 'index,follow',
  })
  // Add a meta tag
  head.meta.push({
    name: 'google',
    content: 'nositelinkssearchbox',
  })
  // Add a meta tag
  head.meta.push({
    name: 'google',
    content: 'notranslate',
  })
  // Add a meta tag
  head.meta.push({
    name: 'language',
    content: 'English',
  })
  // Add a meta tag
  head.meta.push({
    name: 'rating',
    content: 'General',
  })
}
