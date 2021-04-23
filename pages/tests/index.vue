<template>
  <div>
  <nuxt-link to="dsada">12</nuxt-link>
    <nuxt-link :to="{ path: '/tests', hash: 'hello' }"> 1 </nuxt-link>
    <div id="hello" style="margin-top: 2000px">hello</div>
  </div>
</template>
