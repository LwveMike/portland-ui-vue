<template>
  <div id="footer">
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
      <div class="socials" />
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

// import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/brands/twitter';
import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/google-plus-g';
import portlandSvg from '../assets/images/Portland.svg';

export default {
  name: 'Footer',
  components: {
    // VIcon: Icon,
  },
  data() {
    return {
      logo: portlandSvg,
    };
  },

};
</script>

<style>

</style>
