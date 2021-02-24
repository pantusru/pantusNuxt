<template>
  <b-container>
    <div class="container-static">
      <b-row>
        <b-col class="content">
          <div class="d-flex align-content-center flex-wrap">
            <template v-for="item in certificates">
              <div
                :key="item.id"
                class="image-box"
                :class="[
                  {
                    'col-12 col-md-4': item.orientation === 'portrait',
                  },
                  {
                    'col-md-8 col-12': item.orientation === 'landscape',
                  },
                ]"
              >
                <div class="image-box__image">
                  <modal-img>
                    <template #modal>
                      <img
                        :src="item.image"
                        alt="img-sertificate"
                        :title="item.name"
                      />
                    </template>
                  </modal-img>
                  <div class="image-box__title">
                    <h4>{{ item.name }}</h4>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import modalImg from "@/components/static/elements/modal-img.vue";

export default {
  name: "Index",
  components: { modalImg },

  async fetch({ store }) {
    await store.dispatch("certificates/actionCertificates");
  },
  head() {
    return {
      title: "Дилерские сертификаты и свидетельства ООО Пантус",
      meta: [
        {
          name: "keywords",
          content: "дилерские свидетельства сертификаты пантус",
        },
        {
          name: "description",
          content:
            'Сертификаты и дилерские свидетельства ООО "Пантус" от производителей запчастей. Ознакомьтесь с документами подтверждающими наши дилерские полномочия',
        },
      ],
    };
  },
  computed: {
    certificates() {
      return this.$store.getters["certificates/getCertificates"];
    },
  },
};
</script>

<style scoped>
@import "assets/css/static-page-main.css";
.image-box {
  /*margin: 0 auto;*/
  padding: 10px;
  width: min-content;
}

.image-box__image {
  text-align: center;
}

.image-box__title {
  max-width: 90%;
  margin: 0 auto;
}

.item-image {
  width: auto;
  min-width: 300px;
  max-height: 450px;
  object-fit: contain;
}

@media screen and (max-width: 950px) {
  .item-image {
    width: 100%;
  }
}
</style>
