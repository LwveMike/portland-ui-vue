<template>
  <div>
    <template v-for="([key], index) in getComputedConditions">
      <BrandSection
        :key="index"
        :title="key"
      />
    </template>
  </div>
</template>

<script>

import BrandSection from './BrandSection.vue';

export default {
  name: 'ConditionContainer',
  inject: ['getConditions'],
  components: {
    BrandSection,
  },
  computed: {
    getComputedConditions() {
      return this.getConditions();
    },
  },

};
</script>

<style>

</style>
