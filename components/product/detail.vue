<template>
    <div>
        <e-dialog v-model="model" :fullscreen="$device.isMobile" max-width="700">
            <div>
                <e-bar color="primary">
                    <e-button :icon="$icon.arrowBack" @click="model = false" />
                </e-bar>
            </div>
        </e-dialog>
    </div>
</template>
<script lang="ts" setup>
export interface Props {
    modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), { modelValue: false })
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
})
</script>