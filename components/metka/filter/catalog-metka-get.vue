<template>
  <div>
    <b-row no-gutters v-if="Metks.length !== 0">
      <Metka
        v-for="(data, index) in Metks.slice(0, countMetk)"
        :key="data.id"
        :link="data"
        :index="index"
      />
      <!--      <transition v-if="getAllMetka" class="transition">-->
      <template v-if="getAllMetka">
        <Metka
          v-for="(data, index) in Metks.slice(countMetk, Metks.length)"
          :key="data.id"
          :link="data"
          :index="index"
        />
      </template>

      <!--      </transition>-->
    </b-row>
    <base-button
      v-if="Metks.length > countMetk"
      @click="getAllMetka = !getAllMetka"
      >Все метки</base-button
    >
  </div>
</template>

<script>
import Metka from "@/components/metka/filter/index";
import BaseButton from "@/components/base/button/base-button";

export default {
  data() {
    return {
      getAllMetka: false,
      countMetk: 10
    };
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
