<template>
  <div>
    <input
      v-model="value"
      :type="type"
      :min="min"
      :max="max"
      class="input-class"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>

export default {
  name: 'CustomInput',
  props: {
    type: {
      type: String,
      required: true,
    },
    min: {
      type: String,
      required: false,
      default: '1',
    },
    max: {
      type: String,
      required: false,
      default: '1000',
    },
    valueType: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      value: undefined,
    };
  },

  beforeMount() {
    if (this.valueType === '') this.value = '';
    else if (this.valueType === 'min') this.value = this.min;
    else this.value = this.max;
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
