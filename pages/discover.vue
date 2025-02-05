<template>
    <div>
        <client-filter v-model:view="state.viewType" />
        <div class="pa-2 mt-4">
            <div class="tab__container">
                <transition :name="listTrasition">
                    <e-row :key="`${state.viewType}`">
                        <e-col v-for="i in 5" v-show="state.viewType === switchType.option2" cols="24" sm="8" md="6"
                            lg="4" :key="i">
                            <card-product />
                        </e-col>
                        <e-col v-for="i in 5" v-show="state.viewType === switchType.option1" cols="24" sm="12" md="8"
                            lg="6" :key="i">
                            <!-- <card-commerce /> -->sad
                        </e-col>
                    </e-row>
                </transition>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { switchType } from '~/components/switch-button.vue'
const state = reactive({
    viewType: switchType.option1
})


const listTrasition = computed(() => state.viewType === switchType.option1 ? 'tab-reverse-transition' : 'tab-transition')
</script>
<style lang="scss"></style>