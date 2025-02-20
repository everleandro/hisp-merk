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
  padding: 0;
  margin: 0;

  .e-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100vh;
  }
}
</style>