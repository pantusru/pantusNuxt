<template>
  <div>
    <div @click="get = true">
      <slot name="click" />
    </div>
    <div v-if="get" class="modal-img-wrapper">
      <div class="exit-modal-img" @click="get = false">X</div>
      <slot name="modal" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalImg",
  data() {
    return {
      get: false,
    };
  },
};
</script>

<style scoped>
.modal-img-wrapper {
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.exit-modal-img {
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 25px;
  background: #fff;
  color: #9a001d;
}
</style>
