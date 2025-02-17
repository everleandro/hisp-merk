<template>
    <div>
        <!-- <transition name="fade" mode="out-in"> -->
        <!-- <div :key="route.query.category as string"> -->
        <filter-product />
        <!-- </div> -->
        <!-- </transition> -->

        <e-window v-model="store.view" class="mt-3">
            <e-window-item :value="viewType.category">
                <filter-category grid @click:category="setCategory" />
            </e-window-item>
            <e-window-item :value="viewType.product">
                <e-row class="ma-0">
                    <e-col v-for="i in 12" :key="i" cols="12" md="6" lg="4" xl="3">
                        <product-card />
                    </e-col>
                </e-row>
            </e-window-item>
        </e-window>
    </div>
</template>
<script lang="ts" setup>
import type { TemporaryBar } from "~/types/temporary-bar";
import icons from "~/constants/icons";
const router = useRouter()
const route = useRoute()
enum viewType {
    product = 1,
    category = 2
}

const store = reactive({
    view: viewType.category
})
const setTempBarContent =
    inject<(newConfig: TemporaryBar | null) => void>("setTempBarContent");

watch(() => route.query, () => {
    if (setTempBarContent)
        if (route.query.category) {
            store.view = viewType.product
            setTempBarContent({
                title: route.query.category as string,
                leftButtonList: [
                    {
                        icon: icons.chevronLeft,
                        action: () => router.push('/discover'),
                    },
                ]
            });
        } else {
            store.view = viewType.category
            setTempBarContent(null)
        }
});
onBeforeRouteLeave(() => {
    if (setTempBarContent) setTempBarContent(null);
});
const setCategory = (id: string | number | null) => {
    router.push({ query: { category: id } })
}

</script>
<style lang="scss"></style>