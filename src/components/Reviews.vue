<template>
  <div class="reviews">
    <div class="reviews-container">
      <p class="reviews-title">
        What Our Customers Have To to Say
      </p>
      <p class="reviews-subtitle">
        Couple of Words About This Stories Section
      </p>
      <div class="rev-container">
        <template v-for="(human, index) in people">
          <Review
            :key="index"
            :human="human"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import Review from './Review.vue';

import celiaFieldsWebp from '../assets/images/people/celia-fields.webp';
import alexanderLeeWebp from '../assets/images/people/alexander-lee.webp';
import lenoraSandovalWebp from '../assets/images/people/lenora-sandoval.webp';

export default {
  name: 'Reviews',
  components: {
    Review,
  },

  data() {
    return {
      people: [
        {
          name: 'Celia Fields', url: celiaFieldsWebp, profession: 'UX Expert', review: 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters. ',
        },
        {
          name: 'Alexander Lee', url: alexanderLeeWebp, profession: 'Founder', review: 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.',
        },
        {
          name: 'Lenora Sandoval', url: lenoraSandovalWebp, profession: 'Product Manager', review: "This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that before!' she said. ",
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>

.reviews {
    background-color: $containers-background;
    display: flex;
    flex-direction: column;

    .reviews-container {
      padding: 5rem;

      .reviews-title {
        text-align: center;
        font-weight: 900;
        font-size: 2rem;
      }

      .reviews-subtitle {
        font-size: 1rem;
        color: $reviews-color;
        font-weight: 500;
        text-align: center;
        font-style: italic;
        padding: 0.6rem 0;
      }

      .rev-container {
        display: flex;
        justify-content: center;
        margin: 2rem auto;
      }
    }

}

</style>
