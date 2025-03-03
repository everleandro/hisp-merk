<template>
    <e-drawer v-model="drawerModel" fixed :right="right" :data-type="mobile ? 'mobile' : 'desktop'">
        <template #prepend>
            <e-list-item :prepend-avatar="user" title="Jhon Smith" x-large class="mb-0" subtitle="smith.93@gmail.com">
            </e-list-item>
            <e-divider></e-divider>
        </template>
        <e-list>
            <e-list-item v-for="(link, i) in links" :prepend-icon="link.icon" :key="i" color="secondary" :to="link.to"
                :class="{ 'router-link-active': isActive(link.to) }">
                {{ link.title }}
            </e-list-item>
        </e-list>
        <e-list>
            <e-list-item class="pa-3">OTHERS</e-list-item>
            <e-list-item v-for="(link, i) in otherLinks" :prepend-icon="link.icon" :key="i" color="secondary"
                :to="link.to">
                {{ link.title }}
            </e-list-item>
            <slot name="extra-links"></slot>
        </e-list>
        <template #append>
            <div class="pa-2">
                <e-button :prepend-icon="$icon.logout" block @click="logOut" color="primary" outlined>
                    cerrar Sesion
                </e-button>
            </div>
        </template>
    </e-drawer>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
import { useBreakpoint } from 'drocket'
import type { Link } from '@/types'

const router = useRouter();
const route = useRoute();
const { viewport } = useBreakpoint()
const { drawerModel } = useAppDrawer()

export interface Props {
    mobile?: boolean,
    right?: boolean,
    links: Link[],
    otherLinks: Link[],
}

const props = withDefaults(defineProps<Props>(), { right: false })

watch(() => router, () => {
    if (drawerModel.value && (viewport.xs || viewport.sm || viewport.md)) {
        drawerModel.value = false
    } else if (!drawerModel.value && (viewport.xl || viewport.lg)) {
        drawerModel.value = true
    }
}, { deep: true, immediate: true });

const logOut = () => {
    router.push({ path: "/" })
}
const isActive = (path: string) => route.path.startsWith(path);
</script>
<style lang="scss">
.e-drawer {
    z-index: 1002;
    padding-bottom: env(safe-area-inset-bottom, 0px) !important;
    padding-top: env(safe-area-inset-top, 0px) !important;

    &__prepend {
        background-color: var(--primary-dark);
    }


}
</style>