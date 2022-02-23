<template>
  <div class="left-filter-section">
    <Accordion />
  </div>
</template>

<script>
import Accordion from './Accordion.vue';

export default {
  name: 'LeftFilterSection',
  components: {
    Accordion,
  },

};
</script>

<style lang="scss" scoped>

.left-filter-section {
  flex: 1;
  display: flex;
  flex-direction: column;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

}

</style>
