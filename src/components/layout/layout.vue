<template>
    <div class="layout">
        <Layout>
            <Header><img src="@/assets/back_logo.png" alt="" class="logoImg"><span>自助终端产品展示</span></Header>
            <Content>
                <!-- content -->
                <!-- Dropdown -->
                <div class='mobile-menu' v-if='isMobile'>
                    <Button type="text" class="cascaderBtn">
                        <Cascader :data="menuData" trigger="click" @on-change='cascaderActiveFn'><Icon type="md-menu" size='20'/></Cascader>
                    </Button>
                </div>
                <!-- menu nav-->
                <div class="menu-container" align="" v-else="isMobile">
                    <ul class="menu-lists">
                        <li v-for='(item,index) in menuData' 
                            @click='menuActiveFn(index,"menu")' 
                            :class='{active:index == menuActive}'>{{item.label}}
                        </li>
                    </ul>
                    <ul class="menu-subLists">
                        <li v-if='subMenuData.length>0' 
                            v-for='(todo,index) in subMenuData'
                            @click='menuActiveFn(index,"sub")'
                            :class='{active:index == submenuActive}'>
                            <router-link :to='todo.path||errorRouter'>{{todo.label}}</router-link>
                            <!-- <router-link :to='todo.path||errorRouter'>{{todo.label}}</router-link> -->
                        </li>
                    </ul>
                    <Button type="text" class="arrow-btn" @click='arrowFn'></Button>
                </div>
                <!-- menu content -->
                <keep-alive>
                    <router-view name='menu-content' id="menu-content"/>
                </keep-alive>
            </Content>
        </Layout>  
    </div>
</template>

<script>
import {mapState,mapMutations } from 'Vuex';
import menuData from '@/js/data';
console.log('menuData = ', menuData)
import router from '@/router';
export default {
    name: 'layout',
    data () {
        return {
            msg: '阿阿斯蒂芬阿瑟东发生',
            menuActive:0,
            menuData,
            subMenuData:[],
            submenuActive:0,
            subListsHide:true,
            subListsHideMax:'200px',
            errorRouter:'/error'
        }
    },
    computed:{
        ...mapState(['isMobile'])
    },
    watch:{

    },
    '$route' (to, from) {
        console.log(to)
      // 对路由变化作出响应...
    },
    beforeRouteEnter (to,from,next){
        console.log(arguments)
        next();
    },
    mounted(){
        this.setDevice();
        this.onResize();
        router.push('/product');
        this.setSubMenuData();

    },
    methods:{
        menuActiveFn(index,type){
            if(type === 'sub'){
                this.submenuActive = index;
            }else{
                this.menuActive = index;
            }
            this.setSubMenuData();
        },
        cascaderActiveFn(value,selectedData){
            router.push(selectedData[1].path);
        },
        setSubMenuData(){
            this.subMenuData = this.menuData[this.menuActive].children;
        },
        ...mapMutations(['setDevice','onResize']),
        arrowFn(){
            var current = event.target;
            var className = current.className;
            className.includes('active')?current.classList.remove('active'):current.classList.add('active');
            this.subListsHide = !this.subListsHide;
            var subLists = document.querySelector('.menu-subLists');
            // console.log((Math.floor(this.subMenuData.length/5)+1)*50);
            subLists.style.height = this.subListsHide?'50px':(Math.floor(this.subMenuData.length/5)+1)*50+'px';
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url(./layout.css);
</style>
