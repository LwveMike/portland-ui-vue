<template>
  <div class="home">
    <Navigation />
    <Slider />
    <HomeBody />
  </div>
</template>

<script>
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
};
</script>
