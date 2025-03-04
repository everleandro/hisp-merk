<template>
    <div class="review-info">
        <div class="d-flex">
            <h1><span class="black--text">{{ modelValue }}</span> <span class="small"> out of 5</span></h1>
            <e-spacer />
            <app-rate :model-value="4" />
        </div>
        <div v-for="row in historycal" :key="row.text" class="review-info__slider mt-3 d-flex">
            <div class="review-info__slider-prepend d-flex align-center justify-center">
                <span class="mr-1">{{ row.text }} </span>
                <e-icon :icon="$icon.star" x-small></e-icon>
            </div>
            <div :class="`review-info__slider-body ${color}--text px-3`">
                <span>
                    <span :style="`width: ${row.value}%;`"></span>
                </span>
            </div>
            <div class="review-info__slider-append">
                <span>80% </span>
            </div>
        </div>
        <div class="review-info__actions d-flex align-center mt-3">
            <span>47 reviews</span>
            <e-spacer />
            <e-button text color="secondary">write review</e-button>
        </div>
        <div class="review">
            <e-list color="primary">
                <template v-for="i in 4" :key="i">
                    <e-list-item :prepend-avatar="user" color="secondary" :title="'jhon Smith' + i" :value="i">
                        <app-rate :model-value="4" color=yellow />
                        <template #append>
                            9m ago
                        </template>
                    </e-list-item>
                    <div class="review-detail px-3 black--text mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo mollitia eveniet
                        quaerat quasi nesciunt assumenda, cupiditate magni reprehenderit ut voluptatum facere asperiores
                        laudantium tenetur repudiandae odit modi! Iste, tenetur!
                    </div>
                </template>
            </e-list>
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
export interface Historical {
    value: string | number,
    text: string,
}
export interface Props {
    historycal?: Historical[],
    modelValue: number | string,
    color?: string
}
withDefaults(defineProps<Props>(), {
    modelValue: 4.5,
    color: 'secondary',
    historycal: () => [
        { value: 80, text: '5' },
        { value: 12, text: '4' },
        { value: 5, text: '3' },
        { value: 3, text: '2' },
        { value: 0, text: '1' },
    ]
});

</script>
<style lang="scss">
.review-info {
    display: block;

    h1 {
        display: flex;
        align-items: center;
        gap: 5px;

        .small {
            font-size: 16px;
            font-weight: lighter;
            opacity: .8;
        }
    }

    .review {
        .e-list-item__content {
            .rate {
                &__container {
                    justify-content: flex-start;
                }
            }
        }

        &-detail {
            font-size: smaller;
            font-weight: lighter;
        }
    }

    &__slider {
        &-body {
            flex: 1;
            display: flex;
            align-items: center;

            span {
                height: 4px;
                border-radius: 9999px;
                display: block;
            }

            &>span {
                background-color: var(--gray);
                width: 100%;

                &>span {
                    background-color: currentColor;
                }

            }
        }
    }

    .rate {
        pointer-events: none;

        &__container {
            gap: 0;

            .e-btn {
                width: 22px;
                height: 22px;
            }
        }
    }
}
</style>