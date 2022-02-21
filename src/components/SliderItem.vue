<template>
  <div class="carousel-item">
    <div class="info-text">
      <h2 class="info-text-title">
        {{ title }}
      </h2>
      <p class="info-text-body">
        {{ body }}
      </p>
      <div class="btn-group">
        <button class="buy-btn .centered">
          buy now
        </button>
      </div>
    </div>
    <div class="info-img-container">
      <img
        :src="image"
        :alt="alt"
        class="info-img"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>

.carousel-item {
    display: flex;
    padding: 1rem $global-padding;
    background-color: $carousel-background;
    height: 100%;
    overflow: hidden;
    position: relative;

    .info-text {
      flex: 0.6;
      padding-left: 2rem;
      margin-left: 4rem;
      display: flex;
      justify-content: center;
      flex-direction: column;

      * {
        margin: 1.4rem 0;
         color: white;
      }

      .info-text-title {
        font-size: 2.6rem;
        font-weight: 900;
      }

      .info-text-body {
        font-size: 1rem;
        width: 30rem;
      }

      .buy-btn {
        font-size: 1rem;
        font-variant: small-caps;
        font-weight: 500;
        color: white;
        background-color: $buy-btn-background;
        border-radius: 50px;
        padding: 0.6rem 3.2rem;
      }
  }

  .info-img-container {
    flex: 1;
    display: flex;
    margin-right: 4rem;
    justify-content: space-around;
    align-items: center;

    .info-img {
      margin: 6rem 0 0 4rem;
      height: 160%;

      &[alt='google_pixel'], &[alt='one_plus']  {
          height: 100%;
          margin-top: 0;
      }

      &[alt='samsung_fold']  {
          height: 70%;
          margin-top: 0;
      }
    }
  }
}

</style>
