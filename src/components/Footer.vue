<template>
  <div class="footer">
    <div class="with-menu">
      <div class="logo">
        <a href="#nav-bar"><img
          :src="logo"
          alt="logo"
          class="logo-image"
        ></a>
      </div>
      <div class="footer-menu">
        <a
          href="#"
          class="menu-item"
        >home</a>
        <a
          href="#"
          class="menu-item"
        >shop</a>
        <a
          href="#"
          class="menu-item"
        >team</a>
        <a
          href="#"
          class="menu-item"
        >about us</a>
        <a
          href="#"
          class="menu-item"
        >contacts</a>
      </div>
      <div class="socials">
        <VIcon
          name="brands/twitter"
          scale="1.5"
        />

        <VIcon
          name="brands/facebook"
          scale="1.5"
        />

        <VIcon
          name="brands/google-plus-g"
          scale="2"
        />
      </div>
    </div>
    <div class="bottom-part">
      <p class="quote">
        She gave my mother such a turn, that I have always been convinced
        I am indebted to Miss Betsey
        for
        having been born on a Friday.
      </p>
      <div class="additional">
        <a href="#">privacy policy</a>
        <a href="#">terms and conditions</a>
      </div>
    </div>
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/brands/twitter';
import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/google-plus-g';
import portlandSvg from '../assets/images/Portland.svg';

export default {
  name: 'Footer',
  components: {
    VIcon: Icon,
  },
  data() {
    return {
      logo: portlandSvg,
    };
  },

};
</script>

<style lang="scss" scoped>

.footer {
  background-color: $footer-background;
  padding: 1rem calc($global-padding + 2rem) 3rem;

  .with-menu {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    border-bottom: 1px solid $quote-color;

    .logo {
       flex: 1;

       .logo-image {
          width: 6rem;
          object-fit: contain;
          cursor: pointer;
       }
    }

    .footer-menu {
      text-align: center;
      flex: 4;

      .menu-item {
        color: white;
        font-variant: small-caps;
        font-size: 1.2rem;
        font-weight: 800;
        margin: 0 1rem;
      }
    }

    .socials {
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: flex-end;

       & * {
         fill: white;
         margin-right: 2rem;
         cursor: pointer;

         &:last-child {
           margin-right: 0;
         }
       }

    }
  }

  .bottom-part {
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;

    .quote {
      font: italic normal 300 1.1rem 'Crimson Pro';
      color: $quote-color;
    }

    & > * {
      flex: 1;
    }

    .additional {

      font-size: 1rem;
      display: flex;
      justify-content: end;
      font-variant: small-caps;

      & > * {
        color: $quote-color;
        margin-right: 2rem;
        font-weight: 600;
      }

      *:last-child {
        margin-right: 0;
      }
    }
  }
}

</style>
