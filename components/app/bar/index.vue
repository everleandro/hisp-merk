<template>
    <e-bar app fixed :class="appBar.barClass" class="my-0 d-flex align-center">
        <e-button v-for="(btn, key) in leftButtonList" :text="btn.text" :key :class="btn.btnClass" :icon="btn.icon"
            :color="btn.color" @click="btn.action" small>
        </e-button>
        <e-spacer />
        <h2 v-if="appBar.title" class="pr-8">{{ appBar.title }}</h2>
        <app-logo v-else-if="appBar.title === undefined" negative />
        <e-spacer />
        <e-button v-for="(btn, key) in rigthButtonList" :key :class="btn.btnClass" :color="btn.color" :text="btn.text"
            :to="btn.to" :icon="btn.icon" @click="btn.action" small>
        </e-button>
    </e-bar>

</template>
<script lang="ts" setup>
import { OTHERS_LINKS, MOBILE_DRAWER_LINKS } from '@/constants/links'
const auth = useAuthStore()
let { appBar } = useAppBar();
const route = useRoute();

watch(() => route, (_, to) => {
    const result = [...OTHERS_LINKS, ...MOBILE_DRAWER_LINKS].find((link) => link.to === to?.path)
    if (result)
        switch (to?.path) {
            case '/home':
                appBar.value.title = undefined
                break;
            case '/':
                appBar.value.title = undefined
                break;
            default:
                appBar.value.title = result.title
        }
}, { deep: true, immediate: true });

const leftButtonList = computed(() => {
    console.log(appBar.value.leftButtonList?.[0]?._public)
    return appBar.value.leftButtonList?.filter((item) => {
        if (typeof item._public == 'undefined')
            return true;

        return auth.isAuthenticated ? !item._public : item._public

    }) || []
})
const rigthButtonList = computed(() => {
    return appBar.value.rigthButtonList?.filter((item) => {
        if (typeof item._public == 'undefined')
            return true;

        return auth.isAuthenticated ? !item._public : item._public

    }) || []
})

</script>
<style lang="scss">
.e-app {
    .e-bar {
        height: 54px;

        @include mixin.from_sm {
            height: 64px;
        }

        &.app-bar--transparent {
            background-color: transparent;
            box-shadow: none;
        }

        &.e-bar--app {
            height: unset;
            min-height: 54px;
            padding-top: calc(env(safe-area-inset-top, 0px) + 4px);
            padding-bottom: 4px;

        }

        &__content {
            flex: 1;
        }

        &.app-bar--blured {
            backdrop-filter: blur(3px);
            background: rgba(255, 255, 255, .2);
        }


    }
}
</style>
