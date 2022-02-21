<template>
  <div class="secondary-menu centered">
    <ul class="secondary-navigation centered">
      <div class="sec-nav-left">
        <template
          v-for="(item, index) in secondaryMenuItems"
        >
          <SecondaryNavigationItem
            :key="index"
            :name="item.name"
            :active="item.active"
          />
        </template>
      </div>

      <div class="sec-nav-right">
        <SecondaryNavigationItem
          :name="'support'"
          :active="false"
        />
      </div>
    </ul>

    <div class="text-search">
      <div class="input-with-icon centered">
        <VIcon
          name="search"
          class="search-icon icon"
        />
        <input
          type="text"
          class="search"
          placeholder="I'm looking for ..."
        >
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import SecondaryNavigationItem from './SecondaryNavigationItem.vue';
import 'vue-awesome/icons/search';

export default {
  name: 'SecondaryNavigation',
  components: {
    SecondaryNavigationItem,
    VIcon: Icon,
  },
  data() {
    return {
      secondaryMenuItems: [
        { name: 'top sales', active: false },
        { name: 'brand focus', active: false },
        { name: 'hi tech', active: true },
        { name: 'best sellers', active: false },
        { name: 'projects', active: false },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>

.secondary-menu {
  display: flex;
  padding: 0 $global-padding;

  .secondary-navigation {
    flex: 9;
    display: flex;
    padding-left: 2rem;

    .sec-nav-left {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

    .sec-nav-right {
      display: flex;
        flex: 1;
        justify-content: right;
        padding-right: 2rem;
    }

  }

  .text-search {
    flex: 3;
    border-right: 1px solid $bars-color;
    border-left: 1px solid $bars-color;
    padding: 1rem;
    display: flex;

    .search {
      border: none;
      text-indent: 0.5rem;
      font-size: 0.85rem;
    }

    .search-icon {
       fill: $filter-title-color;
    }
  }

}

</style>
