<template>
  <e-app type="empty-layout">
    <main>
      <e-container>
        <slot />
      </e-container>
    </main>
  </e-app>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.e-app[type="empty-layout"] {
  .e-container {
    margin-top: 40px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;
  }
}
</style>