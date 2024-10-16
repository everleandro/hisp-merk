<template>
  <e-app type="default-layout">
    <e-bar app fixed color="primary">
      <e-button icon="menu" text class="ml-1" @click="drawerModel = !drawerModel" color="white"></e-button>
      <e-spacer></e-spacer>
      <e-button :icon="$icon.bellOff" text class="ml-1" color="white"></e-button>
      <e-button :icon="$icon.message" text class="ml-1" color="white"></e-button>
      <e-button :icon="$icon.cart" text class="ml-1" color="white"></e-button>
    </e-bar>

    <e-drawer v-model="drawerModel" fixed class="primary">
      <template #prepend>
        <e-list-item :prepend-avatar="user" title="Jhon Smith" color="white" subtitle="smith.93@gmail.com">
        </e-list-item>
        <e-divider></e-divider>
      </template>
      <e-list>
        <e-list-item v-for="link in links" :prepend-icon="link.icon" color="white" large :to="link.to">
          {{ link.title }}
        </e-list-item>
      </e-list>
      <template #append>
        <div class="pa-2">
          <e-button :prepend-icon="$icon.exit" color="white" text outlined block small>cerrar Sesion</e-button>
        </div>
      </template>
    </e-drawer>

    <e-main>
      <e-container>

        <NuxtPage />
      </e-container>
    </e-main>
  </e-app>
</template>
<script lang="ts" setup>
import { useBreakpoint } from 'drocket'

const drawerModel = ref(true);
const { $icon } = useNuxtApp();
const router = useRouter();
const { viewport } = useBreakpoint()

import user from "assets/images/user.png";
const links = [
  { icon: $icon.fav, title: "Favoritos", to: "/favorites" },
  { icon: $icon.search, title: "Busqueda", to: "/search" },
  { icon: $icon.orders, title: "Pedidos", to: "/orders" },
  { icon: $icon.profile, title: "Perfil", to: "/profile" },
];

watch(() => router, () => {
  if (drawerModel.value && (viewport.xs || viewport.sm || viewport.md)) {
    drawerModel.value = false
  } else if (!drawerModel.value && (viewport.xl || viewport.lg)) {
    drawerModel.value = true
  }

}, { deep: true, immediate: true });
</script>

<style lang="scss">
.e-app[type="default-layout"] {
  background-color: var(--grey);


  .e-drawer__prepend {
    background-color: var(--primary-dark);
  }

  &::before {
    content: ' ';
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    background-image: url('/assets/images/bg.webp');

  }

  &::after {
    content: ' ';
    background-color: var(--secondary);
    opacity: 0.2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>