<template>
  <div>
    <div v-for="data in error" :key="data.id" class="error-full">
      <div
        v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"
        class="error"
      >
        {{ data.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-errors-valid",
  props: {
    /***
     * Состояния валидация для условия отображения ошибок
     */
    $v: {
      request: true
    },
    /**
     * Массив с выводом ошибок
     */
    error: {
      request: true,
      type: Array
    },
    /***
     * Название элемента который будет проверятся в $v
     */
    name: {
      request: true,
      type: String
    }
  }
};
</script>

<style></style>
