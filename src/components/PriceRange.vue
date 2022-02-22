<template>
  <div class="price-range-container">
    <p class="price-range-title">
      price
    </p>
    <CustomInput
      type="number"
      min="0"
      max="3000"
      value-type="min"
    />
    <div class="dash-icon">
      -
    </div>
    <CustomInput
      type="number"
      min="1000"
      max="9999"
      value-type="max"
    />
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  name: 'PriceRange',
  components: {
    CustomInput,
  },
  data() {
    return {
      minValue: 1,
      maxValue: 1000,
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
  flex: 1;

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
