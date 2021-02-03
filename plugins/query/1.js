$(function () {
  const $container = $(document.getElementById("form_with_map"));

  const $region = $container.find('[name="region"]');
  const $district = $container.find('[name="district"]');
  const $city = $('[name="__BVID__142"]');
  const $street = $container.find('[name="street"]');
  const $building = $container.find('[name="building"]');
  const $address = $container.find("#address");
  const $zip = $container.find("#map_zip");
  const $kladrId = $container.find("#kladrId");
  const $okatoId = $container.find("#okatoId");
  const $typeId = $container.find("#typeId");
  const $typeShortId = $container.find("#typeShortId");
  const $contentTypeId = $container.find("#contentTypeId");

  let map = null;
  let map_created = false;

  $()
    .add($region)
    .add($district)
    .add($city)
    .add($street)
    .add($building)
    .fias({
      parentInput: $container.find(".js-form-address-map"),
      verify: true,
      change(obj) {
        if (obj) {
          setLabel($(this), obj.type);
          $kladrId.text(obj.id ? obj.id : "");
          $okatoId.text(obj.okato ? obj.okato : "");
          $typeId.text(obj.type ? obj.type : "");
          $typeShortId.text(obj.typeShort ? obj.typeShort : "");
          $contentTypeId.text(obj.contentType ? obj.contentType : "");

          //	-------------------------------------------------------
          args.order.to.kladrId = obj.id;
          args.order.to.okatoId = obj.okato;
          args.order.to.zipId = obj.zip;
          args.order.to.cityType = obj.typeShort;
          args.order.to.fiasObj = obj;

          if (args.order.to.fiasObj.parents.length == 0) {
            args.order.to.district = "";
          } else {
            args.order.to.district = args.order.to.fiasObj.parents[0].name;
          }
          //	-------------------------------------------------------

          if (obj.parents) {
            $.fias.setValues(obj.parents, ".js-form-address-map");
          }
        } else {
          //	-------------------------------------------------------
          args.order.to.kladrId = "";
          args.order.to.okatoId = "";
          args.order.to.zipId = "";
          args.order.to.cityType = "";
          args.order.to.district = "";
          args.order.to.fiasObj = "";
          //	-------------------------------------------------------
        }

        const $zipWrap = $zip.parent();
        if (obj && obj.zip) {
          $zip.text(obj.zip);
          $zipWrap.show();
        } // Обновляем поле zip
        else {
          $zipWrap.hide();
        }

        addressUpdate();
        mapUpdate();
      },
      checkBefore() {
        const $input = $(this);

        if (!$.trim($input.val())) {
          addressUpdate();
          mapUpdate();
          return false;
        }
      },
    });

  $region.fias("type", $.fias.type.region);
  $district.fias("type", $.fias.type.district);
  $city.fias("type", $.fias.type.city);
  $street.fias("type", $.fias.type.street);
  $building.fias("type", $.fias.type.building);

  // Включаем получение родительских объектов для населённых пунктов
  $district.fias("withParents", true);
  $city.fias("withParents", true);
  $street.fias("withParents", true);

  // Отключаем проверку введённых данных для строений
  $building.fias("verify", false);

  ymaps.ready(function () {
    if (map_created) return;
    map_created = true;

    map = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 12,
      controls: [],
    });

    map.controls.add("zoomControl", {
      position: {
        right: 10,
        top: 10,
      },
    });
  });

  function setLabel($input, text) {
    text = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    $input.parent().find("label").text(text);
  }

  function mapUpdate() {
    let zoom = 4;

    const address = $.fias.getAddress(".js-form-address-map", function (objs) {
      let result = "";

      $.each(objs, function (i, obj) {
        let name = "";
        let type = "";

        if ($.type(obj) === "object") {
          name = obj.name;
          type = " " + obj.type;

          switch (obj.contentType) {
            case $.fias.type.region:
              zoom = 4;
              break;

            case $.fias.type.district:
              zoom = 7;
              break;

            case $.fias.type.city:
              zoom = 10;
              break;

            case $.fias.type.street:
              zoom = 13;
              break;

            case $.fias.type.building:
              zoom = 16;
              break;
          }
        } else {
          name = obj;
        }

        if (result) result += ", ";
        result += type + name;
      });

      return result;
    });

    if (address && map_created) {
      const geocode = ymaps.geocode(address);
      geocode.then(function (res) {
        map.geoObjects.each(function (geoObject) {
          map.geoObjects.remove(geoObject);
        });

        const position = res.geoObjects.get(0).geometry.getCoordinates();
        const placemark = new ymaps.Placemark(position, {}, {});

        map.geoObjects.add(placemark);
        map.setCenter(position, zoom);
      });
    }
  }

  function addressUpdate() {
    const address = $.fias.getAddress($container.find(".js-form-address-map"));

    $address.text(address);
    setTimeout(function () {
      event_setCity();
    }, 50);
  }
})();
