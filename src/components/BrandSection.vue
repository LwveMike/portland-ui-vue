<template>
  <div
    class="visual no-bb"
    @click="handleClick"
  >
    <div
      class="check-custom-container"
    >
      <input
        class="check-custom icon"
        type="checkbox"
        :checked="checked"
      >
      <label
        for="apple"
        class="check-custom-label"
      >{{ title }}</label>
    </div>
    <p class="quan">
      {{ quan }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BrandSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    quan: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    handleClick() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style lang="scss" scoped>

.visual {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 2rem;
  border-bottom: 1px solid $input-background;
  z-index: 101;
  background-color: white;

  &.no-bb {
    border-bottom: none;
    padding: 0.4rem 2rem;

    &:last-child {
      padding-bottom: 1rem;
    }
  }

  &.no-b {
    border-bottom: none;
  }

  .quan {
    color: #b8bfd3;
    font-weight: 600;
  }

  .check-custom-container {

    .check-custom-label {
      font-weight: 700;
      display: flex;
      align-items: center;
      text-transform: capitalize;
    }

    label {
      color: #343e5c;

    }

    .check-custom {
      opacity: 0;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      margin: 5px;
      cursor: pointer;
      flex: 1;

      & + .check-custom-label::before {
        content: '';
        background: #fff;
        border: 2px solid #ddd;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        padding: 2px;
        margin-right: 10px;
        text-align: center;
        border-radius: 0.4rem;
        width: 1.6rem;
        height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:checked + .check-custom-label::before {
        content: "\f00c";
        font-family: "Font Awesome 5 Pro";
        color: $checkmark-color;
        background-color: $checkmark-background;
        font-size: 0.8rem;
        padding: 0.2rem;
        border: none;

      }

    }

  }

}

</style>
