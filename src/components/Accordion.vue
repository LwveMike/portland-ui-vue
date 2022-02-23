<template>
  <div class="category category-menu">
    <template v-for="(category, index) in options">
      <AccordionSection
        :key="index"
        :category="category"
      />
    </template>
  </div>
</template>

<script>

import AccordionSection from './AccordionSection.vue';

export default {
  name: 'Accordion',
  components: {
    AccordionSection,
  },
  data() {
    return {
      options: [
        { sectionTitle: 'Top Sales', options: ['cell phones', 'cameras', 'computers'] },
        { sectionTitle: 'Brand Focus', options: ['cell phones', 'cameras', 'computers'] },
        { sectionTitle: 'Hi-Tech', options: ['cell phones', 'cameras', 'computers'] },
        { sectionTitle: 'Home', options: ['cell phones', 'cameras', 'computers'] },
        { sectionTitle: 'Sale', options: ['cell phones', 'cameras', 'computers'] },

      ],
    };
  },

};
</script>

<style lang="scss" scoped>

.category {
    border-radius: $default-radius;

}

</style>
