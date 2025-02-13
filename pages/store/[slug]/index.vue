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
useBarBlured()
const { setFooterConfig } = useFooter()
const { setBar } = useBarTemporary()
onMounted(() => {
    setFooterConfig({ show: false })
    setBar({
        title: '',
        rigthButtonList: [
            {
                icon: icon.hearth,
                action: () => favAction,
                color: 'primary',
            },
        ], leftButtonList: [
            {
                icon: icon.chevronLeft,
                action: () => router.go(-1),
                color: 'white',
            },
        ]
    });
})
onBeforeRouteLeave(() => {
    setFooterConfig({ show: true })
});

const router = useRouter()
const favAction = () => {
    console.log('favorite')
}

</script>

<style lang="scss"></style>