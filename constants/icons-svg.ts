const IconSvg = {
  Beauty: defineAsyncComponent(
    () => import("@/components/icon-svg/beauty.vue")
  ),
  Breckfast: defineAsyncComponent(
    () => import("@/components/icon-svg/breakfast.vue")
  ),
  Clothes: defineAsyncComponent(
    () => import("@/components/icon-svg/clothes.vue")
  ),
  Coffe: defineAsyncComponent(() => import("@/components/icon-svg/coffe.vue")),
  FastFood: defineAsyncComponent(
    () => import("@/components/icon-svg/fast-food.vue")
  ),
  Home: defineAsyncComponent(
    () => import("@/components/icon-svg/home.vue")
  ),
  Meat: defineAsyncComponent(() => import("@/components/icon-svg/meat.vue")),
  Pizza: defineAsyncComponent(() => import("@/components/icon-svg/pizza.vue")),
};
export default IconSvg;
