<template>
  <e-app :type="$device.isMobile ? 'mobile-layout' : 'default-layout'">
    <e-bar app fixed depressed :class="barClass">
      <template v-if="temporaryBar">
        <e-button v-for="(btn, key) in temporaryBar.leftButtonList" :key :icon="btn.icon" :color="btn.color"
          @click="btn.action" small text class="btn--transparent">
        </e-button>
        <e-spacer />
        <h2 v-if="temporaryBar.title" class="pr-8">{{ temporaryBar.title }}</h2>
        <e-spacer />
        <e-button v-for="(btn, key) in temporaryBar.rigthButtonList" :key :color="btn.color" :icon="btn.icon"
          @click="btn.action" small text class="btn--transparent">
        </e-button>
      </template>
      <template v-else>
        <e-button icon="menu" text class="mr-3" @click="data.drawerModelMobile = !data.drawerModelMobile" />
        <e-spacer />
        <h2 v-if="title">{{ title }}</h2>
        <app-logo v-else negative />
        <e-spacer />
        <e-button text :icon="$icon.bell" />
      </template>
    </e-bar>
    <app-drawer v-model="data.drawerModelMobile" :links="MOBILE_DRAWER_LINKS" :other-links="OTHERS_LINKS" />

    <e-main>
      <e-container>
        <slot />
      </e-container>
    </e-main>
    <footer v-if="footerSetting.show" class="mobile__footer d-flex d-sm-none">
      <e-button v-for="(link, i) in MOBILE_LINKS" :key="i" :to="link.to" class="ma-0" stacked :prepend-icon="link.icon"
        :class="{ 'router-link-active': isActive(link.to) }" text color="secondary">{{ link.title }}</e-button>
    </footer>

  </e-app>
</template>
<script lang="ts" setup>
import { OTHERS_LINKS, MOBILE_LINKS, MOBILE_DRAWER_LINKS } from '@/constants/links'
import type { TemporaryBar } from '@/types/temporary-bar'
const route = useRoute()
const data = reactive({
  drawerModelMobile: false
})
const { footerSetting } = useFooter()

const barClass = ref('white')
const temporaryBar = ref<TemporaryBar | null>(null);
const title = ref<string>('');
const isActive = (path: string) => route.path.startsWith(path);

const setTempBarContent = (content: TemporaryBar) => {
  if (content)
    temporaryBar.value = { ...(temporaryBar.value || {}), ...content }
  else temporaryBar.value = content
}

const setBarClass = (_class: string) => barClass.value = _class

provide('setTempBarContent', setTempBarContent);
provide('setBarClass', setBarClass);

watch(() => route, (_, to) => {
  const result = [...OTHERS_LINKS, ...MOBILE_DRAWER_LINKS].find((link) => link.to === to?.path)
  if (result)
    switch (to?.path) {
      case '/home':
        title.value = ''
        break;
      default:
        title.value = result.title
    }
}, { deep: true, immediate: true });
</script>

<style lang="scss">
.e-app {
  .e-bar {
    &.app-bar--transparent {
      background-color: transparent;
    }

    &.app-bar--blured {
      backdrop-filter: blur(3px);
      background: transparent;
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
    padding-top: 54px !important;
  }

  &[type="default-layout"] {
    .e-drawer__prepend {
      background-color: var(--primary-dark);
    }
  }

  .mobile__footer {
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 12px);
    left: 12px;
    width: calc(100% - 24px);
    border-radius: 16px;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    overflow: hidden;
    backdrop-filter: blur(5px);
    background: transparent;

    .router-link-active {
      color: var(--primary);
    }

    .e-btn {
      font-weight: normal;
      text-transform: capitalize;
      border-radius: 0px;
      flex: 1 1 auto;

      &::before {
        opacity: .1;
      }
    }

  }

  .e-main {
    padding-bottom: calc(env(safe-area-inset-bottom, 20px) + 54px);
  }
}
</style>