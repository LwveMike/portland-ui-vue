<template>
  <EasySlider
    height="40rem"
  >
    <EasySliderItem
      v-for="(item, index) in sliderItems"
      :key="index"
    >
      <SliderItem
        :title="item.title"
        :body="item.body"
        :image="item.image"
        :alt="item.alt"
      />
    </EasySliderItem>

    <div slot="indicator">
      asdfsd
    </div>
  </EasySlider>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
import MySliderItem from './SliderItem.vue';

const iphone = require('../assets/images/slider/iphone6.webp');
const googlePixel = require('../assets/images/slider/google_pixel6.webp');
const onePlus = require('../assets/images/slider/oneplus_10_pro.webp');
const samsungFold = require('../assets/images/slider/samsung_fold.webp');

export default {
  name: 'Slider',
  components: {
    EasySlider: Slider,
    EasySliderItem: SliderItem,
    SliderItem: MySliderItem,
  },

  data() {
    return {
      sliderItems: [
        {
          title: 'iPhone 6 32Gb Black', alt: 'Iphone 6', body: 'At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis deserunt ratione minus vitae nobis dolore, saepe atque iure ex.', image: iphone,
        },
        {
          title: 'Google Pixel 6 256Gb White', alt: 'google_pixel', body: 'At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis deserunt ratione minus vitae nobis dolore, saepe atque iure ex.', image: googlePixel,
        },
        {
          title: 'Samsung Galaxy Fold 128Gb Black', alt: 'samsung_fold', body: 'At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis deserunt ratione minus vitae nobis dolore, saepe atque iure ex.', image: samsungFold,
        },
        {
          title: 'One Plus 10 Pro', alt: 'one_plus', body: 'At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis deserunt ratione minus vitae nobis dolore, saepe atque iure ex.', image: onePlus,
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>

</style>
