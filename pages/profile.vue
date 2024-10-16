<template>
    <div class="profile-page">
        <div class="profile-page__header">
            <img :src="user" alt="">
            <h1 class="secondary--text ml-3">Jhon Smith</h1>
        </div>
        <div class="profile-page__background"></div>
        <div class="profile-page__tabs mt-3">
            <e-tab-group v-model="state.tabModel" color="primary" inactive-color="gray">
                <e-tab :value="1"> Setting</e-tab>
                <e-tab :value="2"> Billing</e-tab>
            </e-tab-group>
            <e-divider></e-divider>

            <e-window v-model="state.tabModel">
                <e-window-item :value="1">
                    <div class="pa-4">
                        <e-form ref="form">
                            <e-textfield v-model="test" cols="24" label="First Name" lg="12" />
                            <e-textfield v-model="test" cols="24" label="Last Name" lg="12" />
                            <e-textfield v-model="test" cols="24" label="Phone Number" lg="12" />
                            <e-textfield v-model="test" cols="24" label="Email address" lg="12" />
                            <e-textfield v-model="test" cols="24" label="City" lg="12" />
                            <e-textfield v-model="test" cols="24" label="appartment" lg="12" />
                            <e-textfield v-model="test" cols="24" label="State" lg="12" />
                            <e-textfield v-model="test" cols="24" label="Zip" lg="12" />
                        </e-form>

                    </div>
                </e-window-item>
                <e-window-item :value="2">
                    <div class="pa-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et
                            cumque
                            eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at
                            quas
                            consequatur quae minima harum!</p>
                    </div>
                </e-window-item>
            </e-window>
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "@/assets/images/user.png";
const state = reactive({
    tabModel: 1


})
const test = ref('');
</script>
<style lang="scss">
.profile-page {
    &__header {
        display: flex;
        align-items: center;
    }

    &__background {
        width: 100%;
        background: var(--secondary);
        opacity: 0.4;
        position: fixed;
        left: 0;
        top: 0;
        height: 280px;
        z-index: -1;
    }

    &__tabs {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: var(--white);
    }
}
</style>