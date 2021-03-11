<template>
  <div class="checkbox-data-user-blog">
    <div class="row-gutters">
      <ElementValidate
        id="input-data-user"
        :checked="validateInput.value"
        :validate-input="validateInput"
        type="checkbox"
        name="checkbox-data-user"
        :name-target="'checked'"
      />
      <label for="input-data-user" class="checkbox-text">
        Я принимаю условия
        <nuxt-link
          class="checkbox-data-user-link"
          to="/documents/user-agreement/"
          >Соглашения сторон
        </nuxt-link>
        и соглашаюсь на обработку персональных данных, размещаемых на
        <nuxt-link class="checkbox-data-user-link" to="/">pantus.ru</nuxt-link>
      </label>
    </div>
    <base-error :validate-input="validateInput" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TypeValidateInput } from '~/composition/_validate/validate-type'
import BaseError from '~/components/base/error/base-error.vue'
import ElementValidate from '~/components/base/input/element-validate.vue'

export default Vue.extend({
  name: 'CheckboxDataUser',
  components: { ElementValidate, BaseError },
  props: {
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
  },
})
</script>
<style lang="sass">
@import "assets/sass/register/checkbox-data-user"
</style>
