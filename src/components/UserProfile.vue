<template>
  <div class="user-profile">
    <div class="profile-field">
      <img
        src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        class="avatar"
      >
    </div>
    <div class="profile-field">
      <div class="profile-data">
        <p class="profile-name">
          dsfasdf
        </p>
        <p class="profile-role">
          user
        </p>
      </div>
    </div>
    <div class="profile-field">
      <VIcon
        name="plus-square"
        scale="2"
        class="icon"
        @click="show=true"
      />
    </div>

    <AddProductForm :show.sync="show" />
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/plus-square';
import AddProductForm from './AddProductForm.vue';

export default {
  name: 'UserProfile',
  components: {
    VIcon: Icon,
    AddProductForm,
  },
  data() {
    return {
      show: false,
    };
  },

};
</script>

<style lang="scss" scoped>

.user-profile {
  position: fixed;
  left: 3rem;
  bottom: 3rem;
  background-color: #1C1E23;
  width: 24rem;
  height: 8rem;
  z-index: 99999;
  border: 1px solid palegreen;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  .profile-field {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
      display: flex;
      width: 7rem;
      height: 7rem;
      object-fit: contain;
      border-radius: 50%;
    }

    .profile-data {

      color: white;
      font-size: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .icon {
      fill: palegoldenrod;
      cursor: pointer;
    }
  }
}
</style>
