<template>
  <vue-cookie-accept-decline
    :ref="'CookieBar'"
    :elementId="'CookieBar'"
    :debug="false"
    :position="'bottom'"
    :type="'bar'"
    :disableDecline="false"
    :transitionName="'slideFromBottom'"
    :showPostponeButton="false"
    @status="cookieStatus"
    @clicked-accept="cookieClickedAccept"
    @clicked-decline="cookieClickedDecline"
  >
    <!-- Optional -->
    <div slot="postponeContent">&times;</div>

    <!-- Optional -->
    <div slot="message">
      <p>
        We use cookies to ensure you get the best experience on our website.
        <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
      </p>
    </div>

    <!-- Optional -->
    <div slot="declineContent">OPT OUT</div>

    <!-- Optional -->
    <div slot="acceptContent">GOT IT!</div>
  </vue-cookie-accept-decline>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      status: null,
    }
  },
  methods: {
    cookieStatus(status) {
      console.log('status: ' + status)
      this.status = status
    },
    cookieClickedAccept() {
      console.log('here in accept')
      this.status = 'accept'
    },
    cookieClickedDecline() {
      console.log('here in decline')
      this.status = 'decline'
    },
    cookieRemovedCookie() {
      console.log('here in cookieRemoved')
      this.status = null
      this.$refs.myPanel1.init()
    },

    removeCookie() {
      console.log('Cookie removed')
      this.$refs.myPanel1.removeCookie()
    },
  },
  computed: {
    statusText() {
      return this.status || 'No cookie set'
    },
  },
}
</script>

<style lang="scss">
div#CookieBar {
  background: var(--color-pri-drk);
  color: var(--color-wh);
  border-top: none;
  font-weight: inherit;
  font-family: var(--b-font);
  --max-font: 18;
  --min-font: 14;
  font-size: var(--responsive);
}

.cookie__bar__bottom {
  background: var(--color-pri);
  color: var(--color-wh);
}

.cookie__bar__postpone-button {
  background: var(--color-orange);
  color: var(--color-wh);
}

.cookie__bar__content {
  color: var(--color-wh);
  font-weight: 1em;
  font-family: var(--b-font);
  --max-font: 18;
  --min-font: 14;
  font-size: var(--responsive);

  a {
    color: var(--color-sec);
    font-size: inherit;

    &:focus,
    &:hover {
      color: var(--color-blk);
      text-decoration: none;
    }
  }
}

.cookie__bar__buttons--button--accept {
  background: var(--color-pri-lgt);
  color: var(--color-wh);

  &:focus,
  &:hover {
    background: var(--color-pri-drk);
  }
}

.cookie__bar__buttons--button--decline {
  background: var(--color-sec);
  color: var(--color-wh);

  &:focus,
  &:hover {
    background: var(--color-sec-lgt);
  }
}

.cookie__bar__buttons__button--accept {
  background: var(--color-green);
  background: linear-gradient(var(--color-green), var(--color-green));
  color: var(--color-wh);
  border: none;
  border-radius: var(--bor-rad);
  transition: var(--trans);
}
.cookie__bar__buttons__button--accept:hover {
  background: var(--color-green-drk);
  border: none;
}
.cookie__bar__buttons__button--decline {
  background: var(--color-red);
  background: linear-gradient(var(--color-red), var(--color-red));
  color: var(--color-wh);
  border: none;
  border-radius: var(--bor-rad);
  transition: var(--trans);
}
.cookie__bar__buttons__button--decline:hover {
  background: var(--color-red-drk);
  border: none;
}

.cookie__bar__buttons__button--accept div,
.cookie__bar__buttons__button--decline div {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
