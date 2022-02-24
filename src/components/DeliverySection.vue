<template>
  <div
    class="section-select-variant pp"
    @click="handleClick"
  >
    <div class="centered select-variant-container">
      <div
        class="select-variant centered"
        :class="{
          'actual-input-selected': isChecked
        }"
      />
      <p class="delivery-title">
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliverySection',
  props: {
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: String,
      required: true,
    },
  },

  computed: {
    isChecked() {
      return this.checked.toLowerCase() === this.value.toLowerCase();
    },
  },

  methods: {
    handleClick() {
      this.$emit('update:checked', this.value.toLowerCase());
    },
  },

};
</script>

<style lang="scss" scoped>

.section-select-variant {
  display: flex;
  padding: 0.5rem 0;
  justify-content: space-between;

  .select-variant-container {
    display: flex;

    .select-variant {
    margin-right: 1rem;
    -webkit-appearance:none;
    width:20px;
    height:20px;
    border:1px solid #e4e8f0;
    border-radius:50%;
    outline:none;
    box-shadow:0 0 4px 0px white inset;
    cursor: pointer;

    .actual-input-selected {
          display: grid;
          place-items: center center;

          &::before {
            content: '';
            width: 10px;
            height: 10px;
            background-color: #00deea;
            border-radius: 50%;
          }
        }

    &.row {
      padding: 0.5rem 0;
    }

  }

  .delivery-title {
      text-transform: uppercase;
      font-weight: 600;
    }
  }
}

</style>
