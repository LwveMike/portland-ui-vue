<template>
  <ProductSimple
    v-if="product.type === 'simple'"
    :product="product"
  >
    <div
      v-if="product.ownerId === getUserId"
      class="btn-group"
    >
      <div
        class="delete"
        @click="handleDelete"
      >
        <VIcon
          name="times-circle"
          scale="1.5"
        />
      </div>

      <div
        class="edit"
        @click="toggleModal"
      >
        <VIcon
          name="edit"
          scale="1.5"
        />
      </div>

      <UpdateFormModal
        :id="product.id"
        :show.sync="show"
      />
    </div>
  </ProductSimple>
  <ProductPromoted
    v-else-if="product.type === 'promoted'"
    :product="product"
  >
    <div
      v-if="product.ownerId === getUserId"
      class="btn-group space"
    >
      <div
        class="delete"
        @click="handleDelete"
      >
        <VIcon
          name="times-circle"
          scale="1.5"
        />
      </div>

      <div
        class="edit"
        @click="toggleModal"
      >
        <VIcon
          name="edit"
          scale="1.5"
        />
      </div>

      <UpdateFormModal
        :id="product.id"
        :show.sync="show"
      />
    </div>
  </ProductPromoted>
  <ProductComplicated
    v-else
    :product="product"
  >
    <div
      v-if="product.ownerId === getUserId"
      class="btn-group space"
    >
      <div
        class="delete"
        @click="handleDelete"
      >
        <VIcon
          name="times-circle"
          scale="1.5"
        />
      </div>

      <div
        class="edit"
        @click="toggleModal"
      >
        <VIcon
          name="edit"
          scale="1.5"
        />
      </div>

      <UpdateFormModal
        :id="product.id"
        :show.sync="show"
      />
    </div>
  </ProductComplicated>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import { mapGetters } from 'vuex';
import ProductSimple from './ProductSimple.vue';
import ProductPromoted from './ProductPromoted.vue';
import ProductComplicated from './ProductComplicated.vue';
import UpdateFormModal from './UpdateFormModal.vue';
import { apiDeleteProduct } from '../api';

import 'vue-awesome/icons/regular/times-circle';
import 'vue-awesome/icons/edit';

export default {
  name: 'Product',
  components: {
    ProductSimple,
    ProductPromoted,
    ProductComplicated,
    VIcon: Icon,
    UpdateFormModal,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    ...mapGetters(['getUserId']),
  },

  methods: {
    toggleModal() {
      this.show = !this.show;
    },

    async handleDelete() {
      await apiDeleteProduct({ id: this.product.id });
    },
  },

};
</script>

<style lang="scss" scoped>
  .btn-group {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;

    .delete {
      fill: rgba(255, 0, 0, 0.5);
      cursor: pointer;
      transition: fill 300ms linear;

      &:hover {
        fill: rgba(255, 0, 0, 1);
        transition: fill 300ms linear;

      }
    }

    .edit {
      fill: rgba(23, 93, 23, 0.5);
      cursor: pointer;
      transition: fill 300ms linear;

      &:hover {
        fill: rgba(23, 93, 23, 1);
        transition: fill 300ms linear;

      }

    }
  }

  .space {
    top: 0.5rem;
    width: 60%;
    left: 20%;
  }

</style>
