<template>
    <div :class="classes">
        <label v-if="label" for="text-area">{{ label }}</label>
        <textarea ref="textarea" :value="model" id="feedback" :placeholder="placeholder" @input="handleInput"
            class="auto-expand" :rows="rows"></textarea>
        <span v-if="limit" class="app-text-area__details">{{ modelValue.length }}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
interface Props {
    modelValue: string
    label?: string
    limit?: string | number,
    rows?: string | number,
    elevated?: boolean,
    placeholder?: string
}
const props = withDefaults(defineProps<Props>(), { rows: 8 })
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();
const model = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
});
const text = ref('');
const textarea = ref<HTMLTextAreaElement | null>(null);

const classes = computed(() => ({
    'app-text-area': true,
    'app-text-area--elevated': props.elevated
}))

const adjustHeight = () => {
    setTimeout(() => {
        const el = textarea.value;
        if (!el) return;
        el.style.height = 'auto'; // Reset para recalcular
        console.log(el.style.height)
        el.style.height = el.scrollHeight + 'px'; // Ajusta la altura
    })
};

const handleInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    model.value = target.value;
    adjustHeight()
};

onMounted(adjustHeight);
</script>

<style lang="scss">
.app-text-area {
    padding: 12px;
    position: relative;
    border-radius: 4px;
    color: var(--root-color);

    &::before {
        content: '';
        position: absolute;
        background-color: currentColor;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: .1;
    }

    &--elevated {
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    &__details {
        color: var(--root-color);
        width: 100%;
        display: inline-block;
        text-align: right;
        font-size: x-small;
    }

    .auto-expand {
        font-family: "Roboto", sans-serif;
        width: 100%;
        max-height: 200px;
        /* Opcional: evita que crezca demasiado */
        overflow-y: auto;
        resize: none;

        /* Evita el resize manual */
        &:focus {
            outline: none;
        }
    }
}
</style>