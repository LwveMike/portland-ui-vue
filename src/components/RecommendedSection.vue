<template>
  <div class="recommended">
    <p class="recommended-title">
      best sellers
    </p>
    <div class="recommended-products">
      <template v-for="(product, index) in getComputedHots">
        <RecommendedProduct
          :key="index"
          :product="product"
        />
      </template>
    </div>
  </div>
</template>

<script>

import RecommendedProduct from './RecommendedProduct.vue';

export default {
  name: 'RecommendedSection',
  inject: ['getHots'],
  components: {
    RecommendedProduct,
  },

  computed: {
    getComputedHots() {
      return this.getHots();
    },
  },

};
</script>

<style lang="scss" scoped>

.recommended {
  background-color: $containers-background;
  display: flex;
  flex-direction: column;
  margin-top: calc($global-padding / 2);
  border-radius: $default-radius;
  overflow: hidden;

  .recommended-products {
    display: flex;

  }

  .recommended-title {
    text-align: center;
    color: $title-color;
    font-weight: 700;
    font-variant: small-caps;
    padding: 1rem;
    border-bottom: 1px solid $delimiter-color;
  }

}

</style>
