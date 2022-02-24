<template>
  <div class="category">
    <div class="section">
      <div class="visual">
        <p class="section-title-sm-caps">
          condition
        </p>
        <a
          href="#"
          class="all"
        >all</a>
      </div>
    </div>

    <ConditionContainer />
  </div>
</template>

<script>

import ConditionContainer from './ConditionContainer.vue';

export default {
  name: 'ConditionFilter',
  components: {
    ConditionContainer,
  },

};
</script>

<style lang='scss' scoped>

.category {
  margin-top: 2rem;
  border-radius: $default-radius;
  overflow: hidden;
  border: 1px solid $input-background;

  .section-title-sm-caps {
    font-variant: small-caps;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .all {
    border-bottom: 1px solid gray;
    font-weight: 700;
    font-variant: small-caps;
    color: blue;
  }
}

</style>
