<template>
  <div class="website-body">
    <TopFilterContainer />
    <div class="main-body" />
    <div id="pagination" />
    <div id="recommended" />
  </div>
</template>

<script>
import TopFilterContainer from './TopFilterContainer.vue';

export default {
  name: 'HomeBody',
  components: {
    TopFilterContainer,
  },

};
</script>

<style lang="scss" scoped>

.website-body {
  background-color: $website-body-background;
  padding: calc($global-padding / 2) $global-padding calc($global-padding / 2)
  calc($global-padding + 2rem);
  min-height: 100vh;
}

</style>
