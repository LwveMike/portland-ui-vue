<template>
  <div
    class="section-select-variant"
    @click="handleClick"
  >
    <div
      class="centered select-variant-container"
    >
      <div
        class="actual-input"
        :class="{
          'actual-input-selected': isSelected
        }
        "
      />
      <label for="storage">{{ fromWhere }}</label>
    </div>
    <p class="quantity">
      {{ quan }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionSelectVariant',
  props: {
    fromWhere: {
      type: String,
      required: true,
    },
    quan: {
      type: Number,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },

  },

  computed: {
    isSelected() {
      return this.selected.toLowerCase() === this.fromWhere.toLowerCase();
    },
  },

  methods: {
    handleClick() {
      this.$emit('update:selected', this.fromWhere.toLowerCase());
    },
  },

};
</script>

<style>

</style>
