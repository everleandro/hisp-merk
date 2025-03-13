<template>
    <section class="profile-page">
        <e-list class="profile-user-info my-8">
            <e-list-item :prepend-avatar="user" x-large :title="userData.get_full_name" :subtitle="userData.email">
                <template #prepend>
                    <e-avatar size="64" :src="user"></e-avatar>
                </template>
                <template #append>
                    <e-button :icon="$icon.setting" text to="/profile/setting"></e-button>
                </template>
            </e-list-item>
        </e-list>
        <div class="profile-sections ma-3">
            <e-list>
                <template v-for="(section, key) in profileSeciton" :key="key">
                    <e-list-item :prepend-icon="section.icon" :title="section.title" :append-icon="$icon.chevronRight"
                        :to="section.to" />
                    <e-divider v-if="profileSeciton.length - 1 != key" class="my-2" />
                </template>
            </e-list>
        </div>
    </section>
</template>
<script lang="ts" setup>
import user from "@/assets/images/user.png";
import icons from "~/constants/icons";
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const userData = await authStore.getUser();
const profileSeciton = [
    { title: "Address", icon: icons.address, to: "/profile/address" },
    { title: "Payment method", icon: icons.paymentMethod, to: "/profile/payment-method" },
    { title: "Voucher", icon: icons.voucher, to: "/profile/voucher" },
    { title: "My Wishlist", icon: icons.hearth, to: "/profile/wish-list" },
    { title: "Rate This App", icon: icons.star, to: "/profile/rate-app" }
]

onMounted(async () => {
    console.log(userData);
})



</script>
<style lang="scss">
.profile {
    &-user-info {
        --list-item-prepend-width: 74px;
    }

    &-sections {
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 4px;
        // overflow: hidden;
        box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
    }
}
</style>