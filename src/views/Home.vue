<template>
  <div class="home">
    <Navigation />
    <Slider />
    <HomeBody />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/Navigation.vue';
import Slider from '../components/Slider.vue';
import HomeBody from '../components/HomeBody.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    Slider,
    HomeBody,
  },

  beforeMount() {
    console.log(this.fetchProducts());
  },

  methods: {
    ...mapActions(['fetchProducts']),
  },
};
</script>
