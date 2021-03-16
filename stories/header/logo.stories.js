import Vue from 'vue'
import '@/assets/sass/default.sass'
import { storiesOf } from '@storybook/vue'
import TheLogo from '@/components/header/header-main/the-logo'

storiesOf('header', module).add('logo', () => ({
  components: { TheLogo },
  template: '<TheLogo />',
}))
