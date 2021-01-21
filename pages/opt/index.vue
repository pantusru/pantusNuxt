<template>
  <div class="container-static">
    <div class="promocontainer">
      <!-- промо шапка -->
      <div class="promofullwidth promocenterpict">
        <div class="promocoverblack">
          <div class="container">
            <div class="promocontent">
              <div class="promohead">
                <h2>
                  <b>
                    Покупайте автозапчасти оптом с доставкой<br>
                    от 0 рублей по России и СНГ без аванса
                  </b>
                </h2>
                <p style="font-size: 24px">
                  Более 1 000 000 SKU для легковых и грузовых отечественных
                  автомобилей и легковых иномарок
                </p>
                <p style="font-size: 20px">
                  Создайте аккаунт оптового клиента, чтобы получить<br>
                  доступ к полному оптовому прайсу
                </p>
                <nuxt-link
                  to="/register"
                  type="button"
                  class="createaccountbutton"
                >
                  Cоздать аккаунт
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="promofullwidth promorightpict">
        <div class="antipicture">
          <div class="container">
            <div class="promocontent">
              <div id="anti-shadow-div">
                <div class="promoblock_left-wrap">
                  <div class="promoblock_left">
                    <div>
                      <h2>
                        Поставляем 30 000 000 автозапчастей в год по всей России
                        собственным транспортом
                      </h2>
                      <ul class="w-75">
                        <li>
                          <b
                            >ЛЕГКОВЫЕ ОТЕЧЕСТВЕННЫЕ, ГРУЗОВЫЕ АВТОМОБИЛИ И
                            ИНОМАРКИ</b
                          ><br>
                          Запчасти и компоненты для автомобилей ВАЗ, ГАЗ, ЗАЗ,
                          УАЗ, ИЖ, ЛУАЗ, АЗЛК, ЗИЛ, МАЗ, КАМАЗ, Kia, Renault,
                          Hyundai, Daewoo, Toyota, BMW, Mercedes-Benz и многих
                          других в наличии на наших складах и складах наших
                          поставщиков
                        </li>
                        <li>
                          <b>1 000 000 НАИМЕНОВАНИЙ ТОВАРОВ В АССОРТИМЕНТЕ</b
                          ><br>
                          Автозапчасти, РТИ, автопластик, расходники и
                          автохимия: от охлаждающих жидкостей до стоек
                          амортизатора и крупноузловых элементов
                        </li>
                        <li>
                          <b
                            >5 ЭКСКЛЮЗИВНЫХ БРЕНДОВ АВТОЗАПЧАСТЕЙ И
                            КОМПОНЕНТОВ</b
                          ><br>
                          Производим товары под собственным брендом Pantus, а
                          также являемся официальными представителями торговых
                          марок A-Sport, RTD, Fra-Roi и Isang в России
                        </li>
                      </ul>
                      <img
                        src="https://www.pantus.ru/opt/media/promobrands.png"
                        class="promobrand d-none d-lg-block w-75"
                      >
                      <img
                        src="https://www.pantus.ru/opt/media/promobrands_mob.png"
                        class="promobrandmob d-block d-lg-none w-75"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="promosliderblock">
          <h2 style="text-align: center">
            Официально представляем 45 производителей автозапчастей
          </h2>
          <div class="promoslidercontainer">
            <VueSlickCarousel class="opt-claider" v-bind="settings">
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/vrt.jpg"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве ВРТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/vrt.jpg"
                    title="Пантус - сертификат о дилерстве ВРТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/vrt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/bmrt.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве БМРТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/bmrt.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве БМРТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/bmrt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/kzate.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве КЗАТЭ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/kzate.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве КЗАТЭ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/kzate.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/resinotechnika.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве РТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/resinotechnika.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве РТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/resinotechnika.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/ptp.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве ПТП64"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/ptp.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве ПТП64"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/ptp.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/brt.jpg"
                  class="popupsingle"
                  tabindex="0"
                >
                  <img
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/brt.jpg"
                    class="cert"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/brt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/ss20.jpg"
                  class="popupsingle"
                  tabindex="0"
                >
                  <img
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/ss20.jpg"
                    class="cert"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/ss20.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/soate.jpg"
                  class="popupsingle"
                  tabindex="0"
                >
                  <img
                    alt="Сертификат официального дилера ЗАО «СОАТЭ»"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/soate.jpg"
                    class="cert"
                    title="Сертификат официального дилера ЗАО «СОАТЭ»"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/soate.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/sevi.jpg"
                  class="popupsingle"
                  tabindex="0"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве Сэви"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/sevi.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве Сэви"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/sevi.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/bzak.jpg"
                  class="popupsingle"
                  tabindex="0"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве БЗАК"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/bzak.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве БЗАК"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/bzak.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/trek.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве УРАЛАТИ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/trek.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве УРАЛАТИ"
                  >
                </a>
                <img src="https://www.pantus.ru//opt/media/suppliers/trek.png"
                     class="logo-icon" alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/vrt.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве ВРТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/vrt.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве ВРТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/vrt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/bmrt.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве БМРТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/bmrt.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве БМРТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/bmrt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/kzate.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве КЗАТЭ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/kzate.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве КЗАТЭ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/kzate.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/resinotechnika.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве РТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/resinotechnika.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве РТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/resinotechnika.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/ptp.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве ПТП64"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/ptp.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве ПТП64"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/ptp.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/brt.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/brt.jpg"
                    class="cert"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/brt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/ss20.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/ss20.jpg"
                    class="cert"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/ss20.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/soate.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Сертификат официального дилера ЗАО «СОАТЭ»"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/soate.jpg"
                    class="cert"
                    title="Сертификат официального дилера ЗАО «СОАТЭ»"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/soate.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/sevi.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве Сэви"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/sevi.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве Сэви"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/sevi.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/bzak.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве БЗАК"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/bzak.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве БЗАК"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/bzak.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/trek.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве УРАЛАТИ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/trek.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве УРАЛАТИ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/trek.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/vrt.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве ВРТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/vrt.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве ВРТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/vrt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/bmrt.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве БМРТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/bmrt.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве БМРТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/bmrt.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/kzate.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве КЗАТЭ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/kzate.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве КЗАТЭ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/kzate.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/resinotechnika.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве РТ"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/resinotechnika.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве РТ"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/resinotechnika.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
              <div class="item" style="width: 100%; display: inline-block">
                <a
                  href="https://www.pantus.ru//opt/media/suppliers/certificates/ptp.jpg"
                  class="popupsingle"
                  tabindex="-1"
                >
                  <img
                    alt="Пантус - сертификат о дилерстве ПТП64"
                    src="https://www.pantus.ru//opt/media/suppliers/certificates/ptp.jpg"
                    class="cert"
                    title="Пантус - сертификат о дилерстве ПТП64"
                  >
                </a>
                <img
                  src="https://www.pantus.ru//opt/media/suppliers/ptp.png"
                  class="logo-icon"
                  alt=""
                >
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>


    <div class="promofullwidth promoleftpict">
      <div class="container promodelivery">
        <div style="text-align: center">
          <h2 class="mt-3 text-left">
            Бесплатно доставляем заказы в 140 городов России, 5 городов
            Казахстана
            и не берем деньги за доставку до терминала транспортной компании
          </h2>
        </div>
        <div class="promotruck" />
        <div style="display: flex; justify-content: flex-end">
          <div class="deliverymethod text-right">
            <h3 class="text-center">Способы доставки:</h3>
            <p class="w-75 ml-auto">
              В распоряжении нашей транспортной службы 43 грузовых автомобиля, а
              в случае необходимости мы отправим товар любой службой доставки,
              доступной на территории нашей страны
            </p>
            <div class="justify-content-sm-end row">
                <div class="col-sm-4">
                  <p>
                    <strong
                    ><span style="color: #e1002c">Бесплатная</span> доставка
                      нашим транспортом</strong
                    >
                  </p>
                  <ul>
                    <li>
                      <nuxt-link to="/contacts/goroda"
                      >Список городов</nuxt-link
                      >
                    </li>
                    <li>
                      <a href="https://www.pantus.ru//delivery/#freedelivery"
                      >Условия</a
                      >
                    </li>
                  </ul>
                  <p>
                    <strong>Филиалы и пункты самовывоза</strong>
                  </p>
                  <div style="display: block">
                    <div style="display: inline-block; margin-right: 30px">
                      <ul>
                        <li>Москва</li>
                        <li>Тольятти</li>
                      </ul>
                    </div>
                    <div style="display: inline-block">
                      <ul>
                        <li>Балаково</li>
                        <li>Астрахань</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    <strong>Другие способы доставки</strong><br>
                    Если вы не нашли в списке удобный для вас способ доставки, мы
                    рассмотрим возможность доставки вашего заказа другим
                    подходящим вам способом. Просто укажите в комментарии к заказу
                    ваши предпочтения.
                  </p>
                </div>
                <div class="col-sm-4">
                  <p>
                    <strong
                    >Службы экспресс доставки и транспортные компании</strong
                    >
                  </p>
                  <div style="display: block">
                    <div style="display: inline-block; margin-right: 30px">
                      <ul>
                        <li>СДЭК</li>
                        <li>DPD</li>
                        <li>Почта РФ</li>
                        <li>Деловые линии</li>
                      </ul>
                    </div>
                    <div style="display: inline-block; vertical-align: top">
                      <ul>
                        <li>ПЭК</li>
                        <li>Энергия</li>
                        <li>Байкал сервис</li>
                      </ul>
                    </div>
                  </div>
                  <div class="">
                    <img style="width: 50px;" src="https://www.pantus.ru/opt/media/ds1.png">
                    <img style="width: 50px;" src="https://www.pantus.ru/opt/media/ds2.png">
                    <img style="width: 76px;" src="https://www.pantus.ru/opt/media/ds3.png"><br>
                    <img style="width: 200px;" src="https://www.pantus.ru/opt/media/ds4.png">
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="deliverycta">
        <h3>
          Создайте аккаунт оптового клиента и получите <br>
          доступ к оптовому прайсу
        </h3>
        <button
          onclick="location.href='/auth/?register=yes&amp;opt=yes'"
          type="button"
          class="createaccountbutton"
        >
          Cоздать аккаунт
        </button>
      </div>
    </div>
    <div class="promofullwidth promogradient">
      <div class="container promoadvantage">
        <div style="text-align: center">
          <h2 class="mt-3">Помогаем зарабатывать <strong>больше, быстрее</strong></h2>
        </div>
        <div class="promoadvantagecontainer">
          <!--контейнер флекс для всего -->
          <div class="advantages">
            <!-- блок с предложениями -->
            <div class="advantage">
              <img src="https://www.pantus.ru/opt/media/pr14.png">
              <p>
                Острочка платежа<br>
                Отгрузка без аванса
              </p>
            </div>
            <div class="advantage">
              <img src="https://www.pantus.ru/opt/media/pr-edo.png">
              <p>
                Электронный<br>
                документооборот
              </p>
            </div>
            <div class="advantage">
              <img src="https://www.pantus.ru/opt/media/pr-doc.png">
              <p>
                Онлайн<br>
                остатки и цены
              </p>
            </div>
            <div class="advantage">
              <img src="https://www.pantus.ru/opt/media/adpirojok.png">
              <p>
                Оформляйте заказ там,<br>
                где вам удобно
              </p>
            </div>
          </div>
          <div class="advantagesgallery">
            <div class="gallerymims popupgallery">
              <!-- блок с галереей -->
              <a
                href="https://www.pantus.ru/upload/medialibrary/26f/031-IMG_4809-5000.jpg"
              >
                <img src="https://www.pantus.ru/opt/media/gallery/first/1.jpg">
              </a>
              <a
                href="www.pantus.ru/upload/medialibrary/26f/024-IMG_4798-5000.jpg"
              >
                <img src="https://www.pantus.ru/opt/media/gallery/first/2.jpg">
              </a>
              <a
                href="https://www.pantus.ru/upload/medialibrary/26f/027-IMG_4805-5000.jpg"
              >
                <img src="https://www.pantus.ru/opt/media/gallery/first/3.jpg">
              </a>
              <a href="https://www.pantus.ru/media/gallery/first/mims2018.jpg">
                <img src="https://www.pantus.ru/media/gallery/first/4.jpg">
              </a>
            </div>
            <div>
              <div style="text-align: center">
                <p>МИМС Автомеханика 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="promofullwidth">
      <div class="promotestimonials">
        <div style="text-align: center">
          <!-- компании с которыми работаем -->
          <h2>Работаем с крупными игроками</h2>
          <div class="promotestimonialscontainer">
            <div class="bigplayers">
              <img src="https://www.pantus.ru/opt/media/brands/pr-armtek.png">
              <img src="https://www.pantus.ru/opt/media/brands/pr-autodoc.png">
              <img src="https://www.pantus.ru/opt/media/brands/pr-avtoto.png">
              <img src="https://www.pantus.ru/opt/media/brands/pr-emex.png">
              <img src="https://www.pantus.ru/opt/media/brands/pr-exist.png">
              <img src="https://www.pantus.ru/opt/media/brands/pr-pasker.png">
              <img src="https://www.pantus.ru/opt/media/brands/pr-partcom.png">
            </div>
            <p style="margin-bottom: 30px">
              И еще более чем с 2 000 компаний разного размера
            </p>
            <h2>Отзывы клиентов</h2>
            <div class="clientsays">
              <!-- блок с отзывами -->
              <div class="testimonial">
                <div style="display: flex; flex-flow: row">
                  <div>
                    <img
                      src="https://www.pantus.ru/opt/media/testimonials/mariam.jpg"
                    >
                  </div>
                  <p>
                    <strong>Марина Абдуалева</strong><br>
                    <br>
                    Деловой партнер<br>
                    ООО «ПАНТУС»<br>
                    (г. Грозный)
                  </p>
                </div>
                <div>
                  <p>
                    С ООО «ПАНТУС» мы сотрудничаем с 2012 года. Доставка груза
                    происходит в один и тот же день, что очень удобно клиентам.
                    Груз приходит в полной комплектации, в полной сохранности.
                    Все четко, ящики с деталями подписаны.
                  </p>
                  <br>
                </div>
              </div>
              <div class="testimonial">
                <div style="display: flex; flex-flow: row">
                  <div>
                    <img
                      src="https://www.pantus.ru/opt/https://www.pantus.ru/opt/media/gallery/first/mims2018.jpgmedia/estimonials/sherb.png"
                    >
                  </div>
                  <p>
                    <strong>Александр Щербаков</strong><br>
                    <br>
                    Генеральный директор <br>
                    ООО «Автомобилист 82» <br>
                    (г. Саратов)
                  </p>
                </div>
                <div>
                  <p>
                    В отрасли я уже больше 20 лет, а с фирмой «ПАНТУС» у нас
                    больше 5 лет вместе пройдено. Всегда считал и считаю
                    «ПАНТУС» достойным предприятием. Работать мне с ним очень
                    нравится. За годы сотрудничества сложились очень хорошие
                    отношения.
                  </p>
                </div>
              </div>
              <div class="testimonial">
                <div style="display: flex; flex-flow: row">
                  <div>
                    <img
                      src="https://www.pantus.ru/media/testimonials/kamservice.jpg"
                    >
                  </div>
                  <p>
                    <strong>Александр Ветошкин</strong><br>
                    <br>
                    Директор<br>
                    ООО «КАМСЕРВИС»<br>
                    (г. Тверь)
                  </p>
                </div>
                <div>
                  <p>
                    За те годы, что мы работаем вместе, я бы охарактеризовал
                    «ПАНТУС» только с положительной стороны. Заявки выполняются
                    в полном объеме, доставка товара ведется четко по графику.
                    Наши менеджеры отличные специалисты, могу сказать о них
                    много хорошего.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            <a href="https://www.pantus.ru/https://www.pantus.ru/news/intervyu/"
              >Посмореть все отзывы</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="lastcta">
      <div class="lastctacontainer">
        <div class="ctagallery">
          <!-- Галерея -->
          <div
            class="gallerymims popupgallery"
            style="display: flex; flex-flow: row wrap; justify-content: center"
          >
            <a
              href="https://www.pantus.ru/https://www.pantus.ru/upload/iblock/023/Pantus%20Automechanika%20Moscow%202019%20-%201.jpg"
            >
              <img src="https://www.pantus.ru/media/gallery/second/1.jpg">
            </a>
            <a
              href="https://www.pantus.ru/https://www.pantus.ru/upload/iblock/2b2/Pantus%20Automechanika%20Moscow%202019%20-%204.jpg"
            >
              <img src="https://www.pantus.ru/media/gallery/second/2.jpg">
            </a>
            <a
              href="https://www.pantus.ru/https://www.pantus.ru/upload/iblock/573/Pantus%20Automechanika%20Moscow%202019%20%D0%9F%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8B%20(10).jpg"
            >
              <img src="https://www.pantus.ru/media/gallery/second/3.jpg"
            ></a>
            <a
              href="https://www.pantus.ru/https://www.pantus.ru/upload/iblock/9ca/063-3M0A7551-5000.jpg"
            >
              <img src="https://www.pantus.ru/media/gallery/second/4.jpg">
            </a>
          </div>
          <div style="text-align: center">
            <p>МИМС Автомеханика 2019</p>
          </div>
        </div>
        <div class="ctatext">
          <!-- как оформить заказ -->
          <h2>Как оформить заказ?</h2>
          <h3>
            Создайте аккаунт оптового клиента и получите доступ к оптовому
            прайсу
          </h3>
          <ol>
            <li>Зарегистрируйтесь на сайте</li>
            <li>
              Получите подтверждение вашего аккаунта у менеджера, чтобы работать
              по оптовым ценам
            </li>
            <li>
              Найдите необходимые детали в каталоге и отправьте их в корзину
            </li>
            <li>Оформите заказ</li>
            <li>Мы свяжемся с вами и обсудим детали доставки и оплаты</li>
            <li>
              Есть вопросы или предложения по работе сайта? Звоните 8 800 555
              8721 или пишите на
              <a href="https://www.pantus.ru/">aberezkin@pantus.ru</a>
            </li>
          </ol>

          <div class="pn_centr marg_0_0_30_0">
            <button
              onclick="location.href='/auth/?register=yes&amp;opt=yes'"
              type="button"
              class="createaccountbutton"
            >
              Cоздать аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</div></template>

