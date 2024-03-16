<template>
  <div v-if="users.length > 0" class="search-results-list">
    <TransitionGroup name="list">
      <div v-for="(user, index) in users"
           :key="index">
        <user-mini-card
          :name="user.name"
          :email="user.email"
          :class="{ active: selectedUser === index }"
          @click="handleClickOption(index, user)"
        />
      </div>
    </TransitionGroup>
  </div>
  <div v-if="users.length === 0" class="search-results-list-message">ничего не найдено</div>
</template>
<script setup lang="ts">
import UserMiniCard from '@/shared/components/UserMiniCard/UserMiniCard.vue';
import { useSearchResultsList } from '@/shared/components/SearchResultsList/SearchResultsList.composables.ts';
import { Props } from '@/shared/components/SearchResultsList/SearchResultsList.types.ts';


defineProps<Props>();

const { handleClickOption, selectedUser } = useSearchResultsList();


</script>

<style scoped lang="scss">

.search-results-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.search-results-list-message {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: $lightGraphite;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px); /* Изменено с translateX на translateY */
}

</style>