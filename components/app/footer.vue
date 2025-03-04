<template>
    <footer v-if="footerSetting.show" class="mobile__footer d-flex d-sm-none">
        <e-button v-for="(link, i) in MOBILE_LINKS" :key="i" :to="link.to" class="ma-0" stacked
            :prepend-icon="link.icon" :class="{ 'router-link-active': isActive(link.to) }" text color="secondary">
            {{ link.title }}
        </e-button>
    </footer>
</template>
<script lang="ts" setup>
import { MOBILE_LINKS } from '@/constants/links'
const { footerSetting } = useFooter()
const route = useRoute();
const isActive = (path: string) => route.path.startsWith(path);
</script>
<style lang="scss">
.mobile__footer {
    position: fixed;
    padding-bottom: env(safe-area-inset-bottom, 0px);
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    overflow: hidden;
    background: var(--white);

    .router-link-active {
        color: var(--primary);

        &::before {
            opacity: .1;
        }
    }

    .e-btn {
        font-weight: normal;
        text-transform: capitalize;
        border-radius: 0px;
        flex: 1 1 auto;
    }

}
</style>