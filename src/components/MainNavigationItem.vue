<template>
  <li class="item-container">
    <RouterLink :to="getPath">
      <p class="item">
        {{ name }}
      </p>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'MainNavigatinItem',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    getPath() {
      if (this.name === 'Home') { return '/'; }
      return `/${this.name.split(' ')[0].toLowerCase()}`;
    },
  },

};
</script>

<style lang="scss" scoped>
.item {
  font-weight: 600;
  font-size: 1rem;
  color: $nav-elements-color;
}
</style>
