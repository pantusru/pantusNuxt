<template>
  <div>
    <div @click="modalVisible = !modalVisible">
      <slot name="modal" />
    </div>

    <div id="myModal" v-if="modalVisible" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header-block">
          <span class="close" @click="modalVisible = !modalVisible">&times;</span>
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

  data(){
    return{
      modalVisible: false,
    }
  },

};
</script>

<style scoped>

.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
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
  width: 80%;
  max-width: 500px;
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
}
.modal-image-block {
  width: 80%;
  align-self: center;
  text-align: center;
}


</style>
