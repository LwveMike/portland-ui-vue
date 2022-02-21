<template>
  <div>
    <MainNavigation />
    <SecondaryNavigation />
  </div>
</template>

<script>
import MainNavigation from './MainNavigation.vue';
import SecondaryNavigation from './SecondaryNavigation.vue';

export default {
  name: 'Navigation',

  components: {
    MainNavigation,
    SecondaryNavigation,
  },

};
</script>

<style>

</style>
