<template>
    <b-form-checkbox-group v-model="chexbox" class="mb-3">    
        <div class="d-flex flex-column">
            <VirtualList
                ref="scroll"
                class="overflow"
                :keeps="20"
                :data-key="'id'"
                :data-sources="SearchElem"
                :data-component="itemComponent">
                
            </VirtualList>
        </div>
    </b-form-checkbox-group>
</template>

<script>
import ChecboxBrand from '@/components/Search/PanelBrand/Chexbox/index'
import VirtualList from 'vue-virtual-scroll-list'
export default {
    watch:{
        SearchElem(){
            this.$refs.scroll.scrollToOffset(0);
        }
    },
    data() {
        return {
            itemComponent: ChecboxBrand,
        }
    },
    props:["SearchElem", "GetChecbox", "SetChecbox"],
    computed: {
        chexbox:{
            get() {
                return this.$store.getters[this.GetChecbox]; 
            },
            set(value){
                this.$store.commit(this.SetChecbox, value);
            }
        }
    },
    components:{
        VirtualList,
        ChecboxBrand
    }
}

</script>

