<template>
  <e-app :type="$device.isMobile ? 'mobile-layout' : 'default-layout'">
    <e-bar app fixed depressed class="white">
      <e-button icon="menu" text class="mr-3" @click="data.drawerModelMobile = !data.drawerModelMobile" />
      <e-spacer />
      <app-logo negative />
      <e-spacer />
      <e-button text :icon="$icon.bell" />
    </e-bar>
    <app-drawer v-if="$device.isMobile" v-model="data.drawerModelMobile" mobile :links="MOBILE_DRAWER_LINKS"
      :other-links="OTHERS_LINKS" />

    <e-main>
      <e-container>
        <slot />
      </e-container>
    </e-main>
    <!-- <footer class="mobile__footer d-flex d-sm-none white pa-2">
      <e-button v-for="(link, i) in MOBILE_LINKS" :key="i" :to="link.to" :icon="link.icon" text color="gray-light"
        small />
    </footer> -->

  </e-app>
</template>
<script lang="ts" setup>
import { OTHERS_LINKS, MOBILE_LINKS, MOBILE_DRAWER_LINKS } from '@/constants/links'
const app = useApp();
const data = reactive({
  drawerModelMobile: false,
  tabModel: 1
})

const filter = reactive({
  search: '',
  category: -1,
  min: '',
  max: '',
  popularity: false,
  news: false,
})

</script>

<style lang="scss">
.e-app {
  .e-bar {
    &.primary>* {
      color: unset;
    }

    height: 54px;

    @include mixin.from_sm {
      height: 64px;
    }
  }


  .e-container {
    padding: 0;

    @include mixin.from_sm {
      padding: 12px;
    }
  }

  .e-overlay {
    z-index: 1001;
  }

  .e-main {
    padding-top: 64px !important;
  }

  &[type="default-layout"] {
    .e-drawer__prepend {
      background-color: var(--primary-dark);
    }
  }

  .mobile__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid var(--gray-light);
    border-radius: 12px 12px 0 0;
    padding-bottom: calc(env(safe-area-inset-bottom, 8px) + 8px) !important;
    /* El 20px es un valor base si el dispositivo no soporta env */
    justify-content: space-around;
    align-items: center;
    z-index: 2;

    .router-link-active {
      color: white;
      background-color: var(--primary);
    }

  }

  .e-main {
    padding-bottom: calc(env(safe-area-inset-bottom, 20px) + 54px);
  }
}
</style>