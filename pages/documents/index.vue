<template>
<b-container class="documents-main-block">
  <b-row>
    <b-col>
      <h1 class="long">Документы и реквизиты ООО "ПАНТУС"</h1>
      <h3>Перечень документов для заключения договора поставки:</h3>
      <ol>
        <li>ИНН/КПП – копия, заверенная основной печатью и подписью руководителя или иного уполномоченного лица </li>
        <li>ОГРН – копия, заверенная основной печатью и подписью руководителя или иного уполномоченного лица </li>
        <li>Устав – копия, заверенная основной печатью и подписью руководителя или иного уполномоченного лица </li>
        <li>Протокол (решение) о назначении руководителя организации – копия, заверенная основной печатью и подписью руководителя или иного уполномоченного лица </li>
        <li>Копия паспорта (ИП) </li>
        <li>Приказ о вступлении директора в должность и праве подписи – копия, заверенная основной печатью и подписью руководителя или иного уполномоченного лица </li>
      </ol>
    </b-col>
  </b-row>
  <b-row>
    <b-col>

      <span class="elem-file"> <a href="https://www.pantus.ru/upload/files/Договор ООО ПАНТУС (шаблон).doc">Договор ООО ПАНТУС (шаблон)</a>
		(DOC, 73 Кб) </span><br>
      <span class="elem-file"> <a href="https://www.pantus.ru/upload/files/Карта партнера ПАНТУС.doc">Карта партнера ПАНТУС</a>
		(DOC, 29 Кб) </span><br>
      <span class="elem-file"> <a href="https://www.pantus.ru/upload/files/Акт о возврате товара.xlsx">Акт о возврате товара</a> (XLSX, 11,75 Кб) </span>

    </b-col>
    <b-col>

        <span class="elem-file"> <a href="https://www.pantus.ru/documents/privacypolicy">Политика в отношении обработки персональных данных</a> </span><br>
        <span class="elem-file"> <a href="https://www.pantus.ru/documents/user-agreement/">Пользовательское соглашение</a> </span>

    </b-col>
  </b-row>
  <b-row class="my-4">
    <b-col>
      <h3>Общество с ограниченной ответственностью «ПАНТУС»</h3>
      <b>ОГРН:</b>  1116439004440 от 9 декабря 2011г. МРИ ФНС №2 по Саратовской области <br>
      <b>ИНН:</b>      6439077628      <br>
      <b>КПП:</b>      643901001      <br>
      <b>ОКПО:</b>      37773932      <br>
      <b>Юридический адрес:</b>      413840, Саратовская обл., г.Балаково, ул.Транспортная, д.6      <br>
      <b>Фактический и почтовый адрес:</b>      413840, Саратовская обл., г.Балаково, ул.Транспортная, д.6      <br>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <banner-special-action />
    </b-col>
  </b-row>

</b-container>
</template>

<script>
import bannerSpecialAction from '@/components/static/elements/banner-special-action/index'
export default {
name: "index",
  components: {
    bannerSpecialAction,
  },
}
</script>

<style scoped>
@import "assets/css/static-page-main.css";

.elem-file {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  padding-top: 6px;
  min-height: 60px;
}

.elem-file a {
  display: block;
}
.elem-file a:after {
  content: '';
  width: 18px;
  height: 22px;
  background: transparent url(https://www.pantus.ru/bitrix/templates/main/img/i/sprite.png) -56px -21px no-repeat;
  left: 0;
  position: absolute;
  top: 13px;
}

</style>
