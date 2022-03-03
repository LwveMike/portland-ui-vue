<template>
  <div class="section">
    <template v-for="([key, value], index) in getComputedBrands">
      <BrandSection
        :key="index"
        :title="key"
        :quan="value"
      />
    </template>
  </div>
</template>

<script>

import BrandSection from './BrandSection.vue';

export default {
  name: 'BrandContainer',
  inject: ['getBrands'],
  components: {
    BrandSection,
  },

  computed: {
    getComputedBrands() {
      return this.getBrands();
    },
  },

};
</script>

<style lang="scss" scoped>

.section {
    display: flex;
    flex-direction: column;
    background-color: $containers-background;

}

</style>
