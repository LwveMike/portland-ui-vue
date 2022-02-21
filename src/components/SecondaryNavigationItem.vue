<template>
  <li class="sec-items-container">
    <RouterLink :to="getPath">
      <p
        class="sec-item"
        :class="{
          'active': active
        }"
      >
        {{ name }}
      </p>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'SecondaryNavigationItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    getPath() {
      return `/${this.name.replace(' ', '-')}`;
    },
  },

};
</script>

<style lang="scss" scoped>

.sec-item {
  font-size: 1rem;
  font-variant: small-caps;
  color: $unselected-items;
  font-weight: 500;

  &.active {
    color: $nav-elements-color;
  }

}

</style>
