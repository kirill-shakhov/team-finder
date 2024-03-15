<template>
  <div class="home-view">
    <app-header />

    <div class="home-view__body">
      <app-sidebar class="home-view__sidebar"/>

      <div class="home-view__content">
        1212
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppSidebar from '@/shared/components/AppSidebar/AppSidebar.vue';
import AppHeader from '@/shared/components/AppHeader/AppHeader.vue';
</script>

<style scoped lang="scss">
.home-view__body {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 10px 0px #0000001A;
  border-radius: 10px;
}

.home-view__sidebar {
  flex-basis: 291px;
  flex-grow: 1;
}

.home-view__content {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
  border-left: 1px solid $paleGrey;
  }
</style>