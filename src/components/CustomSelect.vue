<template>
  <div
    class="my-select"
    tabindex="100"
    @click="toggleOpened"
    @blur="handleBlur"
  >
    <div class="my-select-selected">
      {{ selected }}
    </div>
    <ul
      v-show="opened"
      class="options"
    >
      <template v-for="(option, index) in options">
        <li
          v-if="selected !== option"
          :key="index"
          class="option"
          @click="changeValue(option)"
        >
          {{ option }}
        </li>
      </template>
    </ul>
    <VIcon
      name="chevron-down"
      scale="0.8"
      class="arrow"
      :class="{
        'turned': opened
      }"
    />
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chevron-down';

export default {
  name: 'CustomSelect',
  components: {
    VIcon: Icon,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      opened: false,
      selected: this.options[0],
    };
  },

  methods: {
    toggleOpened() {
      this.opened = !this.opened;
    },
    changeValue(option) {
      this.selected = option;
    },
    handleBlur() {
      this.opened = false;
    },
  },

};
</script>

<style lang="scss" scoped>

.my-select {
    width: 9rem;
    height: 3rem;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: right;
    transition: background-color 600ms ease;
    font-variant: small-caps;
    font-weight: 600;

    &:hover {
      background-color: $select-hover;
      transition: background-color 600ms ease;
    }

   .options {
      position: absolute;
      width: 100%;
      left: 0px;
      top: 100%;
      border-top: none;
      z-index: 110;

      .option {
        padding: 0.6rem 1rem;
        border-bottom: 1px solid rgba(255,255,255,0.3);
        color: white;
        background-color: $select-options-background;

        &::last-child {
          border-bottom: none;
        }

        &:hover {
          color: $select-options-background;
          background-color: white;
        }
      }
    }

    .arrow {
      margin-inline: 0.8rem 0.4rem;
    }

    .turned {
      transform: rotate(180deg);
    }
  }

</style>
