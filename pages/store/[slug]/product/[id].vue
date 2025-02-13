<template>
    <div class="product-page">
        <div class="product-page__header">
            <img src="@/assets/images/product/1.png" alt="img">
        </div>
        <div class="product-page__body white pb-10 mb-n15">
            <div class="d-flex align-baseline pa-3 ">
                <h1>Sport wear set</h1>
                <e-spacer></e-spacer>
                <span>$90.00</span>
            </div>
            <div class="d-flex mb-3">
                <app-rate :model-value="4" />
            </div>
            <e-divider />
            <e-row class="ma-0">
                <e-col cols="12"><picker-color v-model="store.color"
                        :colors="['primary', 'secondary', 'warning']" /></e-col>
                <e-col cols="12"><picker-size v-model="store.size" :sizes="['XS', 'M', 'L']" /></e-col>
            </e-row>
            <e-divider />
            <e-expansion-panel>
                <e-expansion v-model="store.description" header-title="Descripcion">
                    <p class="pa-4 ma-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus nisi placeat ipsum
                        porro facilis molestiae nemo consectetur. Dolores quam voluptatum ipsa? Alias molestiae eligendi
                        quidem at minima dignissimos nemo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus nisi placeat ipsum
                        porro facilis molestiae nemo consectetur.
                    </p>
                </e-expansion>
                <e-expansion v-model="store.reviews" header-title="Reviews">
                    <div class="pa-4 ma-0">
                        <product-review-info :model-value="4.3" />
                    </div>
                </e-expansion>
                <e-expansion v-model="store.reviews" header-title="Similar Products">
                    <div class="pa-4 ma-0">
                        <app-list :itemsPerView="2.3">
                            <product-card />
                        </app-list>
                    </div>
                </e-expansion>
            </e-expansion-panel>
        </div>
        <transition name="fade" mode="out-in">
            <div v-show="mounted" class="product-page__footer pa-3">
                <e-button color="secondary" rounded block>add to cart</e-button>
            </div>
        </transition>
    </div>
</template>
<script lang="ts" setup>
import icon from '@/constants/icons'
useBarTransparent()
const { setFooterConfig } = useFooter()
const { setBar } = useBarTemporary()
const router = useRouter()
const mounted = ref(false);
const store = reactive({
    color: 'primary',
    reviews: true,
    description: true,
    size: 'XS'
})

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 200)
    setFooterConfig({ show: false })
    setBar({
        title: '',
        rigthButtonList: [
            {
                icon: icon.hearth,
                action: () => favAction,
            },
        ], leftButtonList: [
            {
                icon: icon.chevronLeft,
                action: () => router.go(-1),
            },
        ]
    });
})

onBeforeRouteLeave((to) => {
    setFooterConfig({ show: true })
});

const favAction = () => {
    console.log('favorite')
}

</script>
<style lang="scss">
.product-page {
    // padding-top: 300px;

    .e-expansion-panels {
        box-shadow: none;
    }

    &__footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    &__body {
        box-shadow: 0 -3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        z-index: 10;
    }

    &__header {
        position: sticky;
        top: 0;
        z-index: -1;
        margin-top: -54px;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 400px;

        img {
            max-width: 100%;
            max-height: 100%;
            margin: auto;
        }
    }
}
</style>