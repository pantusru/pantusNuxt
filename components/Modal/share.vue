<template>
  <b-modal id="share" footer-class="justify-content-start">
    <template v-slot:modal-title>
        <h2>Поделиться</h2>  
    </template>
    <h4>Ссылка на товар</h4>
    <b-input :value="value" ref="input"></b-input>
    <template v-slot:modal-footer>
        <b-button 
            @click="shareLink"
            class="bg-danger border-0 px-5"
        >
            Копировать ссылку
        </b-button> 
    </template>
  </b-modal>
</template>

<script>
export default {
    data() {
        return {
            value: 'http://localhost:8000' + this.$route.fullPath,
        }
    },
    methods:{
        shareLink(){ // СПОРНОЕ РЕШЕНИЕ
           this.$refs.input.select();
           this.$clipboard(this.value);
           this.$refs.input.select();
        }
    }
}
</script>