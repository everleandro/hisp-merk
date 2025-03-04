<template>
  <e-app :type="$device.isMobile ? 'mobile-layout' : 'default-layout'">

    <app-bar />
    <app-drawer :links="MOBILE_DRAWER_LINKS" :other-links="OTHERS_LINKS">
      <template #extra-links>
        <e-list-item :prepend-icon="Support.icon" color="white" value="support" @click="handleSupportClick">
          {{ Support.title }}
        </e-list-item>
      </template>
    </app-drawer>

    <e-main class="app-scroll-container">
      <e-container>
        <e-dialog v-model="data.supportDialog" fullscreen>
          <chat v-if="data.supportDialog" @close="data.supportDialog = false" />
        </e-dialog>
        <slot />
      </e-container>
    </e-main>
    <app-footer />
  </e-app>
</template>

<script lang="ts">
export default { name: 'default-layout' }
</script>
<script lang="ts" setup>
import { OTHERS_LINKS, MOBILE_DRAWER_LINKS, EXTRA_LINKS } from '@/constants/links'
const route = useRoute()
const data = reactive({
  drawerModelMobile: false,
  supportDialog: false,
})

const { Support } = EXTRA_LINKS

const handleSupportClick = () => {
  data.drawerModelMobile = false
  data.supportDialog = true
}

watch(route, () => {
  setTimeout(() => {
    const scrollContainer = document.querySelector(".app-scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 100); // Pequeño retraso para asegurar que la página cargó

});
</script>

<style lang="scss">
body {
  overflow: hidden;
}

.e-app {

  .e-main {
    padding: 0 !important;
    background-image: url('/images/bg.jpg');
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
    overflow: auto;
    max-height: 100vh;

    &__wrapper {
      position: unset;
    }
  }




  .e-container {
    padding-bottom: calc(env(safe-area-inset-bottom, 20px) + 65px) !important;
    padding-top: calc(env(safe-area-inset-top, 0px) + 54px) !important;
  }
}
</style>