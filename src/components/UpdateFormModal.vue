<template>
  <div
    v-if="show"
    class="auth-overlay"
  >
    <transition>
      <div class="auth-modal">
        <div
          v-if="which"
          class="auth-section"
        >
          <div class="auth-modal-header">
            <p class="auth-modal-title">
              Update a product
            </p>

            <div
              class="close"
              @click="closeModal"
            >
              <VIcon
                name="times-circle"
                scale="1.5"
              />
            </div>
          </div>

          <div
            class="auth-modal-body"
          >
            <div class="mini-flex">
              <div class="field">
                <label for="username">Name :</label>
                <input
                  v-model="properties.name"
                  type="text"
                  class="input-special"
                >
              </div>

              <div class="field">
                <label for="username">Description :</label>
                <input
                  v-model="properties.description"
                  type="text"
                  class="input-special"
                >
              </div>
            </div>

            <div class="mini-flex">
              <div class="field">
                <label for="username">Url :</label>
                <input
                  v-model="properties.url"
                  type="text"
                  class="input-special"
                >
              </div>

              <div class="mini-flex">
                <div class="field">
                  <label for="username">Color :</label>
                  <input
                    v-model="properties.color"
                    type="text"
                    class="input-special"
                  >
                </div>
              </div>

              <div class="field">
                <label for="username">Price :</label>
                <input
                  v-model.number="properties.price"
                  type="number"
                  class="input-special"
                >
              </div>
            </div>
            <div class="mini-flex">
              <div class="field">
                <label for="username">Brand :</label>
                <input
                  v-model="properties.brand"
                  type="text"
                  class="input-special"
                >
              </div>

              <div class="field">
                <label for="username">Category :</label>
                <input
                  v-model="properties.category"
                  type="text"
                  class="input-special"
                >
              </div>
            </div>
            <div class="mini-flex">
              <div class="field">
                <label for="username">Shipment :</label>
                <input
                  v-model.number="properties.shipment"
                  type="number"
                  class="input-special"
                >
              </div>

              <div class="field">
                <label for="username">Condition :</label>
                <input
                  v-model="properties.condition"
                  type="text"
                  class="input-special"
                >
              </div>
            </div>

            <div class="mini-flex">
              <div class="field">
                <label for="username">Discount :</label>
                <input
                  v-model.number="properties.discount"
                  type="text"
                  class="input-special"
                >
              </div>

              <div class="field">
                <label for="username">Hot :</label>
                <input
                  v-model="properties.hot"
                  type="text"
                  class="input-special"
                >
              </div>
            </div>

            <div class="mini-flex">
              <div class="field">
                <label for="username">Storage :</label>
                <input
                  v-model="properties.storage"
                  type="text"
                  class="input-special"
                >
              </div>
            </div>

            <div class="btn-group">
              <button
                class="submit"
                @click="updateTheProduct"
              >
                Update
              </button>

              <button
                class="cancel"
                @click="closeModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/times-circle';
import { apiUpdateProduct } from '../api';

const fromStringToBoolean = (str) => (str === 'true');

export default {
  name: 'AddProductForm',
  components: {
    VIcon: Icon,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      which: true,
      properties: {
        name: '',
        description: '',
        url: '',
        color: '',
        price: -1,
        brand: '',
        category: '',
        shipment: -1,
        condition: '',
        discount: -1,
        hot: false,
        storage: '',
      },

    };
  },

  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },

    verify() {
      const newProducts = {};

      Object.entries(this.properties).forEach(([key, value]) => {
        if (typeof value === 'string' && value !== '') {
          newProducts[key] = value;
        } else if (typeof value === 'number' && value !== -1) {
          newProducts[key] = value;
        } else if (typeof value === 'boolean' && value !== false) {
          newProducts[key] = fromStringToBoolean(value);
        }
      });

      return newProducts;
    },

    async updateTheProduct() {
      const data = await apiUpdateProduct({ product: this.verify(), id: this.id });

      if (data.fullfilled) {
        this.$emit('update:show', false);
      } else {
        console.log('not ok', data);
      }
    },

  },

};
</script>

<style lang="scss" scoped>

.auth-overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 999999;
  background-color: rgba(255,255,255,0.8);
  animation: fade 200ms linear;

  .auth-modal {
    position: absolute;
    background: white;
    border-radius: 6px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: slide 300ms linear;
    width: 70rem;
    // padding-bottom: 2rem;

    box-shadow: 0px 4px 20px 0px rgba(0,0,0,0.3);

    .auth-section {

      .auth-modal-header {

        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-bottom: 1px solid rgba(0,0,0,0.3);

        .auth-modal-title {
          color: $modal-color;
          font-size: 1.5rem;
          font-variant: small-caps;
        }

        .close {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          fill: rgba(255,0,0,0.7);
          cursor: pointer;
        }
      }

      .auth-modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;

        .mini-flex {
          display: flex;
          align-items: center;

          .field {
          flex: 1;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 0.6rem;
            font-size: 1.2rem;
            font-weight: 300;
          }

          .input-special {
            outline: none;
            border-radius: 4px;
            padding-block: 0.5rem;
            border: 2px solid rgba(93, 154, 202, 0.4);

            font-size: 1.2rem;
            text-indent: 1rem;

            transition: border 200ms linear;

            &:hover {
              border: 2px solid rgba(93, 154, 202, 0.8);
              transition: border 200ms linear;
            }

            &:focus {
              outline: 3px solid rgba(93, 154, 202, 1);
            }
          }

        }

        }

        .btn-group {
          padding: 2rem;
          width: 80%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          button {
            border: none;
            outline: none;

            width: 30%;
            padding: 1rem;
            border-radius: 6px;
            color: white;
            font-weight: 500;
            font-size: 1.2rem;
            transition: background-color 300ms linear;

            &.submit {
              background-color: rgba(0,128,0, 0.6);

              &:hover {
                background-color: rgba(0,128,0, 1);
              }
            }

            &.cancel {
              background-color: rgba(128,0,0,0.6);

              &:hover {
                background-color: rgba(128,0,0,1);
              }
            }

            &.btn-helper {
              background-color: rgba(0,0,128,0.6);

              &:hover {
                background-color: rgba(0,0,128,1);
              }
            }

            &:hover {
              transition: background-color 300ms linear;
            }
          }
        }

      }

    }

  }

}

@keyframes slide {
  0% {
    top: -100%;
  }

  100% {
    top: 50%;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
