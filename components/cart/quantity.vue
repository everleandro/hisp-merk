<template>
    <div class="cart-quantity">
        <e-dialog v-model="state.dialog" max-width="200">
            <div class="cart-quantity__container">
                <div class="pa-3 d-flex align-center">
                    <h4>Cantidad</h4>
                    <e-spacer></e-spacer>
                    <e-button :icon="$icon.close" text color="secondary" x-small
                        @click="state.dialog = false"></e-button>
                </div>
                <e-divider></e-divider>
                <div class="dialog-quantity">
                    <e-list v-model="model" color="primary">
                        <e-list-item v-for="i in 100" :key="i" :title="i" :value="i" />
                    </e-list>
                </div>
            </div>
        </e-dialog>
        <div class="cart-quantity__actions">

            <e-button text x-small @click="actionBehavior(actions.prev)">
                <e-icon :icon="prevIcon" color="secondary" />
            </e-button>
            <input :value="modelValue" readonly type="number" @click="inputClickHandler()">
            <e-button text x-small @click="actionBehavior(actions.next)">
                <e-icon :icon="$icon.plus" color="secondary" />
            </e-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
export interface Props {
    modelValue?: number
}
enum actions {
    prev = 'prev',
    next = 'next',
}
const { $icon } = useNuxtApp()
const props = withDefaults(defineProps<Props>(), { modelValue: 0 })

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>()
const state = reactive({
    dialog: false,
})
const prevIcon = computed(() => props.modelValue <= 1 ? $icon.trash : $icon.minus)

const model = computed({
    get: () => props.modelValue,
    set: (value: number | undefined) => {
        if (value === undefined) return
        emit('update:modelValue', value)
    },
})
const inputClickHandler = () => {
    state.dialog = true
}
const actionBehavior = (action: actions) => {
    switch (action) {
        case actions.prev:
            if (props.modelValue <= 1) {
                model.value = 0
            } else {
                model.value = props.modelValue - 1
            }
            break
        case actions.next:
            model.value = props.modelValue + 1
            break
    }
}

</script>
<style lang=scss>
.cart-quantity {
    display: flex;
    align-items: center;
    justify-content: center;

    &__container {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 100%;
        height: 300px;

    }

    &__actions {

        .e-btn {
            padding: 0 8px;
            border-radius: 0;
        }
    }

    input {
        width: 40px;
        text-align: center;
        font-size: 1rem;
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
        height: 100%;
        width: 53px;
        padding: 0 12px;
        color: var(--secondary);

        &:focus {
            outline: none;
        }
    }


    div.dialog-quantity {
        flex: 0 1 auto;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    border-radius: 4px;
    border: 1px solid var(--gray);
}
</style>