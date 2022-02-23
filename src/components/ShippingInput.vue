<template>
  <div class="shipping-container">
    <input
      v-model="checked"
      class="radio-custom icon"
      name="radio-group"
      type="checkbox"
    >
    <label
      for="free"
      class="radio-custom-label"
    >Free Shipping</label>
  </div>
</template>

<script>
export default {
  name: 'ShippingInput',
  data() {
    return {
      checked: false,
    };
  },

};
</script>

<style lang="scss" scoped>

.shipping-container {
  display: flex;
  align-items: center;

  label {
    display: flex;
    align-items: center;
  }

  .radio-custom {
    opacity: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer;
    flex: 1;

    &:checked {
      content: "\f00c";
      font-family: "Font Awesome 5 Pro";
      color: $checkmark-color;
      background-color: $checkmark-background;
      font-size: 0.8rem;
      border: none;

    }

    .radio-custom-label {
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      margin: 5px;
      cursor: pointer;
    }

    & + .radio-custom-label:before {
      content: '';
      background: #fff;
      border: 2px solid #ddd;
      display: flex;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      padding: 2px;
      margin-right: 10px;
      text-align: center;
      border-radius: 50%;
      width: 1.6rem;
      height: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:checked  + .radio-custom-label:before {
      content: "\f00c";
      font-family: "Font Awesome 5 Pro";
      color: $checkmark-color;
      background-color: $checkmark-background;
      font-size: 0.8rem;
      border: none;
    }

  }
}

</style>
