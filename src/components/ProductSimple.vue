<template>
  <div class="product simple size-s">
    <slot />
    <img
      :src="product.url"
      class="img-content"
    >
    <div>
      <h2 class="product-title">
        {{ product.name }}
      </h2>
      <h3 class="product-color">
        {{ product.color }}
      </h3>
      <p class="product-price">
        $ {{ product.price }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSimple',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style lang='scss' scoped>

.product {
  border-radius: $default-radius;
  cursor: pointer;
  overflow: hidden;
  background-color: $product-background;
  max-height: $product-maxheight;
  position: relative;

  &.simple {
    display: flex;
    flex-direction: column;
    padding: calc($spacing * 2) $spacing;
    justify-content: space-around;

    * {
      margin-bottom: 0.5rem;
    }

    .img-content {
      height: 200px;
      object-fit: contain;
      place-self: center right;
    }

    .product-title {
      font-weight: 500;
      font-size: 1rem;
      text-align: center;
    }

    .product-color {
      font-variant: small-caps;
      color: rgba(0, 0, 0, 0.3);
      font-weight: 500;
      text-align: center;
    }

    .product-price {
      color: $nav-elements-color;
      font-variant: small-caps;
      font-weight: 600;
      text-align: center;
      margin-top: 0.5rem;
    }
  }

}

</style>
