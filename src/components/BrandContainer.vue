<template>
  <div class="section">
    <template v-for="(option, index) in options">
      <BrandSection
        :key="index"
        :title="option.title"
        :quan="option.quan"
      />
    </template>
  </div>
</template>

<script>

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

};
</script>

<style lang="scss" scoped>

.section {
    display: flex;
    flex-direction: column;
    background-color: $containers-background;

}

</style>
