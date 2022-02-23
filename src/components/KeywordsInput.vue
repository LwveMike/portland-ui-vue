<template>
  <div class="keyword-container">
    <p class="keywords-title">
      keywords
    </p>
    <CustomInput
      type="text"
      placeholder="Tablet"
    />
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  name: 'KeywordsInput',
  components: {
    CustomInput,
  },

};
</script>

<style lang="scss">

  .keyword-container {
  display: flex;
  align-items: center;
  margin-right: 2rem;

  .keywords-title {
    margin-right: 1rem;
    font-variant: small-caps;
    font-weight: 600;
    color: $filter-title-color;

  }

  .input-class {
    width: 10rem;
  }

}

</style>
