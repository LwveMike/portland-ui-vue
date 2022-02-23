<template>
  <div class="top-filter-container">
    <MatchSelect />
    <div class="filter-area">
      <KeywordsInput />
      <PriceRange />
      <ShippingInput />
    </div>
    <ShippingSelect />
  </div>
</template>

<script>

import MatchSelect from './MatchSelect.vue';
import KeywordsInput from './KeywordsInput.vue';
import PriceRange from './PriceRange.vue';
import ShippingSelect from './ShippingSelect.vue';
import ShippingInput from './ShippingInput.vue';

export default {
  name: 'TopFilterContainer',
  components: {
    MatchSelect,
    KeywordsInput,
    PriceRange,
    ShippingSelect,
    ShippingInput,
  },

};
</script>

<style lang="scss" scoped>

.top-filter-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: $containers-background;
  border-radius: 0.8rem;

  .filter-area {
    border-right: 1px solid $delimiter-color;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    * {
      flex: 1;
    }

    &:last-child {
      border-right: none;
    }

  }

}

</style>
