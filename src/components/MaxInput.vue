<template>
  <div>
    <input
      v-model.number="value"
      class="input-class"
    >
  </div>
</template>

<script>

export default {
  name: 'MaxInput',
  inject: ['getMaxPrice', 'changeMaxPrice'],

  data() {
    return {
      value: 0,
    };
  },

  computed: {
    getComputedMaxPrice() {
      return this.getMaxPrice();
    },
  },

  watch: {
    value() {
      this.changeMaxPrice(this.value);
    },
  },

  beforeMount() {
    this.value = this.getComputedMaxPrice;
  },

};
</script>

<style lang="scss" scoped>

.input-class {
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  background-color: $input-background;
  padding: 0.4rem;
  border: 1px solid rgba(0,0,0,0.1);
  text-indent: 0.3rem;
}

</style>
