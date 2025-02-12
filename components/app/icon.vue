<template>
    <i :class="classes">
        <span v-for="i in icon.paths" :class="`path${i}`"></span>
    </i>
</template>
<script lang="ts" setup>
export interface iconConfig {
    paths: number | string
    name: string,
}
export interface Props {
    icon: iconConfig,
    small?: boolean;
    xSmall?: boolean;
    large?: boolean;
    xLarge?: boolean;
}
export type IconClassKeys =
    | "xSmall"
    | "small"
    | "large"
    | "xLarge"

const props = defineProps<Props>()

const availableRootClasses = {
    xSmall: 'e-icon--size-x-small',
    small: 'e-icon--size-small',
    large: 'e-icon--size-large',
    xLarge: 'e-icon--size-x-large'
};

const classes = computed(() => {
    const availableRootClassKeys = Object.keys(availableRootClasses) as Array<IconClassKeys>
    const size = availableRootClassKeys.filter(
        (key) => !!props[key]
    ).map(key => availableRootClasses[key]);
    if (size.length === 0) size.push("e-icon--size-default")
    return ['e-icon icon app-icon icon-beer', size, `icon-${props.icon.name}`];
})
</script>