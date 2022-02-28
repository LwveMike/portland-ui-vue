<template>
  <div class="section">
    <template v-for="([key, value], index) in getBrands">
      <BrandSection
        :key="index"
        :title="key"
        :quan="value"
      />
    </template>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import BrandSection from './BrandSection.vue';

export default {
  name: 'BrandContainer',
  components: {
    BrandSection,
  },
  data() {
    return {
      options: [
        { title: 'Apple', quan: '32' },
        { title: 'JBL', quan: '14' },
        { title: 'Bose', quan: '3' },
        { title: 'Nest', quan: '5' },

      ],
    };
  },

  computed: {
    ...mapGetters(['getBrands']),
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
