<template>
    <div class="app-text-area">
        <label for="feedback"></label>
        <textarea ref="textarea" v-model="text" :placeholder="placeholder" @input="handleInput" class="auto-expand"
            rows="4"></textarea>
        <span class="app-text-area__details">{{ modelValue.length }}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
interface Props {
    modelValue: string
    placeholder?: string
}
const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();
const model = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
});
const text = ref('');
const textarea = ref<HTMLTextAreaElement | null>(null);

const adjustHeight = () => {
    const el = textarea.value;
    if (!el) return;
    el.style.height = 'auto'; // Reset para recalcular
    el.style.height = el.scrollHeight + 'px'; // Ajusta la altura
};

const handleInput = (e: Event) => {
    adjustHeight();
    const target = e.target as HTMLTextAreaElement;
    model.value = target.value;
};

onMounted(adjustHeight);
</script>

<style lang="scss">
.app-text-area {
    padding: 12px;
    position: relative;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    color: var(--root-color);

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
        min-height: 160px;
        max-height: 200px;
        /* Opcional: evita que crezca demasiado */
        overflow-y: hidden;
        resize: none;

        /* Evita el resize manual */
        &:focus {
            outline: none;
        }
    }
}
</style>