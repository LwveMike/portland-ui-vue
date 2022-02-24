<template>
  <div
    class="section special-section"
  >
    <a
      class="visual"
      @click="openSection"
    >
      <p class="section-title">
        {{ category.sectionTitle }}
      </p>
      <VIcon
        name="chevron-down"
        scale="0.8"
        class="section-arrow"
        :class="{
          'turned': isOpened
        }"
      />
    </a>
    <div
      class="section-data section1-data"
      :class="{
        'visible':
          !isOpened,
        'invisible':
          isOpened
      }"
    >
      <template v-for="(option, index) in category.options">
        <a
          :key="index"
          class="item item-title"
        > {{ option }}</a>
      </template>
    </div>
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chevron-down';

export default {
  name: 'AccordionSection',
  components: {
    VIcon: Icon,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
    currentTab: {
      type: String,
      required: true,
    },

  },

  computed: {
    isOpened() {
      return this.currentTab.toLowerCase() === this.category.sectionTitle.toLowerCase();
    },
  },

  methods: {
    openSection() {
      if (this.isOpened === true) {
        this.$emit('update:currentTab', '');
      } else { this.$emit('update:currentTab', this.category.sectionTitle.toLowerCase()); }
    },
  },

};
</script>

<style lang="scss" scoped>

.section {
  display: flex;
  flex-direction: column;
  background-color: $containers-background;

  .visual {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 2rem;
    border-bottom: 1px solid $input-background;
    z-index: 101;
    background-color: white;

    .section-title {
      font-weight: 500;

    }

    .section-title-sm-caps {
      font-variant: small-caps;
      font-weight: 600;
      letter-spacing: 2px;
    }

    .section-arrow {
      transition: transform 200ms ease;
    }
  }

  .section-data {
    display: flex;
    flex-direction: column;
  }
}

.special-section {

  .section-data {
    transition: max-height 500ms ease;
    overflow: hidden;

    .item {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;

      background-color: $input-background;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      align-items: center;

        .item-title {
          font-weight: 600;
          font-size: 1rem;
          font-variant: small-caps;
          color: $sub-items-color;
        }

      }
  }
}

.turned {
  transform: rotate(90deg);
}

.visible {
  max-height: 0;
}

.invisible {
  max-height: 12rem;
}

</style>
