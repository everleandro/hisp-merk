<template>
  <e-app :type="$device.isMobile ? 'mobile-layout' : 'default-layout'">
    <e-bar app fixed depressed :class="barClass">
      <template v-if="temporaryBar">
        <e-button v-for="(btn, key) in temporaryBar.leftButtonList" :key :class="btn.class" :icon="btn.icon"
          :color="btn.color" @click="btn.action" small>
        </e-button>
        <e-spacer />
        <h2 v-if="temporaryBar.title" class="pr-8">{{ temporaryBar.title }}</h2>
        <e-spacer />
        <e-button v-for="(btn, key) in temporaryBar.rigthButtonList" :key :class="btn.class" :color="btn.color"
          :icon="btn.icon" @click="btn.action" small>
        </e-button>
      </template>
      <template v-else>
        <e-button icon="menu" text class="mr-3 btn--transparent"
          @click="data.drawerModelMobile = !data.drawerModelMobile" />
        <e-spacer />
        <h2 v-if="title">{{ title }}</h2>
        <app-logo v-else negative />
        <e-spacer />
        <e-button :icon="$icon.cart" :to="MyCart.to" small color="red" />
        <e-button :icon="$icon.bell" small />
      </template>
    </e-bar>
    <app-drawer v-model="data.drawerModelMobile" :links="MOBILE_DRAWER_LINKS" :other-links="OTHERS_LINKS">
      <template #extra-links>
        <e-list-item :prepend-icon="Support.icon" color="secondary" value="support" @click="handleSupportClick">
          {{ Support.title }}
        </e-list-item>
      </template>
    </app-drawer>

    <e-main>
      <e-container>
        <e-dialog v-model="data.supportDialog" fullscreen>
          <chat v-if="data.supportDialog" @close="data.supportDialog = false" />
        </e-dialog>
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
import { OTHERS_LINKS, MOBILE_LINKS, MOBILE_DRAWER_LINKS, EXTRA_LINKS } from '@/constants/links'
import type { TemporaryBar } from '@/types/temporary-bar'
const route = useRoute()
const data = reactive({
  drawerModelMobile: false,
  supportDialog: false,
})
const { footerSetting } = useFooter()
const { Support, MyCart } = EXTRA_LINKS
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

watch(() => route.fullPath, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

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

watch(() => data.supportDialog, (value) => {
  if (value)
    document.body.style.overflow = 'hidden';  //
  else
    document.body.style.overflow = 'auto';  //
})
const handleSupportClick = () => {
  data.drawerModelMobile = false
  data.supportDialog = true
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}

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
    overflow: auto;
    max-height: 100vh;
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
    background: rgba(255, 255, 255, .8);

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

  .e-bar.e-bar--app {
    height: unset;
    min-height: 54px;
    padding-top: calc(env(safe-area-inset-top, 0px) + 4px);
    padding-bottom: 4px;

  }

  .e-main {
    padding-bottom: calc(env(safe-area-inset-bottom, 20px) + 56px);
    padding-top: calc(env(safe-area-inset-top, 0px) + 56px);
  }
}
</style>