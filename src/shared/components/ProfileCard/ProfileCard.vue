<template>
  <div class="profile-card">
    <div class="profile-card__image-wrap">
      <img src="@/assets/images/default-avatar.jpg" alt="avatar" class="profile-card__image">
    </div>

    <div class="profile-card__body">
      <div class="profile-card__name">{{ user.name }}</div>

      <div class="profile-card__email">
        <span class="profile-card__label">email:</span>
        <a href="mailto:Shanna@melissa.tv" class="profile-card__value">{{ user.email }}</a>
      </div>

      <div class="profile-card__phone">
        <span class="profile-card__label">phone:</span>
        <a href="tel:0106926593x09125" class="profile-card__value">{{ user.phone }}</a>
      </div>

      <div class="profile-card__description">
        <span class="profile-card__description-title">О себе:</span>
        <p class="profile-card__description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from './ProfileCard.types.ts';

defineProps<Props>();
</script>

<style scoped src="./ProfileCard.styles.scss" lang="scss"></style>