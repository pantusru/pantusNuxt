<template>
  <b-card-body class="p-0 break-avoid">
    <div class="shadow py-3 px-3" v-if="dataset.visible">
      <div class="d-flex justify-content-between">
        <nuxt-link
          class="text-e1002b link-danger text-decoration d-block mb-2 fz-4"
          :to="'/search?filter_categories=' + dataset.id"
          >{{ dataset.name }}
        </nuxt-link>
        <!--                <span-->
        <!--                    class="bg-transparent text-danger border-0 when-open">-->
        <!--                        <b-icon-arrow-down></b-icon-arrow-down>-->
        <!--                        {{ dataset.children.length }}-->
        <!--                </span>-->
      </div>
      <div class="mb-1" v-if="dataset.children.length != 0">
        <div v-for="data in dataset.children" :key="data.id">
          <nuxt-link
            class="text-decoration link-decoration-none text-dark pl-3 d-block"
            :to="'/search?filter_categories=' + data.id"
            >{{ data.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </b-card-body>
</template>

<script>
export default {
  name: "categories-blog-get",
  props: ["dataset"]
};
</script>
