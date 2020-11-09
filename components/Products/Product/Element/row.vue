<template>
<b-col class="mb-2">
        <div class="d-flex justify-content-between border-bottom" v-if="slots == false">
                <div class="mr-1 "><b class="fz-6">{{name}}</b></div>
                <!-- ЕСЛИ НЕ МОЖЕТ БЫТЬ МАССИВ -->
                <div>
                    <div v-if="types == 'text'"> {{ dataset}} </div>
                    <nuxt-link class="text-decoration-none text-576b77 fz-6" :to="link" v-if="types == 'link'"> {{ dataset}} </nuxt-link>
                </div>
        </div>
        <div class=" d-flex justify-content-between border-bottom"  v-if="slots">
            <slot name="header"></slot>
        </div>
        <div v-if="slots" class="text-right">
          <slot name="body"></slot>
        </div>
</b-col>
</template>

<script>
export default {
    props:{
        types:{
            type: String,
            default: "link",
        },
        link:{
            type:String,
            default: "",
        },
        dataset:{},
        name:{
            type: String,
        },
        slots:{
            default: false
        }
    }
}
</script>

