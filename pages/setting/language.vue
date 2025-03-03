<template>
    <div class="language-section pa-3 mt-12">
        <e-list>
            <e-list-item value="spanish" x-large title="Spanish" @click="example = 1">
                <template #append>
                    <e-radio :model-value="1" :is-active="example === 1" />
                </template>
            </e-list-item>
            <e-list-item value="english" class="v-ripple-element" title="English" x-large @click="example = 2">
                <template #append>
                    <e-radio :model-value="1" :is-active="example === 2" />
                </template>
            </e-list-item>
        </e-list>
    </div>
</template>
<script lang="ts" setup>
import { AppBarType } from '~/types/bar';
useAppBar({ title: 'Language' }, AppBarType.GO_BACK);
const example = ref(1)
</script>