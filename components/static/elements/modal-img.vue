<template>
  <div>
    <div @click="modalVisible = !modalVisible">
      <slot name="modal" />
    </div>

    <div v-if="modalVisible" id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header-block">
          <span class="close" @click="modalVisible = !modalVisible"
            >&times;</span
          >
        </div>
        <div class="modal-image-block">
          <slot name="modal" class="modal-content" />
        </div>
        <slot name="text-description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalImg",

  data() {
    return {
      modalVisible: false,
    };
  },
};
</script>

<style>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 3%; /* Location of the box */
  padding-bottom: 3%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: fit-content;
  height: 100%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header-block {
  text-align: end;
  margin-bottom: 10px;
}
.modal-image-block {
  align-self: center;
  text-align: center;
  height: 95%;
  width: 100%;
  display: flex;
}

.modal-image-block img {
  max-height: 100% !important;
  max-width: 100% !important;
  object-fit: contain !important;
}

@media screen and (max-width: 760px) {
  .modal-content {
    height: fit-content;
    top: 25%;
    width: 95%;
  }
}
</style>
