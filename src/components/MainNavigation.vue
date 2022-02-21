<template>
  <div class="main-navigation">
    <div class="left-side">
      <div class="burger-container">
        <VIcon
          name="bars"
          class="icon"
          scale="1.8"
        />
      </div>
      <div class="logo centered">
        <RouterLink to="/">
          <img
            :src="logo"
            alt="Logo"
            class="logo-img"
          >
        </RouterLink>
      </div>
    </div>

    <div class="center-side centered">
      <ul class="center-nav">
        <template v-for="(item, index) in mainMenuItems">
          <MainNavigationItem
            :key="index"
            :name="item"
          />
        </template>
      </ul>
    </div>

    <div class="right-side">
      <div class="cart centered">
        <button class="cart-btn centered">
          <VIcon
            name="shopping-cart"
            class="shopping-cart-icon"
            scale="1.5"
          />
          <p class="btn-content">
            cart
          </p>
        </button>
        <p class="items-quantity centered">
          {{ quantity }}
        </p>
      </div>

      <button class="sign-in-btn">
        sign in
      </button>
    </div>
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/bars';
import 'vue-awesome/icons/shopping-cart';

import MainNavigationItem from './MainNavigationItem.vue';

const logoSvg = require('../assets/images/Portland-black.svg');

export default {
  name: 'MainNavigation',

  components: {
    VIcon: Icon,
    MainNavigationItem,
  },

  data() {
    return {
      logo: logoSvg,
      mainMenuItems: [
        'Home', 'Devices', 'Delivery & Payment', 'Guarantee', 'About Us',
      ],
      quantity: 0,
    };
  },

};
</script>

<style lang="scss" scoped>
  .main-navigation {
    padding: 0 $global-padding;
    display: flex;
    border-bottom: 1px solid $bars-color;

    .left-side {
      display: flex;
      flex: 3;

      .logo {
        padding: 2rem;

        .logo-img {
          width: 6rem;
          object-fit: contain;
          cursor: pointer;
        }
      }

      .burger-container {
        border-right: 1px solid $bars-color;
        padding: 2rem;

        .icon {
          cursor: pointer;
          fill: $nav-elements-color;
          font-size: 6rem;
          margin: 2px;
        }

      }
    }

    .center-side {
      flex: 6;

      .center-nav {
        display: flex;
        padding: 1.6rem 2rem;
        justify-content: space-between;
        flex: 1;
      }
    }

    .right-side {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: right;

      .cart {
        display: flex;
        margin-right: 2rem;

        .cart-btn {
          background-color: transparent;
          margin-right: 0.5rem;

          .cart-icon {
             padding: 6px;
          }

          .shopping-cart-icon {
            margin: 6px;
            font-size: 4rem;
            fill: $nav-elements-color;
          }

          .btn-content {
              font-variant: small-caps;
              font-size: 1.2rem;
              margin-left: 0.5rem;
          }
        }

         .items-quantity {
          background-color: $bars-color;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }

      }

      .sign-in-btn {
        font-variant: small-caps;
        font-size: 1rem;
        color: $nav-elements-color;
        border-radius: 50px;
        font-weight: 600;
        border: 2px solid $bars-color;
        padding: 0.5rem 1rem;
      }

    }
  }

</style>
