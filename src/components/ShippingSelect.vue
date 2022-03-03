<template>
  <div class="filter-area">
    <label
      for="location"
      class="location-title"
    >type :</label>

    <CustomSelect
      :options="options"
      who="type"
    />
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
        'all', 'simple', 'promoted', 'complicated',
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
