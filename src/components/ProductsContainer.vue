<template>
  <div
    class="products-container"
  >
    <template
      v-for="product in getComputedProducts"
    >
      <Product
        :key="product.id"
        :product="product"
      />
    </template>
  </div>
</template>

<script>

import Product from './Product.vue';

export default {
  name: 'ProductsContainer',
  components: {
    Product,
  },
  inject: ['getProducts'],
  computed: {
    getComputedProducts() {
      return this.getProducts();
    },
  },

};
</script>

<style lang='scss' scoped>

.products-container {
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-content: start;
    padding-left: $spacing;
    gap: $spacing;

}

</style>
