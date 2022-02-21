<template>
  <div class="home">
    <Navigation />
    <Slider />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Slider from '../components/Slider.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    Slider,
  },
};
</script>
