<template>
  <div>
    <input
      v-model="value"
      type="text"
      class="input-class"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>

export default {
  name: 'CustomInput',
  inject: ['changeKeywords'],
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      value: '',
    };
  },

  watch: {
    value() {
      this.changeKeywords(this.value);
    },
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
