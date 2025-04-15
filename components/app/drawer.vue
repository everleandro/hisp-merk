<template>
    <e-drawer v-model="drawerModel" fixed :right="right" :data-type="mobile ? 'mobile' : 'desktop'" class="primary">
        <template #prepend>
            <e-list-item v-if="$auth.isAuthenticated" :prepend-avatar="user" :title="userData.get_full_name"
                class="mb-0" :subtitle="userData.email" color="white">
            </e-list-item>
            <div v-else></div>
            <e-divider />
        </template>
        <e-list>
            <e-list-item v-for="(link, i) in links" :prepend-icon="link.icon" :key="i" color="white" :to="link.to"
                :class="{ 'router-link-active': isActive(link.to) }">
                {{ link.title }}
            </e-list-item>
        </e-list>
        <e-list color="white" v-if="otherLinks.length > 0">
            <e-list-item class="pa-3 white--text">OTHERS</e-list-item>
            <e-list-item v-for="(link, i) in otherLinks" :prepend-icon="link.icon" :key="i" color="white" :to="link.to">
                {{ link.title }}
            </e-list-item>
            <slot name="extra-links"></slot>
        </e-list>
        <template #append>
            <div class="pa-2">
                <e-button :prepend-icon="$auth.isAuthenticated ? $icon.logout : ''" block @click="sessionButton"
                    :color="$auth.isAuthenticated ? 'primary-dark' : 'secondary'">
                    {{ $auth.isAuthenticated ? "cerrar Sesion" : "Iniciar sesion" }}
                </e-button>
            </div>
        </template>
    </e-drawer>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
import { useAuthStore } from '@/stores/auth';
import { useBreakpoint } from 'drocket'

const authStore = useAuthStore();
const userData = await authStore.getUser();
import { OTHERS_LINKS, MOBILE_DRAWER_LINKS, EXTRA_LINKS } from '@/constants/links'
import auth from "~/plugins/auth";

const router = useRouter();
const route = useRoute();
const { viewport } = useBreakpoint()
const { drawerModel } = useAppDrawer()

export interface Props {
    mobile?: boolean,
    right?: boolean,
}

withDefaults(defineProps<Props>(), { right: false })

const links = computed(() => {
    if (authStore.isAuthenticated)
        return MOBILE_DRAWER_LINKS
    return MOBILE_DRAWER_LINKS.filter(link => link.public)
})
const otherLinks = computed(() => {
    if (authStore.isAuthenticated)
        return OTHERS_LINKS
    return OTHERS_LINKS.filter(link => link.public)
})

watch(() => router, () => {
    if (drawerModel.value && (viewport.xs || viewport.sm || viewport.md)) {
        drawerModel.value = false
    } else if (!drawerModel.value && (viewport.xl || viewport.lg)) {
        drawerModel.value = true
    }
}, { deep: true, immediate: true });

const sessionButton = async () => {
    if (authStore.isAuthenticated) {
        await authStore.logout()
        drawerModel.value = false;
        router.push({ path: "/" })
    } else {
        router.push({ path: "/login" })
    }
}
const isActive = (path: string) => route.path.startsWith(path);
</script>
<style lang="scss">
.e-drawer {
    z-index: 1002;
    padding-bottom: env(safe-area-inset-bottom, 0px) !important;

    &__prepend {
        padding-top: env(safe-area-inset-top, 0px) !important;
        background-color: var(--primary-dark);
    }


}
</style>