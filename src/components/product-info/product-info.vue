<template>
    <div id='product-info '>
        
        <h1>hahah</h1>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'product-info',
    data () {
        return {
            msg: 'this is product-info.vue',
        }
    },
    computed:{
        // ...mapState(['isMobile','navData'])
    },
    watch:{

    },
    mounted(){
       
    },
    methods:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
