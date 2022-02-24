<template>
  <div class="category">
    <div class="section">
      <div class="visual">
        <p class="section-title-sm-caps">
          available
        </p>
      </div>
    </div>

    <AvailableFilterSection />

    <div class="section">
      <div class="visual">
        <p class="section-title-sm-caps">
          brands
        </p>
        <a
          href="#"
          class="all"
        >all</a>
      </div>
    </div>

    <BrandContainer />
  </div>
</template>

<script>

import AvailableFilterSection from './AvailableFilterSection.vue';
import BrandContainer from './BrandContainer.vue';

export default {
  name: 'AvailableFilter',
  components: {
    AvailableFilterSection,
    BrandContainer,
  },

};
</script>

<style lang="scss" scoped>

.category {
  margin-top: 2rem;
  border-radius: $default-radius;
  overflow: hidden;
  border: 1px solid $input-background;

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

      .all {
        border-bottom: 1px solid gray;
        font-weight: 700;
        font-variant: small-caps;
        color: blue;
    }

      .section-title-sm-caps {
        font-variant: small-caps;
        font-weight: 600;
        letter-spacing: 2px;
    }

    }
  }
}

</style>
