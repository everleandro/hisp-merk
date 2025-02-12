<template>
    <div v-ripple :class="classes">
        <div v-if="hasPrepend" class="app-message__prepend pr-3 d-flex">
            <slot name="prepend">
                <e-icon v-if="prependIcon" :icon="prependIcon" large :color="textColor || color" />
            </slot>
        </div>
        <div class="app-message__body">
            <div class="app-message__title">
                <h1 :class="colorTextClass">
                    <slot name="title">
                        {{ title }}
                    </slot>
                </h1>
            </div>
            <div class="app-message__content">
                <p :class="colorTextClass">
                    <slot>{{ message }}</slot>
                </p>
            </div>
        </div>
        <div v-if="hasAppend" class="app-message__append pl-3 d-flex">
            <slot name="append">
                <e-icon v-if="appendIcon" :icon="appendIcon" large :color="textColor || color" />
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { IconPath } from 'drocket';
export interface MessageProps {
    title?: string;
    message?: string;
    transparent?: boolean;
    prependIcon?: IconPath | IconPath[] | string;
    appendIcon?: IconPath | IconPath[] | string;
    color?: string;
    textColor?: string;
}
const props = withDefaults(defineProps<MessageProps>(), {})

const slots = useSlots();
const hasPrepend = computed(() => !!props.prependIcon || !!slots.prepend)
const hasAppend = computed(() => !!props.appendIcon || !!slots.append)

const colorTextClass = computed(() => {
    const colorText = props.textColor ? `${props.textColor}--text` : ''
    const color = props.textColor ? `${props.textColor}--text` : ''
    return colorText || color

})
const classes = computed(() => ({
    'app-message pa-3 d-flex': true,
    'app-message--transparent': props.transparent,
    [`${props.color}--text`]: props.color && props.transparent,
    [`${props.color}`]: props.color && !props.transparent

}))
</script>
<style lang="scss">
.app-message {
    border-radius: 4px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

    &--transparent {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: currentColor;
            opacity: 0.1;
            z-index: -1;
            transition: background-color 0.3s ease-in;
        }
    }

    &__content {
        font-size: 12px;
        margin-top: 6px;
    }

    &__body {
        flex: 1;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;

        h1 {
            font-size: 1rem;
        }

        p {
            font-size: smaller;
            margin: 0;
        }
    }
}
</style>