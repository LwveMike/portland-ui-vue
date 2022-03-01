<template>
  <div class="home">
    <Navigation />
    <Slider />
    <HomeBody />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/Navigation.vue';
import Slider from '../components/Slider.vue';
import HomeBody from '../components/HomeBody.vue';
import Reviews from '../components/Reviews.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    Slider,
    HomeBody,
    Reviews,
    Footer,
  },

  beforeMount() {
    this.fetchResources();
    this.getAuthData();
  },

  methods: {
    ...mapActions(['fetchResources', 'getAuthData']),
  },
};
</script>
