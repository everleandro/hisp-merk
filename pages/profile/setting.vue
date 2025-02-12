<template>
    <div class="profile-setting">
        <div class="d-flex justify-center my-8 ">
            <div class="avatar-container">
                <e-avatar :src="user" size="150" />
                <e-button :icon="$icon.camera" color="white" class="secondary" x-large></e-button>
            </div>
        </div>
        <e-form class="pa-3 ma-0">
            <e-textfield cols="11" label="First Name"></e-textfield>
            <e-textfield cols="13" label="Last Name"></e-textfield>
            <e-textfield cols="24" label="Email"></e-textfield>
            <e-textfield cols="24" label="Phone: " prefix=" (+1)" />
            <e-form-column>
                <e-button block color="secondary" rounded> Save Changes</e-button>
            </e-form-column>
        </e-form>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
useBarTemporary({ title: 'Profile Settings' });
</script>
<style lang="scss">
.profile-setting {
    .avatar-container {
        position: relative;

        .e-btn {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
}
</style>