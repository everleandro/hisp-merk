<template>
    <div class="app-logo">
        <router-link to="/">
            <span class="app-logo__span--1">D</span>
            <span class="app-logo__span--2">.</span>
            <span class="app-logo__span--3">Havana</span>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
export interface Props {
    negative?: boolean
}
const props = withDefaults(defineProps<Props>(), { negative: false })

</script>
<style lang="scss">
.app-logo {
    span {
        font-size: xx-large;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }

    &__span {
        &--1 {
            color: var(--primary);
        }

        &--2 {
            color: var(--primary--dark);

        }

        &--3 {
            color: var(--secondary);

        }
    }

    @include mixin.from_sm {
        width: 200px;
    }
}
</style>
