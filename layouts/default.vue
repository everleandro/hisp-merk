<template>
  <e-app :type="$device.isMobile ? 'mobile-layout' : 'default-layout'">
    <e-bar app fixed class="primary">
      <e-button icon="menu" text class="ml-3 d-none d-sm-block" color="white"
        @click="data.drawerModelDesktop = !data.drawerModelDesktop" />

      <app-logo class="ml-3" />
      <e-spacer />
      <e-button :icon="$icon.bell" text class="ml-1" color="white" />
    </e-bar>
    <app-drawer v-if="$device.isMobile" v-model="data.drawerModelMobile" right mobile :links="MOBILE_DRAWER_LINKS" />
    <app-drawer v-else v-model="data.drawerModelDesktop" :links="DESKTOP_LINKS" />

    <e-main>
      <e-container>
        <slot />
      </e-container>
    </e-main>
    <footer class="mobile__footer primary d-flex d-sm-none">
      <e-tab-group v-model="data.tabModel" grow>
        <e-tab v-for="(link, i) in MOBILE_LINKS" :key="i" :prepend-icon="link.icon" stacked :to="link.to" color="white">
          {{ link.title }}
        </e-tab>
      </e-tab-group>
    </footer>

  </e-app>
</template>
<script lang="ts" setup>
import { DESKTOP_LINKS, MOBILE_LINKS, MOBILE_DRAWER_LINKS } from '@/constants/links'
const app = useApp();
const data = reactive({
  drawerModelMobile: false,
  drawerModelDesktop: true,
  tabModel: 1
})
</script>

<style lang="scss">
.e-app {
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
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
    padding-bottom: env(safe-area-inset-bottom, 20px);
    /* El 20px es un valor base si el dispositivo no soporta env */
    justify-content: space-around;
    align-items: center;
    z-index: 2;

    .e-tab.e-tab {
      min-width: unset;
    }

    .e-icon--size-default {
      font-size: 18px;
    }

    .e-tab__slider {
      display: none;
    }

    .e-slide-group {
      flex: 1;

      .e-btn {
        font-size: 12px;
        font-weight: 300;
        text-transform: unset;
      }
    }
  }

  .e-main {
    padding-bottom: calc(env(safe-area-inset-bottom, 20px) + 54px);
  }
}
</style>