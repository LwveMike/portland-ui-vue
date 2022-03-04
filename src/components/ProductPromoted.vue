<template>
  <div class="product promoted size-m">
    <slot />
    <div class="img-container">
      <img
        :src="product.url"
        class="img-content"
      >
      <p class="product-price">
        $ {{ product.price }}
      </p>
    </div>
    <div class="product-details">
      <div class="left-side">
        <h2 class="product-title">
          {{ product.name }}
        </h2>
        <h3 class="product-color">
          {{ product.color }}
        </h3>
      </div>
      <div class="right-side">
        <div class="details">
          <p class="properties">
            16 GB
          </p>
          <button class="buy">
            buy now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPromoted',
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

  &.promoted {
    display: flex;
    flex-direction: column;

    .img-container {
      width: 100%;
      position: relative;

      .product-price {
        position: absolute;
        left: 12px;
        top: 12px;
        background-color: black;
        color: white;
        padding: 4px 8px;
        border-radius: $default-radius;
        font-weight: 700;
        font-size: 1rem;
      }
    }

    .img-content {
      width: 100%;
      object-fit: contain;
    }

    .product-details {
      display: flex;
      justify-content: space-between;
      padding: 21px 24px;

       .product-title {
          font-weight: 500;
          font-size: 1rem;
        }

        .product-color {
          font-variant: small-caps;
          color: rgba(0, 0, 0, 0.3);
          font-weight: 500;
        }

        .right-side {

          .details {
            display: flex;
            border: 1px solid $buy-btn-color;
            border-radius: 50px;
            font-weight: 600;
            align-items: center;

            & > * {
              color: $promoted-color;
              flex: 1;
              padding: 0.5rem 1rem;

              &:first-child {
                border-right: 1px solid $buy-btn-color;

              }
            }

            .buy {
              width: 8rem;
              font-weight: 600;
              font-variant: small-caps;
              font-size: 1rem;
            }
          }
        }
  }
  }

  &.size-m {
    grid-column: span 2;
  }

}

</style>
