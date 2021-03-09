<template>
  <div ref="mySidenav" id="mySidenav" :class="[opened ? 'opened' : 'shut']">
    <div class="menu__holder">
      <b-navbar>
        <b-nav>
          <b-nav-item class="close"
            ><button @click="opened = !opened" class="close">
              <font-awesome
                class="nav__icon"
                :icon="['fas', 'times']"
              /></button
          ></b-nav-item>
          <b-nav-item
            v-for="element in $static.metadata.menu"
            :key="element.name"
          >
            <g-link
              :to="element.link"
              :aria-label="`${element.name}`"
              class="nav__link"
              active-class="is-active-link"
              exact-active-class="active"
            >
              {{ element.name }}</g-link
            >
          </b-nav-item>
          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Services"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <b-dropdown-item
              v-for="element in $static.metadata.dropmenu"
              :key="element.name"
            >
              <g-link
                :to="element.link"
                :aria-label="`${element.name}`"
                active-class="is-active-link"
                exact-active-class="active"
              >
                {{ element.name }}</g-link
              >
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <g-link class="search--link" :aria-label="search" to="/search/">
            <svg
              class="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              />
            </svg>
          </g-link>
        </b-nav>
      </b-navbar>
    </div>
    <div class="button__holder">
      <button @click="opened = !opened" class="open">
        <font-awesome class="nav__icon" :icon="['fas', 'bars']" />
      </button>
    </div>
  </div>
  <!-- /nav -->
</template>

<static-query>
query {
  metadata {
    company
    menu {
      name
      link
    }
    dropmenu {
      name
      link
    }
  }
}
</static-query>

<script>
export default {
  name: 'Nav',

  data: () => ({
    opened: false,
  }),
}
</script>

<style lang="scss">
#mySidenav {
  z-index: 999;

  .navbar {
    padding: 0;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      height: 2.6em;

      a {
        color: var(--f-color);
        padding-left: 0.6em;
        transition: all 0.35s var(--trans);

        &.active {
          color: var(--color-g-8);
          font-style: italic;
          font-weight: 700;
        }

        &:focus,
        &:hover {
          color: var(--color-g-9);
          text-decoration: underline;
        }

        .icon {
          margin-right: 0.4em;
          color: var(--color-blk);
        }
      }

      .dropdown-menu,
      .dropdown-item {
        background: var(--color-bkg);
        border-radius: var(--bor-rad);

        a {
          transition: all 0.35s var(--trans);

          &:focus,
          &:hover {
            text-decoration: underline;
            color: var(--color-g-8);
          }
        }
      }

      .dropdown-item {
        padding-top: 0.65em;
        border-bottom: var(--bor-dot);
      }
    }
  }
}

@media only screen and (max-width: 49.87rem) {
  #mySidenav {
    display: -ms-grid;
    display: grid;
    grid-template-columns: 200px 32px;
    height: 100%;
    width: 232px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -200px;
    overflow-x: hidden;
    transition: 0.5s;

    &.opened {
      left: 0;
      width: 200px;
    }

    &.shut {
      left: -200px;
    }

    button {
      outline: none;
      appearance: none;
      background: transparent;
      border: none;
    }

    .menu__holder {
      -ms-grid-column: 1;
      grid-column: 1;
      border-right: var(--bor-dot);
      width: 200px;
      background: var(--bkg-color);

      ul li {
        min-width: 100%;

        .dropdown-menu,
        .dropdown-item {
          border-radius: var(--bor-rad);
        }

        .dropdown-menu {
          background: var(--bkg-color);
          margin-left: 0.6em;
        }

        .dropdown-item {
          padding-top: 0.6em;
          border-bottom: var(--bor-dot);
        }
      }

      ul li:nth-last-child(1) {
        padding-left: 0.6em;
      }

      .dropdown-menu li:nth-last-child(1),
      .dropdown-menu li:nth-last-child(2),
      .dropdown-menu li:nth-last-child(3) {
        padding-left: 0;
      }

      .close {
        -ms-grid-column: 2;
        grid-column: 2;
        text-align: right;
        display: block;
        text-decoration: none;
        font-size: 1.2em;
        position: relative;
        top: 0.3rem;
        left: 0;
        color: var(--color-g-4);
        transition: all 0.35s var(--trans);
        opacity: 1;

        &:focus,
        &:hover {
          color: var(--color-pri);
        }
      }

      .search--link {
        .icon {
          position: relative;
          top: 0.3rem;
          left: 1rem;
        }
      }
    }

    .button__holder {
      -ms-grid-column: 2;
      grid-column: 2;
      position: relative;
      background: transparent;
    }

    .open {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.2em 0.4em;
      font-size: 1.2em;
      color: var(--color-wh);
      background-color: rgba(0, 0, 0, 0.7);
      transition: all 0.35s var(--trans);

      &:focus,
      &:hover {
        color: var(--color-g-4);
      }
    }
  }
}

@media only screen and (min-width: 49.9rem) {
  #mySidenav {
    position: relative;
    width: 100vw;
    height: auto;
    padding-top: 0;
    display: -ms-grid;
    display: grid;
    grid-template-columns: 1fr;
    background: var(--bkg-color);

    .menu__holder {
      display: -ms-flexbox;
      display: flex;
      justify-content: center;

      ul {
        li {
          background: var(--bkg-color);

          a {
            padding-right: 0.8em;
            padding-left: 0.8em;
          }
        }
      }
    }

    .button__holder,
    .close {
      display: none;
    }

    .search--link {
      .icon {
        position: relative;
        top: 0.5rem;
        left: 1.5rem;
      }
    }
  }
}

@media only screen and (min-width: 64rem) {
  #mySidenav {
    padding: 0.5em;

    .menu__holder {
      ul {
        li {
          a {
            padding-right: 1em;
            padding-left: 1em;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 80rem) {
  #mySidenav {
    padding: 0.7em;
  }
}
</style>
