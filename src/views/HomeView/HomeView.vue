<template>
  <div class="home-view">
    <app-header />
    <div class="home-view__body">
      <app-sidebar class="home-view__sidebar" />

      <div class="home-view__content">
        <profile-card
          v-if="currentUser"
          :user="currentUser"
        />

        <div class="home-view__message" v-else>
          Выберите сотрудника, чтобы посмотреть его профиль
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { AppHeader } from '@/shared/components/AppHeader';
import { AppSidebar } from '@/shared/components/AppSidebar';
import { ProfileCard } from '@/shared/components/ProfileCard';

import { computed, ComputedRef } from 'vue';
import { User } from '@/services/api/controllers';
import { store } from '@/store';

const currentUser: ComputedRef<User> = computed(() => store.getters['users/currentUser']);
</script>

<style scoped lang="scss">
.home-view__body {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 10px 0px #0000001A;
  border-radius: 10px;
  min-height: 575px;
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

.home-view__message {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: $lightGraphite;
}
</style>