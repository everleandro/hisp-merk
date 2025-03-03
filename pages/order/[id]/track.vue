<template>
    <div class="pa-3">
        <app-stepper class="ma-3">
            <app-stepper-item />
            <app-stepper-spacer />
            <app-stepper-item />
            <app-stepper-spacer />
            <app-stepper-item />
            <app-stepper-spacer />
            <app-stepper-item />
            <app-stepper-spacer />
            <app-stepper-item />
            <app-stepper-spacer />
            <app-stepper-item />
        </app-stepper>
    </div>
</template>
<script lang="ts" setup>
import { AppBarType } from '~/types/bar';
useAppBar({ title: 'Track Order' }, AppBarType.GO_BACK);
</script>