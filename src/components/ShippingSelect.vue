<template>
  <div class="filter-area">
    <label
      for="location"
      class="location-title"
    >ship to :</label>

    <CustomSelect :options="options" />
  </div>
</template>

<script>

import CustomSelect from './CustomSelect.vue';

export default {
  name: 'ShippingSelect',
  components: {
    CustomSelect,
  },
  data() {
    return {
      options: [
        'usa', 'japan', 'china',
      ],
    };
  },

};
</script>

<style lang="scss" scoped>

.location-title {
    margin-right: 1rem;
    font-variant: small-caps;
    font-weight: 600;
    color: $filter-title-color;

}

</style>
