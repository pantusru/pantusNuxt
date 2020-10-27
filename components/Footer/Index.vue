<template>
<b-container>
  <b-row class="mt-5 pb-5">
    <footerPantusVue class="mb-lg-0 mb-md-5 mb-4" />
    <footerPaymentVue class="mb-4"/>
    <footerDeliveryVue class="mb-lg-0 mb-md-5 mb-4"/>
    <footerSocialVue class="mb-4"/>
  </b-row>
</b-container>
</template>

<script>
import footerPantusVue from "@/components/Footer/Pantus";
import footerPaymentVue from "@/components/Footer/Payment";
import footerDeliveryVue from "@/components/Footer/Delivery";
import footerSocialVue from "@/components/Footer/Social";
export default {
  components: {
    footerPantusVue,
    footerPaymentVue,
    footerDeliveryVue,
    footerSocialVue
  }
};
</script>
 
