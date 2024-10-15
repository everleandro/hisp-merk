<template>
    <div class="pa-2 mt-4">
        <e-row>
            <e-col v-for="i in 5" cols="24" sm="12" md="8" :key="i">
                <card-commerce />
            </e-col>
        </e-row>
    </div>
</template>
<script lang="ts" setup>
const a: string = 'Hello World';
</script>