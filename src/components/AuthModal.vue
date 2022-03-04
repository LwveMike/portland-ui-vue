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
              login
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
            <div class="field">
              <label for="username">Username :</label>
              <input
                v-model="logi.username"
                type="text"
                class="input-special"
              >
            </div>

            <div class="field">
              <label for="password">Password :</label>
              <input
                v-model="logi.password"
                type="password"
                class="input-special"
              >
            </div>

            <div class="btn-group">
              <button
                class="submit"
                @click="handleLogin"
              >
                Submit
              </button>

              <button
                class="cancel"
                @click="closeModal"
              >
                Cancel
              </button>

              <button
                class="btn-helper"
                @click="handleSlideChange"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div
          v-else
          class="auth-section"
        >
          <div class="auth-modal-header">
            <p class="auth-modal-title">
              register
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
            <div class="field">
              <label for="username">Username :</label>
              <input
                v-model="reg.username"
                type="text"
                class="input-special"
              >
            </div>

            <div class="field">
              <label for="password">Password :</label>
              <input
                v-model="reg.password"
                type="password"
                class="input-special"
              >
            </div>

            <div class="btn-group">
              <button
                class="submit"
                @click="handleRegister"
              >
                Submit
              </button>

              <button
                class="cancel"
                @click="closeModal"
              >
                Cancel
              </button>

              <button
                class="btn-helper"
                @click="handleSlideChange"
              >
                Prev
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/times-circle';

export default {
  name: 'AuthModal',
  components: {
    VIcon: Icon,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      which: true,
      reg: {
        username: '',
        password: '',
      },

      logi: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },

    handleSlideChange() {
      this.which = !this.which;
    },

    async handleRegister() {
      await this.register({ username: this.reg.username, password: this.reg.password });
      this.$emit('update:show', false);
    },

    async handleLogin() {
      await this.login({ username: this.logi.username, password: this.logi.password });
      this.$emit('update:show', false);
    },

    ...mapActions(['login', 'register']),
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
  z-index: 99999;
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
    width: 30%;
    padding-bottom: 2rem;

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

        .field {
          padding-block: 1rem;
          display: flex;
          flex-direction: column;
          width: 80%;

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
