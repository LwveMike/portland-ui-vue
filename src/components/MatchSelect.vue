<template>
  <div class="filter-area">
    <label
      for="match"
      class="match-title"
    >sort by :</label>
    <CustomSelect
      :options="options"
      who="sorting"
    />
  </div>
</template>

<script>

import CustomSelect from './CustomSelect.vue';

export default {
  name: 'MatchSelect',
  components: {
    CustomSelect,
  },
  data() {
    return {
      options: [
        'none', 'descending', 'ascending',
      ],
    };
  },
  methods: {
    toggleOpened() {
      this.opened = !this.opened;
    },
  },

};
</script>

<style lang="scss" scoped>

.filter-area {
  border-right: 1px solid $delimiter-color;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::last-child {
    border-right: none;
  }

  .match-title {
    margin-right: 1rem;
    font-variant: small-caps;
    font-weight: 600;
    color: $filter-title-color;

  }
}

</style>
