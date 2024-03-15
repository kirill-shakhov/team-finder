<template>
  <div class="user-mini-card">
    <div class="user-mini-card__image-wrap">
      <img
        src="@/assets/images/default-mini-avatar.jpg"
        alt="avatar"
        class="user-mini-card__img">
    </div>

    <div class="user-mini-card__body">
      <div class="user-mini-card__user-name">{{ name }}</div>
      <div class="user-mini-card__email">{{ email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserMiniCardProps } from '@/shared/components/UserMiniCard/UserMiniCard.types.ts';

defineProps<UserMiniCardProps>();

</script>

<style scoped src="./UserMiniCard.styles.scss" lang="scss"></style>