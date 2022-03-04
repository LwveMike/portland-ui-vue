<template>
  <li class="individual">
    <p
      class="centered"
      :class="{
        'active': isActive
      }"
      @click="handleClick"
    >
      {{ page }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'PageNumberIndividual',
  props: {
    page: {
      type: Number,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isActive() {
      return this.active === this.page;
    },

  },

  methods: {
    handleClick() {
      this.$emit('update:active', this.page);
      if (this.$route.query.page !== this.page.toString()) {
        this.$router.push({ query: { page: this.page } });
      }
    },
  },

};
</script>

<style lang="scss">

.individual {

  p {
    display: flex;
    cursor: pointer;
    color: $promoted-color;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.1rem;
    font-weight: 500;
    border: 1px solid transparent;

    &.active {
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
      color: rgba(0,0,0,0.3);
    }

    &:hover {
      border: 1px solid black;
      transition: border 500ms ease;
    }
  }
}

</style>
