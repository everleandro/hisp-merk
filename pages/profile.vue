<template>
    <div class="profile-page">
        <e-list>
            <e-list-item :prepend-avatar="user" large title="jhon smith" subtitle="jhon@gmail.com"
                :append-icon="$icon.arrowBack" />
        </e-list>
        <div class="pa-3">
            <e-expansion-panel>
                <e-expansion color="secondary" header-title="Personal Data">
                    <div class="ma-4 secondary--text">
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
                </e-expansion>
                <e-expansion color="secondary" header-title="Address">
                    <div class="ma-4 secondary--text">
                        <e-form ref="form">
                            <e-textfield v-model="test" cols="24" label="First Name" lg="12" />
                        </e-form>
                    </div>
                </e-expansion>
                <e-expansion color="secondary" header-title="Payment Method">
                    <div class="ma-4 secondary--text">
                        <e-form ref="form">
                            <e-textfield v-model="test" cols="24" label="First Name" lg="12" />
                        </e-form>
                    </div>
                </e-expansion>
                <e-expansion color="secondary" header-title="Vouchers">
                    <div class="ma-4 secondary--text">
                        <e-form ref="form">
                            <e-textfield v-model="test" cols="24" label="First Name" lg="12" />
                        </e-form>
                    </div>
                </e-expansion>
                <e-expansion color="secondary" header-title="Rate this app">
                    <div class="ma-4 secondary--text">
                        <e-form ref="form">
                            <e-textfield v-model="test" cols="24" label="First Name" lg="12" />
                        </e-form>
                    </div>
                </e-expansion>
            </e-expansion-panel>
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "@/assets/images/user.png";
const state = reactive({
    expansionProperty: 1
})
const test = ref('');
</script>
<style lang="scss"></style>