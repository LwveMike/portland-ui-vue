<template>
  <div class="top-filter-container">
    <MatchSelect />
    <div class="filter-area">
      <KeywordsInput />
      <PriceRange />
    </div>
    <ShippingSelect />
  </div>
</template>

<script>

import MatchSelect from './MatchSelect.vue';
import KeywordsInput from './KeywordsInput.vue';
import PriceRange from './PriceRange.vue';
import ShippingSelect from './ShippingSelect.vue';

export default {
  name: 'TopFilterContainer',
  components: {
    MatchSelect,
    KeywordsInput,
    PriceRange,
    ShippingSelect,
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
    justify-content: center;
    align-items: center;

    &:last-child {
      border-right: none;
    }

  }

}

</style>
