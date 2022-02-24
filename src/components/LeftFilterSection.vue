<template>
  <div class="left-filter-section">
    <Accordion />
    <AvailableFilter />
    <ConditionFilter />
    <DeliveryOptions />
  </div>
</template>

<script>
import Accordion from './Accordion.vue';
import AvailableFilter from './AvailableFilter.vue';
import ConditionFilter from './ConditionFilter.vue';
import DeliveryOptions from './DeliveryOptions.vue';

export default {
  name: 'LeftFilterSection',
  components: {
    Accordion,
    AvailableFilter,
    ConditionFilter,
    DeliveryOptions,
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
