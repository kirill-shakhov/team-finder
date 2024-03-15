<template>
  <header class="app-header">
    <h1 class="app-header__title">
      Жилфонд
    </h1>

    <h2 class="app-header__text">
      Пользователь
    </h2>
  </header>
</template>

<style scoped lang="scss">
  .app-header{
    padding: 50px 0 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include tablet{
      flex-direction: row;
    }
  }

  .app-header__title {
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    color: $primary;
  }

  .app-header__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: $darkGrey;
  }
</style>