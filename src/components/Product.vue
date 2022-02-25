<template>
  <ProductSimple
    v-if="product.type === 'simple'"
    :product="product"
  />
  <ProductPromoted
    v-else-if="product.type === 'promoted'"
    :product="product"
  />
  <ProductComplicated
    v-else
    :product="product"
  />
</template>

<script>

import ProductSimple from './ProductSimple.vue';
import ProductPromoted from './ProductPromoted.vue';
import ProductComplicated from './ProductComplicated.vue';

export default {
  name: 'Product',
  components: {
    ProductSimple,
    ProductPromoted,
    ProductComplicated,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style>

</style>
