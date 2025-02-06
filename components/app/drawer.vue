<template>
    <e-drawer v-model="model" fixed :right="right" :data-type="mobile ? 'mobile' : 'desktop'">
        <template #prepend>
            <e-list-item :prepend-avatar="user" title="Jhon Smith" x-large class="mb-0" subtitle="smith.93@gmail.com">
            </e-list-item>
            <e-divider></e-divider>
        </template>
        <e-list>
            <e-list-item v-for="(link, i) in links" :prepend-icon="link.icon" :key="i" color="secondary" :to="link.to">
                {{ link.title }}
            </e-list-item>
        </e-list>
        <e-list>
            <e-list-item class="pa-3">OTHERS</e-list-item>
            <e-list-item v-for="(link, i) in otherLinks" :prepend-icon="link.icon" :key="i" color="secondary"
                :to="link.to">
                {{ link.title }}
            </e-list-item>
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
const { viewport } = useBreakpoint()

export interface Props {
    modelValue: boolean,
    mobile?: boolean,
    right?: boolean,
    links: Link[],
    otherLinks: Link[],
}
const props = withDefaults(defineProps<Props>(), { right: false })

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

watch(() => router, () => {
    if (props.modelValue && (viewport.xs || viewport.sm || viewport.md)) {
        model.value = false
    } else if (!props.modelValue && (viewport.xl || viewport.lg)) {
        model.value = true
    }
}, { deep: true, immediate: true });

const model = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
})
const logOut = () => {
    router.push({ path: "/" })
}
</script>
<style lang="scss">
.e-drawer {
    z-index: 1002;

    // &[data-type="desktop"] {
    //     display: none;

    //     @include mixin.from_sm {
    //         display: block;
    //     }
    // }

    // &[data-type="mobile"] {
    //     display: block;

    //     @include mixin.from_sm {
    //         display: none;
    //     }
    // }

}
</style>