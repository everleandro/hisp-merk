<template>
    <div class="app-switch">
        <e-button v-bind="btnAttrs(props.trueValue)">{{ props.trueText }}</e-button>
        <e-button v-bind="btnAttrs(props.falseValue)">{{ props.falseText }}</e-button>
    </div>
</template>
<script lang="ts" setup>
export interface Props {
    modelValue: boolean | number,
    trueValue?: boolean | number,
    falseValue?: boolean | number,
    trueText?: string,
    falseText?: string,
}

const props = withDefaults(defineProps<Props>(), { trueValue: true, falseValue: false, trueText: 'Yes', falseText: 'No' })

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean | number): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: boolean | number) => emit('update:modelValue', value)
})

const btnAttrs = (value: boolean | number) => {
    return {
        outlined: model.value !== value,
        color: 'secondary',
        small: true,
        onClick: () => model.value = value
    }
}

</script>
<style lang="scss">
.app-switch {
    display: flex;
    justify-content: center;
    gap: 0px;

    .e-btn {
        margin: 0;
        border-radius: 0;
        flex: 1 1 auto;
    }
}
</style>