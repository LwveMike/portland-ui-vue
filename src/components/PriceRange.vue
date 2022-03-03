<template>
  <div class="price-range-container">
    <p class="price-range-title">
      price
    </p>
    <MinInput />
    <div class="dash-icon">
      -
    </div>
    <MaxInput />
  </div>
</template>

<script>
import MinInput from './MinInput.vue';
import MaxInput from './MaxInput.vue';

export default {
  name: 'PriceRange',
  components: {
    MinInput,
    MaxInput,
  },
  data() {
    return {
      stylePass: {
        width: '5rem',
      },
    };
  },

};
</script>

<style lang="scss">

.price-range-container {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  justify-content: space-around;

  .price-range-title {
    margin-right: 1rem;
    font-variant: small-caps;
    font-weight: 600;
    color: $filter-title-color;
  }

  .input-class {
    width: 5rem;
    font-variant: small-caps;
    font-weight: 600;
    color: $filter-content-color;
  }
}

</style>
