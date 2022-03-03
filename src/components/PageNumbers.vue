<template>
  <div class="pagination">
    <div
      class="left-arrow"
      @click="changeActivePage('down')"
    >
      <VIcon
        scale="1.5"
        name="angle-left"
      />
    </div>
    <ul
      class="
      page-numbers"
    >
      <template v-for="(page, index) in getComputedPages">
        <PageNumberIndividual
          :key="index"
          :page="page"
          :active.sync="active"
        />
      </template>
    </ul>
    <div
      class="right-arrow"
      @click="changeActivePage('up')"
    >
      <VIcon
        scale="1.2"
        name="angle-right"
      />
    </div>
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/angle-left';
import 'vue-awesome/icons/angle-right';
import PageNumberIndividual from './PageNumberIndividual.vue';

export default {
  name: 'Pagination',
  inject: ['getPages'],
  components: {
    VIcon: Icon,
    PageNumberIndividual,
  },
  data() {
    return {
      active: 1,
    };
  },

  computed: {
    getComputedPages() {
      return this.getPages();
    },
  },

  methods: {
    changeActivePage(direction) {
      if (direction === 'down' && this.active > 1) {
        this.active -= 1;
        this.$router.push({ query: { page: this.active } });
      } else if (direction === 'up' && this.active < this.getComputedPages.length) {
        this.active += 1;
        this.$router.push({ query: { page: this.active } });
      }
    },
  },

};
</script>

<style lang='scss' scoped>

.pagination {
  background-color: $containers-background;
  display: flex;
  justify-content: space-between;

  .left-arrow, .right-arrow {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 1.2rem 0;
    font-size: 1.5rem;
  }

  & > * {
    border-right: 1px solid $filter-title-color;

    &:last-child {
      border-right: none;
    }
  }

  .page-numbers {
    padding: 1rem 20rem;
    display: flex;
    align-items: center;
    flex: 6;
    justify-content: space-around;
  }
}

</style>
