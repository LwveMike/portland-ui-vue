<template>
  <div class="product complicated size-s">
    <div class="img-container">
      <img
        :src="product.url"
        class="img-content"
      >
      <div class="details">
        <h2 class="product-title">
          {{ product.name }}
        </h2>
        <p class="product-price">
          $ {{ product.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComplicated',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>

.product {
  border-radius: $default-radius;
  cursor: pointer;
  overflow: hidden;
  background-color: $product-background;
  max-height: $product-maxheight;

  &.complicated {

    .details {

      .product-title {
        font-weight: 500;
        font-size: 1rem;
        text-align: center;
      }

      .product-price {
        color: black;
        font-variant: small-caps;
        font-weight: 600;
        text-align: center;
        margin-top: 0.5rem;
      }
    }

    .img-container {
      position: relative;
      height: 100%;
      width: 100%;

      .img-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .details {
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }

}

</style>
