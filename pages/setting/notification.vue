<template>
    <div class="pa-3 notification-section">
        <e-form color="secondary">
            <e-switch v-model="data.show" class="mb-5" label="Show notifications" hide-overlay color="secondary"
                detail="Recibe push notifications for new messages" />
            <e-switch v-model="data.sound" class="mb-5" label="Notification sounds" hide-overlay color="secondary"
                detail="play sounds for new messages" />
            <e-switch v-model="data.lock" class="mb-5" label="Lock screen notifcations" hide-overlay color="secondary"
                detail="Allow notification on the lock screen" />
        </e-form>
    </div>
</template>
<script lang="ts" setup>
import { AppBarType } from '~/types/bar';
useAppBar({ title: 'Notification' }, AppBarType.GO_BACK);
const data = reactive({
    show: true,
    sound: false,
    lock: false,
})
</script>
<style lang="scss">
.notification-section {
    .e-messages {
        padding-left: 8px;
    }
}
</style>