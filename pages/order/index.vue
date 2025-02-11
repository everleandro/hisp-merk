<template>
  <div class="order-page">
    <e-tab-group v-model="store.statusSelected" color="secondary" class="my-3 pb-1 white">
      <e-tab v-for="(status, i) in ['Pending', 'Delivered', 'Cancelled']" rounded :key="i" :value="i + 1" small> {{
        status }}
      </e-tab>
    </e-tab-group>
    <e-window v-model="store.statusSelected">
      <e-window-item v-for="i in 3" :key="i" :value="i">
        <e-row class="ma-0">
          <e-col v-for="j in 7" :key="j" :span="4">
            <card-order />
          </e-col>
        </e-row>
      </e-window-item>
    </e-window>
  </div>
</template>
<script lang="ts" setup>
const store = reactive({
  statusSelected: 1
})
</script>
<style lang="scss">
.order-page {
  .e-slide-group {
    position: sticky;
    top: 54px;
    z-index: 1;

    &__content {
      justify-content: space-around;
    }

    .e-tab {
      &.e-btn {
        border-radius: 99999px;
      }

      &__slider {
        display: none;
      }

      // background-color: currentColor;
      &--selected {
        background-color: currentColor;

        .e-btn__content {
          color: var(--white)
        }
      }
    }
  }
}
</style>