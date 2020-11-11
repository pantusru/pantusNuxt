<template>
  <b-container>
    <section>
      <b-row>
        <b-col v-for="data in block" :key="data.id">
          <!-- link -->
          <a :href="data.href" v-if="data.CheckLink == true">
            <div><b-img :src="data.src" :alt="data.alt" /></div>
            <h2>
              {{ data.title }}
              <span>{{ data.titleDop }} </span>
            </h2>
          </a>
          <!-- not link -->
          <div v-else>
            <b-col><b-img :src="data.src" :alt="data.alt" /></b-col>
            <h2>
              {{ data.title }}
              <span>{{ data.titleDop }} </span>
            </h2>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <nuxt-link to="">

          </nuxt-link>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      block: [
        {
          CheckLink: false,
          title: "БОЛЕЕ",
          titleDop: "22 000",
          text: "автозапчастей в каталогах",
          src: require("@img/advantage/feature-new-01.png"),
          alt: "1",
          href: "",
        },
        {
          CheckLink: false,
          title: "ДОСТАВКА",
          titleDop: "ПО ВСЕМУ МИРУ",
          text: "  От 0 руб. по России",
          src: require("@img/advantage/feature-new-02.png"),
          alt: "2",
          href: "",
        },
        {
          CheckLink: false,
          title: "ИНДИВИДУАЛЬНОЕ",
          titleDop: "",
          text: "производство деталей",
          src: require("@img/advantage/feature-new-03.png"),
          alt: "3",
          href: "",
        },
        {
          CheckLink: false,
          title: "Способов оплаты",
          titleDop: "20",
          text: "с возможностью отсрочки и оплаты при получении",
          src: require("@img/advantage/feature-new-04.png"),
          alt: "4",
          href: "",
        },
      ],
    };
  },
};
</script>
