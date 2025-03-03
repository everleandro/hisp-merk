<template>
  <div class="order-page">
    <e-tab-group v-model="store.statusSelected" color="secondary" class="py-3 white" grow>
      <e-tab v-for="(status, i) in ['Pending', 'Delivered', 'Cancelled']" :key="i" :value="i + 1" small> {{
        status }}
      </e-tab>
    </e-tab-group>
    <e-window v-model="store.statusSelected">
      <e-window-item v-for="i in 3" :key="i" :value="i">
        <e-row class="ma-0">
          <e-col v-for="j in 7" :key="j" :span="4">
            <card-order />
          </e-col>
        </e-row>
      </e-window-item>
    </e-window>
  </div>
</template>
<script lang="ts" setup>
const store = reactive({
  statusSelected: 1
})
</script>
<style lang="scss"></style>