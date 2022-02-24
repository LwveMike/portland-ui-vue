<template>
  <div>
    <template v-for="(option, index) in options">
      <BrandSection
        :key="index"
        :title="option"
      />
    </template>
  </div>
</template>

<script>

import BrandSection from './BrandSection.vue';

export default {
  name: 'ConditionContainer',
  components: {
    BrandSection,
  },
  data() {
    return {
      options: [
        'New', 'Manufacturer Refurbished', 'Seller Refurbished', 'Used', 'For Parts or Not Working',

      ],
    };
  },

};
</script>

<style>

</style>
