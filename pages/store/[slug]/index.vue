<template>
    <div class="store-page">
        <store-header />
        <div class="store-page__body white">
            <card-seller />
            <e-row class="ma-0">
                <e-col v-for="i in 12" :key="i" cols="12" md="6" lg="4" xl="3">
                    <product-card />
                </e-col>
            </e-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import icon from '@/constants/icons'
import { AppBarType } from '@/types/bar'
const { setFooterConfig } = useFooter()
const { setBar } = useAppBar();

onMounted(() => {
    setFooterConfig({ show: false })
    setBar({
        title: '',
        barClass: ['secondary--text', 'app-bar--transparent'],
        rigthButtonList: [
            {
                icon: icon.hearth,
                action: () => favAction,
                color: 'primary',
                btnClass: 'white',
            },
        ], leftButtonList: [
            {
                icon: icon.arrowBack,
                action: () => router.go(-1),
                color: 'secondary',
                btnClass: 'white',
            },
        ]
    }, AppBarType.CUSTOM);
})
onBeforeRouteLeave(() => {
    setFooterConfig({ show: true })
    setBar();
});

const router = useRouter()
const favAction = () => {
    console.log('favorite')
}

</script>

<style lang="scss">
.store-page {
    margin-top: -54px;
}
</style>