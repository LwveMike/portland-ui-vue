<template>
  <div
    class="shipping-container"
    @click="handleClick"
  >
    <div
      class="radio-custom icon"
      :class="{
        'actual-input-selected': checked
      }"
    />
    <label
      for="free"
      class="radio-custom-label"
    >Free Shipment</label>
  </div>
</template>

<script>
export default {
  name: 'ShippingInput',
  inject: ['changeFreeShipment'],
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('update:checked', !this.checked);
      this.changeFreeShipment(!this.checked);
    },
  },

};
</script>

<style lang="scss" scoped>

.shipping-container {
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    display: flex;
    align-items: center;
  }

  .radio-custom {
    content: '';
    background: #fff;
    border: 2px solid #ddd;
    display: flex;
    vertical-align: middle;
    margin-right: 10px;
    text-align: center;
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .radio-custom-label {
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      margin: 5px;
      cursor: pointer;
    }

  }
}

.actual-input-selected {
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "\f00c";
        font-family: "Font Awesome 5 Pro";
        color: $checkmark-color;
        background-color: $checkmark-background;
        font-size: 0.8rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        display: grid;
        place-items: center center;

      }
}

</style>
