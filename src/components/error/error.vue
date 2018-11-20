<template>
    <div id='error '>
        <h1>{{msg}}</h1>
        <img src="@/assets/error.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'error',
    data () {
        return {
            msg: '因为没有这个路由，所以对面抛来一个错误路由 ———— “ /error ”',
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
