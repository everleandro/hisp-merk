<template>
    <div class="switch-button">
        <e-button text :color="switcherViweColor(switchType.option1)" class="white"
            @click="switchView(switchType.option1)">
            <e-icon :icon="$icon.store"></e-icon>
        </e-button>
        <e-button text :color="switcherViweColor(switchType.option2)" class="white"
            @click="switchView(switchType.option2)">
            <e-icon :icon="$icon.shop"></e-icon>
        </e-button>
    </div>

</template>

<script lang="ts">
export enum switchType { option1, option2 }
</script>

<script lang="ts" setup>

export interface Props {
    modelValue: switchType
}
const props = withDefaults(defineProps<Props>(), { modelValue: switchType.option1 })

const emit = defineEmits<{
    (e: 'update:modelValue', value: switchType): void
}>()

const switchView = (type: switchType) => {
    emit('update:modelValue', type)
}

const switcherViweColor = (type: switchType) => {
    return props.modelValue === type ? 'gray-dark' : 'gray'
}

</script>
<style lang="scss">
.switch-button {
    border-radius: 4px;
    overflow: hidden;
    display: flex;

    .e-btn {
        margin-left: 0 !important;
        border-radius: 0;
    }
}
</style>