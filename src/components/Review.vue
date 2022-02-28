<template>
  <div class="rev">
    <div class="top-part">
      <img
        :src="human.url"
        class="avatar"
      >
      <div class="details">
        <p class="name">
          {{ human.name }}
        </p>
        <p class="position">
          {{ human.profession }}
        </p>
      </div>
    </div>
    <p class="rev-content">
      {{ human.review }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Review',
  props: {
    human: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style lang='scss' scoped>

.rev {
   width: 25%;
  padding: 4rem;

  .top-part {
    display: flex;
    margin-bottom: 1rem;

    .avatar {
      border-radius: 50%;
      margin-right: 1rem;
      width: 3rem;
      height: 3rem;
    }

    .rev-content {
      font-family: Arial;
      font-size: 1.2rem;
    }

    .name {
      font-size: 1rem;
      color: $nav-elements-color;
      font-weight: 600;
    }

    .position {
      color: $filter-title-color;
      font-style: italic;
      font-size: 0.8rem;
    }
  }
}

</style>
