<template>
  <div class="category">
    <div class="section">
      <div class="visual">
        <p class="section-title-sm-caps">
          delivery options
        </p>
      </div>
    </div>
    <div class="section">
      <div class="visual no-b">
        <div class="section-select row">
          <DeliverySection
            :value="shippment[0]"
            :checked.sync="checked"
          />
          <div class="section-delimiter" />
          <DeliverySection
            :value="shippment[1]"
            :checked.sync="checked"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DeliverySection from './DeliverySection.vue';

export default {
  name: 'DeliveryOptions',
  components: {
    DeliverySection,
  },
  data() {
    return {
      shippment: [
        'free', '$ 4.99',
      ],
      checked: '',
    };
  },

};
</script>

<style lang="scss" scoped>

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
}

</style>
