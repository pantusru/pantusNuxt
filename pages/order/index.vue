<template>
    <div>Закрытая страница</div>
</template>

<script>
export default {
    middleware({ store, redirect }) {
        if(true){ // ПОльзователь не авторизован
            return redirect('/cart?reg=true');
        }
    }
}
</script>

<style>

</style>