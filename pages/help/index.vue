<template>
  <b-container>
    <div class="container-static">
      <div class="row">
        <sidebar :items-menu="sideBarItems" />
        <div class="col-md-10">
          <h1>Помощь</h1>
          <h4><a href="#kak-sdelat-zakaz">Как сделать заказ?</a></h4>
          <ul>
            <li><a href="#registration">Регистрация</a></li>
            <li><a href="#vkhod">Вход на сайт</a></li>
            <li><a href="#search">Поиск запчастей и наполнение корзины</a></li>
            <li><a href="#order">Оформление заказа</a></li>
          </ul>
          <h4><a href="#order-history">История заказов</a><br></h4>
          <h4><a href="#favorite">Избранное</a><br></h4>
          <h4><a href="#copyorder">Копирование заказов</a><br></h4>
          <h4><a href="#downloadprice">Скачать прайс</a><br></h4>
          <h4><a href="#importorder">Импорт заказа из файла</a><br></h4>
          <h4><a href="#returns">Возврат</a><br></h4>
          <h4><a href="#pass">Забыли пароль?</a><br></h4>
          <h4>
            <a href="#voprosi-prodlozheniya"
              >Есть вопросы, предложения или нашли ошибку?</a
            ><br>
          </h4>
          <h2><a name="kak-sdelat-zakaz">Как сделать заказ?</a></h2>
          <h3><a name="registration">Регистрация</a></h3>
          <iframe
            title="Регистрация на сайте pantus.ru"
            width="459"
            height="344"
            src="https://www.youtube.com/embed/Da1p9WpIZuo?feature=oembed"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          />
          <br>
          <br>
          <i
            ><span style="color: #959595"
              >Видеоинструкция по регистрации и входу на сайт</span
            ></i
          >
          <ol>
            <li>
              Кликните на ссылку&nbsp;<nuxt-link
                to="/register"
                target="_blank"
                >Регистрация</nuxt-link
              >&nbsp;в верхнем правом углу экрана. Эта ссылка доступна на любой
              странице сайта.&nbsp;
            </li>
            <li>
              <p>
                <img
                  width="1349"
                  alt="Ссылка на регистрацию"
                  :src="urlPantus +'/upload/medialibrary/f4f/registration.png'"
                  height="173"
                  style="border: 4px solid #8e8f9a"
                  title="Ссылка на регистрацию"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Ссылка на регистрацию в шапке сайта</span
                  ></i
                >
              </p>
            </li>
            <li>
              Выберите тип вашего аккаунта: Розничный или Оптовый покупатель,
              заполните необходимые поля, отметьте пункт о согласии персональных
              данных и нажмите зарегистрироваться.
            </li>
            <p>
              <img
                width="1005"
                alt="newuser.png"
                :src="urlPantus +'/upload/medialibrary/684/newuser.png'"
                height="559"
                style="border: 4px solid #8e8f9a"
                title="newuser.png"
                class="foto-fancy-img"
              ><br>
              <i
                ><span style="color: #959595"
                  >Форма регистрации нового пользователя</span
                ></i
              >
            </p>
            <li>
              Если вы оптовый покупатель, то с вами свяжется наш специалист,
              уточнит детали и подтвердит ваш аккаунт, после этого вы сможете
              оформлять заказы на сайте по оптовым ценам.
            </li>
          </ol>
          <h3><a name="vkhod">Вход на сайт (авторизация на сайте)</a></h3>
          <p>
            Войдите на сайт, используя данные, указанные при регистрации.<br>
            Вы можете войти на сайт кликнув по ссылке в шапке сайте или по этой
            ссылке - <a href="http://www.pantus.ru/auth/">вход на сайт</a>
          </p>
          <p>
            <img
              width="1024"
              alt="enter.png"
              :src="urlPantus +'/upload/medialibrary/216/enter.png'"
              height="112"
              style="border: 4px solid #8e8f9a"
              title="enter.png"
              class="foto-fancy-img"
            ><br>
            <i><span style="color: #959595">Вход на сайт pantus.ru</span></i>
          </p>
          <p>
            <i
              >Если вы уже являетесь нашим клиентом и оформляли заказы через
              отдел продаж, то вы можете просто связаться с вашим менеджером по
              телефону:&nbsp;<a href="tel:88005558721">8 800 555 8721</a> и
              сказать, что вы хотите начать работать через сайт. Мы сами
              создадим для вас аккаунт, а данные для входа вы получите на свой
              ящик электронной почты. В этом случае ваш аккаунт сразу будет
              готов к работе: в каталоге вы будете видеть свои оптовые цены.
            </i>
          </p>
          <h3><a name="search">Поиск запчастей и наполнение корзины</a></h3>
          <div class="col-md-12" style="padding-left: 0px">
            <iframe
              src="//player.vimeo.com/video/274460111?app_id=122963"
              width="580"
              height="330"
              frameborder="0"
              title="Регистрация на сайте pantus.ru"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
            /><br>
            <i
              ><span style="color: #959595"
                >Видеоинструкция по поиску и подбору автозапчастей</span
              ></i
            >
            <ol>
              <li>
                <b>Поиск по номеру, артикулу или названию детали</b> –
                <i>Наиболее эффективный способ поиска товаров на сайте</i
                >.<br>
                В форме поиска&nbsp;в шапке сайта введите название, артикул или
                OEM-код детали. Так же вы можете ввести название марки
                автомобиля или модели, чтобы посмотреть полный список
                соответствующих запросу наименований. Затем кликните на кнопку
                "Найти".
              </li>
              <p>
                <img
                  width="1024"
                  alt="search.png"
                  :src="urlPantus +'/upload/medialibrary/61c/search.png'"
                  height="116"
                  style="border: 4px solid #8e8f9a"
                  title="search.png"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Форма поиска запчастей в шапке сайта</span
                  ></i
                >
              </p>
              <li><b>Поиск детали по оригинальным онлайн каталогам.</b></li>
              Выберете модель в форме поиска на главной странице или или
              воспользуйтесь ссылкой на Оригинальные каталоги в меню сайта.
              <p>
                <img
                  width="1003"
                  alt="originalparts.png"
                  :src="urlPantus +'/upload/medialibrary/c03/originalparts.png'"
                  height="1024"
                  style="border: 4px solid #8e8f9a"
                  title="originalparts.png"
                  class="foto-fancy-img"
                >Форма поиска по марке и модели автомобиля через каталог<br>
              </p>
              <p>
                Выбрав нужную модель, вы попадете на страницу со списком
                категорий автозапчастей.<br>
              </p>
              <p>
                <img
                  width="1024"
                  alt="carparts.png"
                  :src="urlPantus +'/upload/medialibrary/e64/carparts.png'"
                  height="605"
                  style="border: 4px solid #8e8f9a"
                  title="carparts.png"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Категории автозапчастей</span
                  ></i
                >
              </p>
              <p>
                После выбора нужного узла вы попадёте на страницу со схемой узла
                и списком его компонентов.
              </p>
              <p>
                <img
                  width="1024"
                  alt="parts.png"
                  :src="urlPantus +'/upload/medialibrary/b3a/parts.png'"
                  height="571"
                  style="border: 4px solid #8e8f9a"
                  title="parts.png"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Схема узла автозапчастей</span
                  ></i
                >
              </p>
              <p>
                Кликните по названию или номеру детали, чтобы проверить наличие
                и узнать цену.
              </p>
              <li>
                Вы попадете на страницу с результатами поиска. Если по запросу
                ничего не найдено, попробуйте изменить запрос, уточнив артикул,
                расширив его или изменив название на альтернативное. У товаров с
                доступными фото, вы увидите соответствующий значок и сможете
                посмотреть изображение по клику на этот значок.
              </li>
              <p>
                <img
                  width="1024"
                  alt="listparts.png"
                  :src="urlPantus +'/upload/medialibrary/5b1/listparts.png'"
                  height="521"
                  style="border: 4px solid #8e8f9a"
                  title="listparts.png"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Результат поиска запчасти</span
                  ></i
                >
              </p>
              <p>
                Выбрав наиболее подходящий товар, нажмите на кнопку «В корзину».
                Затем укажите нужное количество и нажмите «Добавить в корзину».
              </p>
              <p>
                <img
                  width="307"
                  alt="Добавить в корзину"
                  :src="urlPantus +'/upload/medialibrary/c32/2.3. Добавить в корзину.jpg'"
                  height="225"
                  class="foto-fancy-img"
                  style="border: 4px solid #8e8f9a"
                  title="Добавить в корзину"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Добавление товара в корзину</span
                  ></i
                >
              </p>
              <li>
                В процессе наполнения корзины вы всегда сможете увидеть
                количество позиций и сумму заказа рядом со значком корзины, по
                наведение курсора на эту иконку отобразится более подробная
                информацию о заказе.
              </li>
              <p>
                <img
                  width="1024"
                  alt="maincart.png"
                  :src="urlPantus +'/upload/medialibrary/d61/maincart.png'"
                  height="251"
                  style="border: 4px solid #8e8f9a"
                  title="maincart.png"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Иконка корзины со списком автозапчастей</span
                  ></i
                >
              </p>
            </ol>
          </div>
          <h3><a name="order">Оформление заказа</a></h3>
          <div class="col-md-12" style="padding-left: 0px">
            <iframe
              src="//player.vimeo.com/video/274479599?app_id=122963"
              width="580"
              height="330"
              frameborder="0"
              title="Регистрация на сайте pantus.ru"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
            />
            <br>
            <i
              ><span style="color: #959595"
                >Видеоинструкция по оформлению заказа</span
              ></i
            >
            <ol>
              <li>
                Кликните на значок корзины или на любую позицию из списка, вы
                попадете на страницу своей корзины, где после проверки сможете
                перейти к оформлению заказа.
              </li>
              <p>
                <img
                  width="1024"
                  alt="cart.png"
                  :src="urlPantus +'/upload/medialibrary/391/cart.png'"
                  height="324"
                  style="border: 4px solid #8e8f9a"
                  title="cart.png"
                  class="foto-fancy-img"
                ><br>
                <i><span style="color: #959595">Страница корзины</span></i>
              </p>
              <p />
                Если вы вошли на сайт, то попадете на страницу оформления
                заказа. В противном случае на следующем шаге вам нужно найти
                войти на сайт под своим логином, если вы этого еще не сделали
                или создать аккаунт (см. п.1)
              </li>
              <p>
                <img
                  width="263"
                  alt="autorisation.png"
                  :src="urlPantus +'/upload/medialibrary/def/autorisation.png'"
                  height="223"
                  style="border: 4px solid #8e8f9a"
                  title="autorisation.png"
                  class="foto-fancy-img"
                ><br>
                <i
                  ><span style="color: #959595"
                    >Вход на сайт или регистрация</span
                  ></i
                >
              </p>
              <p />
              <li>
                На странице оформления заказа вам нужно только уточнить город и
                адрес доставки, способ доставки и оплаты. Затем отметьте пункт о
                согласии с условиями предоставления услуг и нажмите на кнопку
                отправить заказ.
              </li>
              <p>
                <img
                  width="1024"
                  alt="cartprocess.png"
                  :src="urlPantus +'/upload/medialibrary/ab6/cartprocess.png'"
                  height="568"
                  style="border: 4px solid #8e8f9a"
                  title="cartprocess.png"
                  class="foto-fancy-img"
                ><br>
                <i><span style="color: #959595">Оформление заказа</span></i>
              </p>
              <p />
                Вы получите электронное письмо на ваш адрес с подробностями о
                заказе. Мы проверим наличие каждой позиции вашего заказа на
                складе и в течение 1го часа в рабочее время свяжемся с вами,
                чтобы сообщить детали об оплате и времени доставки.<br>
              </li>
            </ol>
          </div>
          <h2><a name="order-history">История заказов</a></h2>
          <div class="col-md-12" style="padding-left: 0px">
            <iframe
              width="60%"
              height="330"
              src="https://www.youtube.com/embed/F9110M448L0?rel=0&amp;start=100"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen=""
            /><br>
            <i
              ><span style="color: #959595"
                ><b>1:40</b> - Избранные товары<br>
                <b>3:05</b> - Копирование заказов<br> </span
            ></i>
            <p>
              Вам всегда доступна
              <a href="/profile/?page=history">история ваших заказов</a> в
              личном кабинете. Вы можете просмотреть сделанные ранее заказы и, в
              случае необходимости, отменить текущий заказ в работе.
            </p>
            <h2><a name="favorite">Избранное</a></h2>
            <p>
              Авторизованные пользователи при наведении на товары в каталоге
              видят специальный значок, по клику на который вы можете добавить
              любой товар в избранное, после чего он появится в
              <nuxt-link to="/profile/selected/">специальном разделе</nuxt-link> и вам больше не нужно
              будет тратить время на его поиск.
            </p>
            <p>
              <img
                width="1024"
                alt="favorite.png"
                :src="urlPantus +'/upload/medialibrary/0c2/favorite.png'"
                height="235"
                style="border: 4px solid #8e8f9a"
                title="favorite.png"
                class="foto-fancy-img"
              ><br>
              <i
                ><span style="color: #959595"
                  >Добавление товара в избранные</span
                ></i
              >
            </p>
            <p>
              Избранный товар всегда будет доступен в личном кабинете за пару
              кликов.
            </p>
            <h2><a name="copyorder">Копирование заказов</a></h2>
            <p>
              Еще одно обновление, важное для постоянных клиентов - копирование
              заказов. После оформления одного или нескольких заказов, вы можете
              скопировать любой из них в корзину. Все позиции, которые были в
              этом заказе, заново попадут в корзину. Далее вы можете изменить
              количество единиц по каждой позиции или удалить лишние. Это
              удобно, например, если вы делали большой заказ месяц назад, и
              сейчас вам нужно его повторить.
            </p>
          </div>
          <h2><a name="downloadprice">Скачать прайс</a></h2>
          <div class="row" style="padding-left: 0px; margin-bottom: 20px">
            <div class="col-md-6" style="padding-left: 0px">
              <p>
                В списке товаров, кликните на ссылку "Скачать в CSV", чтобы
                скачать текущий список запчастей в формате электронной таблицы и
                продолжить работу с заказом в программе на вашем компьютере,
                например MS Excel.
              </p>
              <img
                width="1024"
                alt="dwldprice.png"
                :src="urlPantus +'/upload/medialibrary/88e/dwldprice.png'"
                height="228"
                style="border: 4px solid #8e8f9a"
                title="dwldprice.png"
                class="foto-fancy-img"
              >
              <i
                ><span style="color: #959595"
                  >Скачивание файла прайса из списка запчастей</span
                ></i
              >
            </div>
            <div class="col-md-6" style="padding-left: 0px">
              <iframe
                src="https://www.youtube.com/embed/wlyMZGHbFBE"
                width="580"
                height="330"
                frameborder="0"
                title="Регистрация на сайте pantus.ru"
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowfullscreen=""
              />
              <i
                ><span style="color: #959595"
                  >Видеоинструкция по скачиванию прайса и импорту заказа из
                  файла</span
                ></i
              >
            </div>
          </div>
          <h2><a name="importorder">Импорт заказа из файла</a></h2>
          <div class="row" style="padding-left: 0px">
            <div class="col-md-6" style="padding-left: 0px">
              <p>
                Вы можете импортировать (загрузить на сайт) заказ с помощью
                таблицы в формате файла CSV (разделители "точки с запятыми" или
                "запятые"). Вы можете скачать такой файл в списке товаров (см.
                пункт "Скачать прайс" выше), в вашем
                <a href="/profile/">личном кабинете</a> или запросить файл в
                нужном формате у вашего менеджера.
              </p>
              <div class="col-md-6" style="padding-left: 0px">
                <p>
                  <img
                    width="1024"
                    alt="import.png"
                    :src="urlPantus +'/upload/medialibrary/bd3/import.png'"
                    height="233"
                    title="import.png"
                    class="foto-fancy-img"
                    style="
                      border-width: 4px;
                      border-style: solid;
                      border-color: #8e8f9a;
                    "
                  >
                  <i
                    ><span style="color: #959595"
                      >Импорт заказа на запчасти из файла</span
                    ></i
                  >
                </p>
              </div>
            </div>
            <div class="col-md-6" style="padding-left: 0px">
              <iframe
                src="https://www.youtube.com/embed/wlyMZGHbFBE?start=85"
                width="580"
                height="330"
                frameborder="0"
                title="Регистрация на сайте pantus.ru"
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowfullscreen=""
              />
              <i
                ><span style="color: #959595"
                  >Видеоинструкция по импорту заказа из файла</span
                ></i
              >
            </div>
          </div>
          <div class="col-md-12" style="padding-left: 0px">
            <div class="col-md-6" style="padding-left: 0px">
              <h2><a name="returns">Условия возврата</a></h2>
              Товар, купленный в интернет-магазине pantus.ru может быть
              возвращен в течение 14-ти дней
              <b>со дня получения товара на руки</b>, не считая дня покупки,
              только если:
              <ul>
                <li>у товара нет признаков эксплуатации;</li>
                <li>сохранена упаковка, если товар был упакован.</li>
              </ul>
              <h4>Как вернуть товар?</h4>
              <ol>
                <li>
                  Свяжитесь с администрацией интернет-магазина по телефону 8
                  (800) 555 8721, чтобы согласовать способ возврата товара.
                </li>
                <li>
                  Денежные средства будут возвращены тем же способом, которым вы
                  произвели оплату:
                </li>
                <ul>
                  <li>на карту, с которой был произведен платеж;</li>
                  <li>
                    обратным банковским переводом на счет, с которого вы
                    оплачивали заказ.
                  </li>
                </ul>
              </ol>
              <p>
                <b>Оптовым клиентам</b> необходимо заполнить "Акт о возврате
                товара" и передать его вместе с товаром на возврат
              </p>
              <span class="elem-file">
                <a :href="urlPantus + '/upload/files/akt_vozvrata.xlsx'"
                  >Акт о возврате товара</a
                >
                (XLSX, 11,75 Кб)
              </span>
              <h2><a name="pass">Забыли пароль?</a></h2>
              <p>
                Вы можете восстановить его на этой
                <nuxt-link to="/forgot_password">странице</nuxt-link>
              </p>
              <h2>
                <a name="voprosi-prodlozheniya"
                  >Есть вопросы, предложения или нашли ошибку?</a
                >
              </h2>
              <p>
                Если у вас есть вопросы и предложения по работе нашего сайта или
                вы нашли ошибку в его функционале, пожалуйста, сообщите нам об
                этом через онлайн консультанта, по телефону или электронной
                почте:
              </p>
              <ul>
                <li>
                  <a href="tel:+78005558721"
                    >8&nbsp;800&nbsp;555 8721 (доб. 192)</a
                  >
                </li>
                <li>
                  <a href="mailto:support@pantus.ru">support@pantus.ru</a>
                </li>
              </ul>
              <b>Отвечаем быстро!</b>
              <p />
            </div>
            <!-------------------------------------------------------
           <div class="col-md-6" style="padding-left: 0px">
                 <iframe src="//player.vimeo.com/video/274482002?app_id=122963" width="580" height="330" frameborder="0" title="Регистрация на сайте pantus.ru" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">
                 </iframe>
                 <i><span style="color: #959595;">Видеоинструкция по личному кабинет</span></i>
           </div>
           ------------------------------------------------------->
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import sidebar from "@/components/static/elements/sidebar/index";
import minix from "@/mixins/static-data/menu-all";
export default {
  name: "Index",
  components: {
    sidebar,
  },
  mixins: [minix],
  data() {
    return {
      urlPantus: process.env.pantus,
    }
  },

  head() {
    return {
      title: `Как сделать заказ?`,
      meta: [
        {
          name: "description",
          content: `Как сделать заказ в интернет-магазине "Пантус"`,
        },
        {
          name: "keywords",
          content: `Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз`,
        },
      ],
    };
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
