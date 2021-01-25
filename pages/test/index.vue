<template>
  <div>
    <b-container>
      <test component_tag="table" class="table-product">
        <thead class="table-product-thead">
          <tr>
            <th class="table-product-th">Бренд</th>
            <th class="table-product-th">Артикул</th>
            <th class="table-product-th">изоб</th>
            <th class="table-product-th">Наименование</th>
            <th class="table-product-th">Поставщик</th>
            <th class="table-product-th">Наличие</th>
            <th class="table-product-th">Срок</th>
            <th class="table-product-th">Цена</th>
            <th class="table-product-th">Виды</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-product-tr">
            <td class="table-product-td">
              <nuxt-link to="/" class="table-product-brand trim-text">
                Ассоциация Балаковских Производителей Автозапчастей
              </nuxt-link>
            </td>
            <td class="table-product-td">
              <div class="table-product-name trim-text">10036560ASP</div>
            </td>
            <td class="table-product-td">
              <img
                class="table-product-img"
                :src="require('@/assets/img/advantage/feature-new-01.png')"
                alt=""
              />
            </td>
            <td class="table-product-td">
              <div class="table-product-name trim-text">
                Прокладка бензонасоса ВАЗ 21082 силикон синий
              </div>
            </td>
            <td class="table-product-td">Пантус</td>
            <td class="table-product-td">114 шт</td>
            <td class="table-product-td">Сегодня</td>
            <td class="table-product-td">154.20р</td>
            <td class="table-product-td">
              <button>Купить</button>
            </td>
          </tr>
          <tr class="table-product-tr">
            <td rowspan="3" class="table-product-td">
              <span class="table-product-brand trim-text"> Ассоциация </span>
            </td>
            <td rowspan="3" class="table-product-td">
              <div class="table-product-name trim-text">10036560ASP</div>
            </td>
            <td rowspan="3" class="table-product-td">
              <img
                class="table-product-img"
                :src="require('@/assets/img/advantage/feature-new-01.png')"
                alt=""
              />
            </td>
            <td rowspan="3" class="table-product-td">
              <div class="table-product-name trim-text">
                Прокладка бензонасоса ВАЗ 21082 силикон синий
              </div>
            </td>
            <td class="table-product-td">Пантус</td>
            <td class="table-product-td">114 шт</td>
            <td class="table-product-td">Сегодня</td>
            <td class="table-product-td">154.20р</td>
            <td class="table-product-td">
              <button class="button-product-buy">Купить</button>
            </td>
          </tr>
          <tr class="table-product-tr">
            <td class="table-product-td">Пантус</td>
            <td class="table-product-td">114 шт</td>
            <td class="table-product-td">Сегодня</td>
            <td class="table-product-td">154.20р</td>
            <td class="table-product-td">
              <button class="button-product-buy">Купить</button>
            </td>
          </tr>
        </tbody>
      </test>
    </b-container>
    <modal-img>
      <template #click>Нажми меня</template>
      <template #modal>
        <img
          src="https://www.pantus.ru/about/certificates/sertificate/pao_brt.jpg"
          alt=""
      /></template>
    </modal-img>
  </div>
</template>

<script>
import test from "@/components/test/test";
export default {
  name: "TestView",
  components: {
    test,
  },
};
</script>

<style lang="sass">
@import "assets/sass/table/table-product-card"
@import "assets/sass/button/button-product-buy"
@import "assets/sass/special-class/trim-text"
</style>
