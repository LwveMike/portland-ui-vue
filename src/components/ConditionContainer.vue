<template>
  <div>
    <template v-for="([key], index) in getConditions">
      <BrandSection
        :key="index"
        :title="key"
      />
    </template>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import BrandSection from './BrandSection.vue';

export default {
  name: 'ConditionContainer',
  components: {
    BrandSection,
  },
  computed: {
    ...mapGetters(['getConditions']),

  },

};
</script>

<style>

</style>
