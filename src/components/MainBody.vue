<template>
  <div class="main-body">
    <LeftFilterSection />
    <div class="products-container" />
  </div>
</template>

<script>

import LeftFilterSection from './LeftFilterSection.vue';

export default {
  name: 'MainBody',
  components: {
    LeftFilterSection,
  },

};
</script>

<style lang="scss" scoped>

.main-body {
  display: flex;
  padding: $spacing 0;

  .products-container {
    flex: 3;
  }
}

</style>
