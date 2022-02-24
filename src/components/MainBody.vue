<template>
  <div class="main-body">
    <LeftFilterSection />
    <ProductsContainer />
  </div>
</template>

<script>

import LeftFilterSection from './LeftFilterSection.vue';
import ProductsContainer from './ProductsContainer.vue';

export default {
  name: 'MainBody',
  components: {
    LeftFilterSection,
    ProductsContainer,
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
