<template>
    <div class="app-chat">
        <div class="app-chat__bar d-flex pa-4">
            <e-button small :icon="$icon.chevronLeft" class="mr-3" @click="emit('close')" />
            <div>
                <e-list-item :prepend-avatar="user" title="Jhon Smith" class="mb-0" />
            </div>
        </div>
        <e-divider />
        <div class="app-chat__body py-3">
            <div>
                <pre>{{ message }}</pre>
            </div>
        </div>
        <div class="app-chat__footer pa-3">
            <app-textarea v-model="message" placeholder="type your message here" rows="1" />
            <e-button color="white" class="secondary" :icon="$icon.chevronRight" small />
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
const message = ref('')

const emit = defineEmits<{
    (e: 'close'): void
}>()


// const dynamicHeight = ref(window.innerHeight);

// const updateHeight = () => {
//     if (window.visualViewport) {
//         dynamicHeight.value = window.visualViewport.height; // Mejor para detectar teclado
//     } else {
//         dynamicHeight.value = window.innerHeight;
//     }
// };

// onMounted(() => {
//     updateHeight(); // Ajustar altura al cargar
//     if (window.visualViewport) {
//         window.visualViewport.addEventListener('resize', updateHeight);
//     } else {
//         window.addEventListener('resize', updateHeight);
//     }
// });

// onUnmounted(() => {
//     if (window.visualViewport) {
//         window.visualViewport.removeEventListener('resize', updateHeight);
//     } else {
//         window.removeEventListener('resize', updateHeight);
//     }
// });
</script>
<style lang="scss">
.app-chat {
    display: flex;
    flex-direction: column;
    --header-height: 80px;
    --footer-height: auto;
    height: 100%;
    padding-top: var(--header-height);
    overflow: hidden;

    &__bar {
        position: fixed;
        top: 0;
    }

    &__footer {
        // height: var(--footer-height);
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;
        position: relative;

        .e-btn {
            position: absolute;
            bottom: 13px;
            right: 12px;
        }

        .app-text-area {
            flex: 1;
            border-radius: 18px;
            overflow: hidden;
        }
    }

    &__body {
        flex: 1 1 auto;
        // height: calc(100vh - var(--footer-height) - var(--header-height));
        overflow: auto;

        .app-text-area .auto-expand {
            max-height: 47px;
        }
    }
}
</style>