<script>
export default {
  name: "Index",
  data() {
    return {
      settings: {
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    };
  },
};
</script>

<style>
.opt-claider {
  display: flex !important;
}
.opt-claider [data-v-e4caeaf8] {
  height: 100%;
  /*margin-right: 10px;*/
}
.opt-claider .slick-arrow:before {
  color: #000;
}
.opt-claider .slick-next {
  right: -25px;
}
.opt-claider .slick-prev {
  left: -25px;
}
.opt-claider .item{
  display: block !important;
}
.promocoverblack{
  background-color: rgba(0,0,0,0.65);
  padding: 70px 0;
}
.promocenterpict{
  background-image: url("https://www.pantus.ru/opt/media/optmain.jpg");
  background-size: cover;
  background-position: center bottom;
  margin-top: 33px;
}
.promohead{
  color: #fff;
  text-align: center;
}
.createaccountbutton{
  padding: 10px 50px;
  background: rgba(225, 0, 44, 1);
  border: none;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
  font-weight: 300;
}
.promorightpict{
  background: url("https://www.pantus.ru/opt/media/products.jpg") right center;
  margin-bottom: 50px;
}
.promoblock_left-wrap{
  filter: drop-shadow(10px 0px 10px rgba(0,0,0,0.5));
}
.promoblock_left {
  padding: 70px 30px 20px 30px;
  width: 85%;
  background: #fff;
  clip-path: polygon(100% 0%, 80% 50%, 100% 100%, 0 100%, 0 0);
  margin-bottom: -2px;
}
.antipicture {
  background-image: url("https://www.pantus.ru/opt/media/hider.png");
  background-repeat: repeat-y;
  background-size: 50% auto;
}
.promoleftpict {
  background: url("https://www.pantus.ru/opt/media/promodeliv.jpg") no-repeat bottom left;
}
.container-static li::before {
  position: absolute;
  color: #c8312b;
  content: "";
  width: 5px;
  height: 5px;
  margin-left: -12px;
  margin-top: 8px;
  border-radius: 5px;
  background: #c8312b;
}
.promogradient {
  margin-top: 50px;
  background-image: linear-gradient(
    72deg
    , rgba(225, 0, 44, 1) , rgba(126, 0, 54, 1));
  color: #fff;
}
.advantage{
  width: 225px;
  margin: 0 auto;
}
.promoadvantage {
  padding-bottom: 70px;
  padding-top: 70px;
}
.gallerymims {
  display: flex;
  flex-flow: row wrap;
}
.advantages {
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  justify-content: space-evenly;
}
.advantagesgallery {
  width: 50%;
}
.promoadvantagecontainer {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  align-items: center;
}
.gallerymims {
  display: flex;
  flex-flow: row wrap;
}
</style>
