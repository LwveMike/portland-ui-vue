<template>
  <div class="products-container">
    <!-- <ProductSimple
      name="Appple"
      color="blue"
      :price="4.6"
      url="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704"
    /> -->

    <template v-for="product in getProducts">
      <Product
        :key="product.id"
        :product="product"
      />
    </template>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import Product from './Product.vue';

export default {
  name: 'ProductsContainer',
  components: {
    Product,
  },

  computed: {
    ...mapGetters(['getProducts']),
  },

};
</script>

<style lang='scss' scoped>

.products-container {
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    padding-left: $spacing;
    gap: $spacing;

}

</style>
