<template>
    <div class="setting-page pa-3">
        <div class="sections mt-12">
            <e-list>
                <template v-for="(section, key) in settinSecitons" :key="key">
                    <e-list-item :prepend-icon="section.icon" :title="section.title" :append-icon="$icon.chevronRight"
                        :to="section.to" />
                    <e-divider v-if="settinSecitons.length - 1 != key" class="my-2" />
                </template>
            </e-list>
        </div>
    </div>
</template>
<script lang="ts" setup>
import icons from "~/constants/icons";
const settinSecitons = [
    { title: "Language", icon: icons.setting, to: "/setting/language" },
    { title: "Notification", icon: icons.bell, to: "/setting/notification" },
    { title: "Term of Use", icon: icons.terms, to: "/setting/terms-of-use" },
    { title: "Privacy Policy", icon: icons.privacy, to: "/setting/privacy-policy" },
]
</script>
<style lang="scss">
.setting-page {
    .e-list-item__content {
        padding-left: 12px;
    }

    .sections {
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 4px;
        // overflow: hidden;
        box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
    }
}
</style>