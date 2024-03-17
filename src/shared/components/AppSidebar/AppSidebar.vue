<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__wrapper">
      <h3 class="app-sidebar__results-title app-sidebar__title">Поиск сотрудников</h3>

      <ui-input
        v-model:value="inputSearchValue"
        name="inputSearchValue"
        placeholder="Введите Id или имя"
        :error-message="errorMessage"
        type="text"
        @input="handleInputChange"
      />
    </div>


    <div class="app-sidebar__wrapper">
      <h3 class="app-sidebar__results-title app-sidebar__title">Результаты</h3>
      <search-results-list
        v-if="users"
        :users="users"
      />
      <div
        v-else
        class="app-sidebar__results-message">начните поиск
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { useAppSidebar } from '@/shared/components/AppSidebar/AppSidebar.composables.ts';
import { SearchResultsList } from '@/shared/components/SearchResultsList';
import { UiInput } from '@/shared/components/UiInput';

const { inputSearchValue, handleInputChange, errorMessage, users } = useAppSidebar();


</script>

<style scoped lang="scss">

.app-sidebar {
  padding: 27px 31px;
  display: flex;
  flex-direction: column;
  gap: 29px;

  @include tablet {
    padding: 27px 31px 27px 20px;
  }
}

.app-sidebar__wrapper {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.app-sidebar__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}

.app-sidebar__results-message {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: $lightGraphite;
}
</style>