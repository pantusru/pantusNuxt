<template>
  <b-thead
    class="border d-lg-table-header-group"
    :class="{ 'd-none': !CheckAnalogs }"
  >
    <b-tr class="bg-fafafa text-555">
      <tdSort
        :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
        label="Бренд"
        sort-name="brand"
      />
      <tdSort class="w-15" label="Артикул" sort-name="sku" />
      <b-th v-if="CheckAnalogs == false">
        <b-icon-camera-fill />
      </b-th>
      <tdSort
        class="w-15"
        :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
        label="Название"
        sort-name="name"
      />
      <tdSort label="Поставщик" sort-name="supplier" />
      <tdSort
        :class="{ 'd-none d-md-table-cell': CheckAnalogs }"
        label="Наличие"
        sort-name="quantity"
      />
      <tdSort
        :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
        label="Срок"
        sort-name="deliverydelay"
      />
      <tdSort label="Цена" sort-name="prices" />
      <b-th v-if="CheckAnalogs === false"><PanelVid /></b-th>
      <b-th v-if="CheckAnalogs === true" />
    </b-tr>
  </b-thead>
</template>

<script>
import tdSort from "@/components/search/product-panel/th-sort-get";
import PanelVid from "@/components/search/product-panel/index"; // Панель
export default {
  components: {
    PanelVid,
    tdSort,
  },
  props: {
    CheckAnalogs: {
      default: false,
    },
  },
};
</script>
