<template>
  <b-container class="pay-main-block">
    <b-row class="mx-0">
      <sidebar />

      <b-col class="content mt-3 ml-4">

        <b-row>
          <b-col class="title-block ">
            <h1>Оплата</h1>
            <h2>Способы оплаты</h2>
            <p>
              Вы можете оплатить заказ онлайн или при получении.
            </p>
            <p>
              В зависимости от выбранного способа доставки, региона и&nbsp;типа аккаунта (розничный или оптовый)
              некоторые способы доставки могут быть недоступны. Более точную информацию вы получите в процессе
              оформления заказа. Пожалуйста, свяжитесь с нами в случае возникновения вопросов через онлайн-чат или с
              помощью любых каналов связи из раздела
              <a href="/contacts/">Контакты</a><a href="/contacts/"></a>
            </p>
          </b-col>
        </b-row>

        <b-row class="payment-nav" cols="3">
          <b-col>

            <div class="icon-block">
              <a href="#cards"><img alt="Банковские карты" src="https://www.pantus.ru/media-library/payment/cards.png" title="Банковские карты"></a>
              <a href="#cash"><img src="https://www.pantus.ru/media-library/payment/cash.png" alt="Наличные" title="Наличные"></a>
              <a href="#bank"><img alt="Банковский перевод" src="https://www.pantus.ru/media-library/payment/bank.png" title="Банковский перевод"></a>
            </div>

            <h3><a href="#classic">Классические способы оплаты</a></h3>
            <ul>
              <li><a href="#cards">Банковская карта</a></li>
              <li><a href="#cash">Наличные</a></li>
              <li><a href="#bank">Банковский перевод</a></li>
            </ul>

          </b-col>
          <b-col>

            <div class="icon-block">
              <a href="#paypal"><img alt="PayPal" src="https://www.pantus.ru/media-library/payment/paypal.png" title="PayPal"></a>
              <a href="#ewalletsru"><img alt="Яндекс Деньги" src="https://www.pantus.ru/media-library/payment/yandexmoney.png" title="Яндекс Деньги"></a>
              <a href="#ewalletsru"><img alt="WebMoney" src="https://www.pantus.ru/media-library/payment/webmoney.png" title="WebMoney"></a>
              <a href="#ewalletsru"><img alt="QIWI Кошелек" src="https://www.pantus.ru/media-library/payment/qiwi.png" title="QIWI Кошелек"></a>
            </div>

            <h3><a href="#ewallets">Электронные кошельки</a></h3>
            <ul>
              <li><a href="#paypal">PayPal</a></li>
              <li><a href="#ewalletsru">Яндекс.Деньги</a></li>
              <li><a href="#ewalletsru">WebMoney</a></li>
              <li><a href="#ewalletsru">QIWI кошелек</a></li>
            </ul>

          </b-col>
          <b-col>

            <div class="icon-block">
              <a href="#internetbanks"><img alt="Интернет-банк Альфабанка" src="https://www.pantus.ru/media-library/payment/alfabank.png" title="Интернет-банк Альфабанка"></a>
              <a href="#internetbanks"><img alt="Интернет-банк ПромСвязьБанка" src="https://www.pantus.ru/media-library/payment/psb.png" title="Интернет-банк ПромСвязьБанка"></a>
              <a href="#internetbanks"><img alt="Интернет-банк ВТБ" src="https://www.pantus.ru/media-library/payment/vtb.png" title="Интернет-банк ВТБ"></a>
            </div>

            <h3><a href="#internetbanks">Интернет-банки</a></h3>
            <ul>
              <li><a href="#internetbanks">Альфа-Банк</a></li>
              <li><a href="#internetbanks">ВТБ</a></li>
              <li><a href="#internetbanks">ПромСвязьБанк</a></li>
            </ul>

          </b-col>

          <b-col>

            <div class="icon-block">
              <a href="#cellshops"><img alt="Сеть салонов Евросеть" src="https://www.pantus.ru/media-library/payment/euroset.png" title="Сеть салонов Евросеть"></a>
              <a href="#cellshops"><img alt="Сеть салонов Связной" src="https://www.pantus.ru/media-library/payment/svyaznoy.png" title="Сеть салонов Связной"></a>
            </div>

            <h3><a href="#cellshops">Салоны сотовой связи</a></h3>
              <ul>
                <li><a href="#cellshops">Евросеть</a></li>
                <li><a href="#cellshops">Связной</a></li>
              </ul>

          </b-col>

          <b-col>

            <div class="icon-block">
              <a href="#question"><img alt="Дополнительная информация по оплате" src="https://www.pantus.ru/media-library/payment/question.png" title="Дополнительная информация по оплате"></a>
            </div>
              <h3><a href="#question">Дополнительная информация</a></h3>
              <ul>
                <li><a href="#schedule">Условия предоставления отсрочки</a></li>
                <li><a href="#bug">Ошибка при оплате</a></li>
              </ul>

          </b-col>

          <b-col>

          </b-col>

        </b-row>

        <b-row class="mt-4">
          <b-col class="payment-description">
            <h2><a name="classic">Классические способы оплаты</a></h2>
            <ul>
              <li>
                <h3><a name="cards">Банковская карта</a></h3>
              </li>
              <p>
                Оплата банковской картой доступна на сайте через систему электронных платежей. Также можно оплатить заказ картой при получении, если вы выбрали СДЭК, DPD и некоторые другие службы экспресс-доставки. Оплата товара банковской картой при получении может незначительно увеличить общую стоимость заказа.
              </p>
              <li>
                <h3><a name="cash">Наличные</a></h3>
              </li>
              <p>
                Вы можете оплатить заказ наличными при получении, если этот способ оплаты доступен на этапе оформления заказа. Просим принят во внимание, что при отправке почтой или другими службами экспресс-доставки наложенный платеж может незначительно увеличить общую стоимость заказа. В случае отправления крупных посылок в отдалёненные от склада регионы способ доставки может быть изменен нашим сотрудником на онлайн-предоплату.
              </p>
              <li>
                <a name="bank"></a>
                <h3><a name="bank">Банковский перевод</a></h3>
              </li>
              <p>
                Оплата товара банковским переводом доступна как для юридических, так и для физических лиц. Данный способ оплаты доступен для любого способа доставки. Просто укажите данный способ при оформлении заказа и мы пришлем выставим вам счет на оплату, который вы сможете получить по электронной почте или скачать в личном кабинете на странице вашего заказа.
              </p>
            </ul>
            <h2><a name="internetbanks">Интернет-банки: Альфабанк, ПромСвязьБанк или ВТБ</a></h2>
            <ul>
              <li>
                <p>
                  Для оплаты заказа через личный кабинеты банков Альфабанк, ПромСвязьБанк или ВТБ на странице оформления заказа выберите способ <b>Оплата онлайн (банковская карта, электронные деньги и другие способы оплаты).&nbsp;</b>После подтверждения заказа вы сможете перейти к оплате и выбрать ваш банк. Затем вам нужно будет указать ваш логин в интернет-банке, после чего вы будете автоматически переадресованы на страницу входа в интернет-банк, а после авторизации сможете оплатить подготовленный счет в личном кабинете вашего банка.
                </p>
              </li>
            </ul>
            <h2><a name="ewallets">Электронные кошельки</a></h2>
            <ul>
              <li>
                <h3><a name="paypal">PayPal</a></h3>
              </li>
              <p>
                Для оплаты вашего заказа с помощью PayPal укажите данный способ при оформлении заказа. Если этот способ на этапе оформления заказа не доступен, укажите "Оплата онлайн (банковская карта, электронные деньги и другие способы оплаты)" и напишите в комментарии к заказу о вашем желании оплатить заказ с помощью PayPal.
              </p>
              <p>
                После подтверждения заказа вы получите запрос на получение платежа в системе PayPal и на вашу электронную почту.
              </p>
              <li>
                <h3><a name="ewalletsru">Яндекс.Деньги, WebMoney и QIWI</a></h3>
              </li>
              <p>
                Для оплаты заказа с помощью электронных кошельков Яндекс.Деньги, Webmoney&nbsp;&nbsp;или QIWI на странице оформления заказа выберите способ <b>Оплата онлайн (банковская карта, электронные деньги и другие способы оплаты).&nbsp;</b>После подтверждения заказа вы сможете перейти к оплате и выбрать нужную систему. Затем вы будете автоматически переадресованы на страницу оплаты, а после заполнения ваших платежных данных сможете оплатить заказ.
              </p>
            </ul>
            <h2><a name="cellshops">Салоны связи: Евросеть и Связной</a></h2>
            <ul>
              <li>
                <p>
                  Для оплаты заказа в салоне связи на странице оформления заказа выберите способ <b>Оплата онлайн (банковская карта, электронные деньги и другие способы оплаты).&nbsp;</b>После подтверждения заказа вы сможете перейти к оплате и выбрать сеть, которая вам больше подходит. Затем вам нужно будет указать ваш номер телефона, после чего вы будете автоматически переадресованы на страницу создания квитанции (код требования), вы сможете сразу посмотреть и распечатать ее на этой странице или сделать это позже по ссылке в вашей электронной почте.
                </p>
              </li>
            </ul>
            <h2><a name="question">Дополнительная информация по оплате</a></h2>
            <ul>
              <li>
                <h3><a name="schedule">Условия предоставления отсрочки</a></h3>
              </li>
              <p>
                Оплата с отсрочкой доступна для оптовых клиентов после заключения договора поставки, либо после предоставлении гарантийного письма. Срок и условия предоставления отсрочки подлежат согласованию в каждом случае. До момента письменного согласования и утверждения условий отсрочки компания "ПАНТУС" оставляет за собой право отказать в предоставлении отсрочки платежа без объяснения причин.
              </p>
              <li>
                <h3><a name="bug">Ошибки при оплате</a></h3>
              </li>
              <p>
                Если на этапе оплаты возникнет техническая ошибка, или у вас появятся дополнительные вопросы, пожалуйста свяжитесь со службой клиентской поддержки по контактам указанным ниже:
              </p>
              - <a href="mailto:support@pantus.ru">support@pantus.ru</a><br>
              - 8 800 555 8721 доб. 194
            </ul>
          </b-col>
        </b-row>


      </b-col>


    </b-row>
  </b-container>
</template>

<script>
import sidebar from "@/components/sidebar/index";

export default {
  name: "index",
  components: {
    sidebar,
  },
};
</script>

<style scoped>

@import "assets/css/static-page-main.css";

/** {*/
/*  border: 1px black solid;*/
/*}*/

.icon-block{
  margin: 10px 0;
}
.icon-block img{
  max-height: 25px;
  width: auto;
  object-fit: contain;
}

.payment-description a{
  text-decoration: none;
}
.payment-description p{
  line-height: 22px;
}

.payment-description h2{
  margin-bottom: 20px;
}
.payment-description h2 a, .title-block h2{
  color: #9a001d;
}

</style>
