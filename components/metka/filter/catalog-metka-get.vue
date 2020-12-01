<template>
  <div>
    <b-row no-gutters v-if="Metks.length !== 0">
      <Metka
        v-for="(data, index) in Metks.slice(0, countMetka)"
        :key="data.id"
        :link="data"
        :index="index"
      />
      <!--      <transition v-if="getAllMetka" class="transition">-->
      <template v-if="getAllMetka">
        <Metka
          v-for="(data, index) in Metks.slice(countMetka, Metks.length)"
          :key="data.id"
          :link="data"
          :index="index"
        />
      </template>
    </b-row>
    <base-button v-if="Metks.length > countMetka" @click="GetShowAllMetka">{{
      BntAllMetkaText
    }}</base-button>
  </div>
</template>

<script>
import Metka from "@/components/metka/filter/index";
import BaseButton from "@/components/base/button/base-button";

export default {
  data() {
    return {
      getAllMetka: false,
      countMetka: 10,
      BntAllMetkaText: "Показать все метки"
    };
  },
  methods: {
    GetShowAllMetka() {
      if (this.getAllMetka === true) {
        this.getAllMetka = false;
        this.BntAllMetkaText = "Показать все метки";
      } else if (this.getAllMetka === false) {
        this.getAllMetka = true;
        this.BntAllMetkaText = "Скрыть все метки";
      }
    }
  },
  computed: {
    Metks() {
      return this.$store.getters["Catalog/Metks/GetMetks"];
    }
  },
  components: {
    BaseButton,
    Metka
  }
};
</script>

<style></style>
