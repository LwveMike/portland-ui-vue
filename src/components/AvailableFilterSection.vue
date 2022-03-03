<template>
  <div class="section">
    <div class="visual">
      <div class="section-select">
        <template v-for="([key, value], index) in getComputedAvailable">
          <SectionSelectVariant
            :key="index"
            :from-where="key"
            :quan="value"
            :selected.sync="selected"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import SectionSelectVariant from './SectionSelectVariant.vue';

export default {
  name: 'AvailableFilterSection',
  inject: ['getAvailable'],
  components: {
    SectionSelectVariant,
  },

  data() {
    return {
      selected: '',
    };
  },

  computed: {
    getComputedAvailable() {
      return this.getAvailable();
    },
  },

};
</script>

<style lang="scss">

.section {
  display: flex;
  flex-direction: column;
  background-color: $containers-background;

  .visual {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 2rem;
    border-bottom: 1px solid $input-background;

    &.no-bb {
      border-bottom: none;
      padding: 0.2rem 2rem;

      &:last-child {
        padding-bottom: 1rem;

      }
    }

    &.no-b {
      border-bottom: none;
      padding: 0 2rem;
    }

    .quan {
      color: #b8bfd3;
      font-weight: 600;
    }

    .section-select {
      display: flex;
      flex-direction: column;
      flex: 1;

      &.row {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
      }

      label {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
      }

      .section-select-variant {
        display: flex;
        padding: 0.5rem 0;
        justify-content: space-between;

        .select-variant {
          -webkit-appearance:none;
          width:20px;
          height:20px;

        }

        .actual-input {
          width: 20px;
          height: 20px;
          border:1px solid #e4e8f0;
          border-radius:50%;
          outline:none;
          box-shadow:0 0 4px 0px white inset;
          cursor: pointer;
          margin-right: 1rem;

        }

        .actual-input-selected {
          display: grid;
          place-items: center center;

          &::before {
            content: '';
            width: 10px;
            height: 10px;
            background-color: #00deea;
            border-radius: 50%;
          }
        }

        label {
          font-weight: 500;
          cursor: pointer;
        }

        .quantity {
          font-weight: 500;
          color: $filter-title-color;
          font-variant: small-caps;
          font-size: 0.8rem;
        }

        &.row {
          padding: 0.5rem 0;
        }

        &.pp {

          label {
            text-transform: uppercase;
            font-weight: 600;
          }
        }

        .quantity {
          font-weight: 500;
          color: $filter-title-color;
          font-variant: small-caps;
          font-size: 0.8rem;
        }
      }
    }

  }

  &.special-section {

    .visual {
      z-index: 101;
      background-color: white;

    }
  }
}

</style>
