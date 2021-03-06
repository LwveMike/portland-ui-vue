<template>
  <div class="home">
    <Navigation />
    <Slider />
    <HomeBody />
    <Reviews />
    <Footer />
    <template v-if="getIsLogged">
      <UserProfile />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {
  apiFetchProductsWithFilters, apiFetchProducts, organize, socket,
} from '../api';
import Navigation from '../components/Navigation.vue';
import Slider from '../components/Slider.vue';
import HomeBody from '../components/HomeBody.vue';
import Reviews from '../components/Reviews.vue';
import Footer from '../components/Footer.vue';
import UserProfile from '../components/UserProfile.vue';
import SocketEvents from '../socketEvents';

export default {
  name: 'Home',
  components: {
    Navigation,
    Slider,
    HomeBody,
    Reviews,
    Footer,
    UserProfile,
  },

  data() {
    return {
      products: [],
      filters: {
        sorting: 'none',
        keywords: '',
        minprice: 0,
        maxprice: 9999,
        freeshipment: false,
        type: 'all',
      },
      available: new Map(),
      brands: new Map(),
      conditions: new Map(),
      pages: [],
      hots: [],
    };
  },

  computed: {
    getProducts() {
      return this.products;
    },
    getMinPrice() {
      return this.filters.minprice;
    },
    getMaxPrice() {
      return this.filters.maxprice;
    },

    getAvailable() {
      return this.available;
    },

    getBrands() {
      return this.brands;
    },

    getConditions() {
      return this.conditions;
    },

    getPages() {
      return this.pages;
    },

    getHots() {
      return this.hots;
    },

    ...mapGetters(['getIsLogged']),

  },

  watch: {
    $route() {
      this.reload();
    },
    'filters.sorting': function () {
      this.reload();
    },

    'filters.type': function () {
      this.reload();
    },

    'filters.keywords': function () {
      setTimeout(() => {
        this.reload();
      }, 200);
    },

    'filters.minprice': function () {
      if (this.filters.minprice < this.filters.maxprice
      && this.filters.minprice > 0 && this.filters.minprice < 9999) {
        this.reload();
      }
    },

    'filters.maxprice': function () {
      if (this.filters.maxprice > this.filters.minprice
      && this.filters.maxprice > 0 && this.filters.maxprice < 9999) {
        this.reload();
      }
    },

    'filters.freeshipment': function () {
      this.reload();
    },
  },

  beforeMount() {
    this.reload();
    this.generateAvailable();
    this.generateBrands();
    this.generateConditions();
    this.generatePages();
    this.generateHots();
    this.assignAuthData();

    socket.on(SocketEvents.GET_PRODUCT, (product) => {
      this.products.unshift(product);
    });

    socket.on(SocketEvents.PRODUCT_DELETED, (productId) => {
      const index = this.products.findIndex((product) => product.id === productId);
      this.products.splice(index, 1);
    });

    socket.on(SocketEvents.PRODUCT_UPDATED, (product) => {
      const index = this.products.findIndex((p) => p.id === product.id);
      const oldArr = this.products;
      oldArr[index] = product;
      this.products = [...oldArr];
    });
  },

  methods: {
    async fetchProducts(filters) {
      const products = await apiFetchProductsWithFilters(filters);
      return products;
    },

    async generateAvailable() {
      const products = await apiFetchProducts();
      const organized = organize(products, 'storage');

      this.assignAvailable(organized);
    },

    async generateBrands() {
      const products = await apiFetchProducts();
      const organized = organize(products, 'brand');

      this.assignBrands(organized);
    },

    async generateConditions() {
      const products = await apiFetchProducts();
      const organized = organize(products, 'condition');

      this.assignConditions(organized);
    },

    async generatePages() {
      const products = await apiFetchProducts();
      const pageNumbers = Math.ceil(products.length / 10);
      const pages = [];
      for (let i = 1; i <= pageNumbers; i += 1) {
        pages.push(i);
      }

      this.assignPages(pages);
    },

    async generateHots() {
      const products = await apiFetchProducts();
      const hotProducts = products.filter((product) => product.hot === true);

      this.assignHots(hotProducts);
    },

    paginate(numberOfItems = 9, products = []) {
      let { page } = this.$route.query;

      if (page === undefined) { page = 0; } else { page -= 1; }

      const start = page * numberOfItems;
      const end = start + numberOfItems;
      const someProducts = products.slice(start, end);

      return someProducts;
    },

    async reload() {
      const products = await this.fetchProducts(this.filters);
      const someProducts = this.paginate(9, products);
      this.assignProducts(someProducts);
    },

    assignProducts(products) {
      this.products = products;
    },

    assignAvailable(available) {
      this.available = available;
    },

    assignBrands(brands) {
      this.brands = brands;
    },

    assignConditions(conditions) {
      this.conditions = conditions;
    },

    assignPages(pages) {
      this.pages = pages;
    },

    assignHots(hots) {
      this.hots = hots;
    },

    changeSortingType(value) {
      this.filters.sorting = value;
    },

    changeKeywords(value) {
      this.filters.keywords = value;
    },

    changeMinPrice(value) {
      this.filters.minprice = value;
    },

    changeMaxPrice(value) {
      this.filters.maxprice = value;
    },

    changeFreeShipment(value) {
      this.filters.freeshipment = value;
    },

    changeType(value) {
      this.filters.type = value;
    },

    ...mapActions(['assignAuthData']),
  },

  provide() {
    return {
      getProducts: () => this.getProducts,
      getMinPrice: () => this.getMinPrice,
      getMaxPrice: () => this.getMaxPrice,
      changeSorting: this.changeSortingType,
      changeKeywords: this.changeKeywords,
      changeMinPrice: this.changeMinPrice,
      changeMaxPrice: this.changeMaxPrice,
      changeFreeShipment: this.changeFreeShipment,
      changeType: this.changeType,
      getAvailable: () => this.getAvailable,
      getBrands: () => this.getBrands,
      getConditions: () => this.getConditions,
      getPages: () => this.getPages,
      getHots: () => this.getHots,
    };
  },

};
</script>

<style lang="scss" scoped>

.home {
  display: relative;
}
</style>
