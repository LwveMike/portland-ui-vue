<template>
  <div class="recommended-product">
    <img
      :src="product.url"
      class="img-content"
    >
    <div class="rec-prod-info">
      <p class="recommended-product-title">
        {{ product.name }}
      </p>
      <p class="recommended-product-color">
        {{ product.color }}
      </p>
      <div class="price-container">
        <p class="price old">
          $ {{ product.price }}
        </p>
        <p class="price new">
          ${{ getNewPrice }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendedProduct',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getNewPrice() {
      return this.product.price - ((this.product.price * this.product.discount) / 100);
    },
  },

};
</script>

<style lang="scss" scoped>

.recommended-product {
  border-right: 1px solid $delimiter-color;
  flex: 1;
  width: $product-width;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  & > * {
    margin-bottom: 1rem;
  }

  &:last-child {
    border-right: none;
  }

  .rec-prod-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .recommended-product-title {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .img-content {
      align-self: center;
      justify-self: center;
      height: 60%;
      object-fit: contain;
    }

    .recommended-product-color {
      font-size: 1rem;
      font-variant: small-caps;
      color: rgba(0,0,0,0.4);
      font-weight: 700;
    }

    .price-container {
      display: flex;
      justify-content: space-around;

      & > * {
        padding: 1rem;
      }

      .price {

          &.old {
            text-decoration: line-through;
            color: rgba(0,0,0,0.4);
          }
        }
    }
  }

}

</style>
