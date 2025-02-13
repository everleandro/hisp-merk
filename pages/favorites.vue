<template>
    <div class="favorite-page">

        <e-bar depressed>
            <h1 class="secondary--text">Favoritos</h1>
            <e-spacer />
            <switch-button v-model="state.view" class="ma-2" />
        </e-bar>
        <div class="tab__container">
            <transition :name="listTrasition">
                <e-row :key="`${state.view}`">
                    <e-col v-for="i in 5" v-show="state.view === switchType.option1" cols="24" sm="8" md="6" lg="4"
                        :key="i">
                        <card-product />
                    </e-col>
                    <e-col v-for="i in 5" v-show="state.view === switchType.option2" cols="24" sm="12" md="8" lg="6"
                        :key="i">
                        <store-card />
                    </e-col>
                </e-row>
            </transition>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { switchType } from '~/components/switch-button.vue'
const state = reactive({
    view: switchType.option1
})

const listTrasition = computed(() => state.view === switchType.option1 ? 'tab-reverse-transition' : 'tab-transition')
</script>
<style lang="scss">
.favorite-page {
    .e-bar {
        backdrop-filter: blur(5px);
        color: unset;
    }
}
</style>