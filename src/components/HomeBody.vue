<template>
  <div class="website-body">
    <TopFilterContainer />
    <MainBody />
  </div>
</template>

<script>
import TopFilterContainer from './TopFilterContainer.vue';
import MainBody from './MainBody.vue';

export default {
  name: 'HomeBody',
  components: {
    TopFilterContainer,
    MainBody,
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
