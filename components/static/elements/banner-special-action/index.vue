<template>

    <b-col class="special-action_banner ">
      <b-row class="">
        <b-col cols="5">

        </b-col>
        <b-col cols="7" class="special-action_text">

          <h2>Покупаете запчасти <span style="color:#C53B3E">оптом</span>?</h2>
          <h4><span style="color:#C53B3E">Специальное</span> предложение для оптовых покупателей</h4>
          <form action="/opt/" class="ng-pristine ng-valid">
            <input type="hidden"> <button style="margin-bottom:20px; margin-top:20px;" type="submit" class="btn red">Узнать подробнее</button>
          </form>

        </b-col>
      </b-row>
    </b-col>

</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped>
@import "assets/css/static-page-main.css";
.special-action_banner{
  margin-bottom: 40px;
  margin-top: 0px;
  padding: 40px 0px;
  background-image:  url(https://www.pantus.ru/upload/medialibrary/d76/pantus_opt_1_1.png);
  background-size: auto 100%;
  background-repeat: no-repeat;
  min-width: 320px;
  background-color: #E5F2FD;
}
.special-action_banner:before{

}

.btn.red {
  color: #fff !important;
  background: transparent url(https://www.pantus.ru/bitrix/templates/main/img/d/btn-red-bg.png) 50% 0 no-repeat;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.btn {
  display: inline-block;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  height: 32px;
  padding: 0 20px;
  outline: none;
  box-shadow: none;
  font-size: 12px;
  min-width: 161px;
}

.btn:hover{
  background-position: 50% -32px;
}

@media screen and (max-width: 760px) {
  .special-action_banner{
    background-position-x: -138px;
  }
  .special-action_text{
    padding-right: 30px;
  }
}
</style>
