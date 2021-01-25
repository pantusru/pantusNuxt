<template>
  <b-container>
    <div class="container-static">
      <b-row>
        <b-col class="content">

          <modal-img>
            <template #modal>
              <img src="https://www.pantus.ru/about/certificates/sertificate/pao_brt.jpg"
                   alt="img-sertificate"
                   title="pao_brt"
              />
            </template>
          </modal-img>

          <modal-img>
            <template #modal>
              <img src="https://www.pantus.ru/about/certificates/sertificate/pao_brt.jpg"
                   alt="img-sertificate"
                   title="pao_brt"
              />
            </template>
          </modal-img>

        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import modalImg from "@/components/static/elements/modal-img.vue";

export default {
  name: "index",
  components: { modalImg },
};
</script>

<style scoped>
@import "assets/css/static-page-main.css";

.content img {
  width: 100px;
  height: auto;
}


</style>
