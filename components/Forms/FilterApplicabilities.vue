<template>
    <div class="mb-4">
        <button @click.prevent="showAll=true" v-show="showAll === false" :class="BntClass">Указать применяемость</button>
        <b-card v-show="showAll == true" class="text-666 border-e1 bg-transparen" no-body>
            <b-card-body class="px-3 py-2">
            <span @click="showAll=false" class="cursor-pointer link-danger">
                Указать применяемость
                <b-icon-arrow-up></b-icon-arrow-up>
            </span>
            <div class="mt-3 mb-2">
                <Vpanel/>
            </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import Vpanel from "@/components/Search/PanelApplicabilities/panel"
export default {
  data() {
    return {
        BntClass: "text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-2 cursor-pointer" ,
        showAll: false,
    }
  },
  components:{
      Vpanel,
  }
};
</script>

<style>
</style>