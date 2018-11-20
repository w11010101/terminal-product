<template>
    <div>
        <h1>D2立体单触摸屏终端</h1>
        <div class="product1">
            <div  class='c-info'>
                <Tabs value="name1">
                    <TabPane label="系统参数" name="name1" >就餐人识别速度精确、就餐流程快捷、防盗刷、平台拓展性好等特点，就餐人识别速度精确、就餐流程快捷、防盗刷、平台拓展性好等特点就餐人识别速度精确、就餐流程快捷、防盗刷、平台拓展性好等特点
                        
                    </TabPane>
                    <TabPane label="产品规格" name="name2">
                        <div class='attach'>
                            <p>机身尺寸：1700×500×525mm</p>
                            <p>厚度：525mm</p>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            <div class="product1-img">
                <!-- <img src="product1" alt=""> -->
                <!-- <img v-lazy="product"  alt=""> -->
                <img v-lazy="product1"  alt="">
                <!-- <img src="@/assets/product1.png" alt=""> -->
            </div>
        </div>
        <div class="swiper-imgs" v-if='isMobile'>
            <h2>展品效果图</h2>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="@/assets/product2.png" alt=""><div>img-1</div></div>
                    <div class="swiper-slide"><img src="@/assets/product2.png" alt=""><div>img-2</div></div>
                    <div class="swiper-slide"><img src="@/assets/product2.png" alt=""><div>img-3</div></div>
                    <div class="swiper-slide"><img src="@/assets/product2.png" alt=""><div>img-4</div></div>
                    <div class="swiper-slide"><img src="@/assets/product2.png" alt=""><div>img-5</div></div>
                </div>
                <!--  -->
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"><Icon type="ios-arrow-dropleft" size='30' /></div>
                <div class="swiper-button-next"><Icon type="ios-arrow-dropright" size='30' /></div>
                
            </div>
        </div>
        <div class="lists-imgs"v-else>
            <ul class="product-imgs" >
                <li v-for='item in list'><img v-lazy="item.src" alt=""><div>{{item.name}}</div></li>
                <!-- <li><img src="@/assets/product2.png" alt=""><div>img-2</div></li>
                <li><img src="@/assets/product2.png" alt=""><div>img-3</div></li>
                <li><img src="@/assets/product2.png" alt=""><div>img-4</div></li>
                <li><img src="@/assets/product2.png" alt=""><div>img-5</div></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'Vuex';
import product1 from '@/assets/product1.png';
import product2 from '@/assets/product2.png';

export default {
    name: 'product',
    data () {
        return {
            msg: '1',
            mySwiper:{},
            product1,
            list: [
                {
                    src:product2,
                    name:'img-1'
                },
                {
                    src:product2,
                    name:'img-2'
                },
                {
                    src:product2,
                    name:'img-3'
                },
                {
                    src:product2,
                    name:'img-4'
                },
                {
                    src:product2,
                    name:'img-5'
                }         
            ]
        }
    },
    computed:{
        ...mapState(['isMobile']),
    },
    watch:{

    },
    mounted(){
        var that = this;
        this.setDevice();
        this.onResize();
        this.$nextTick(function(){
            this.runSwiper();
        });
        //
        window.addEventListener('resize',function(){
            var deviceInfo =  this.navigator.appVersion
            if(deviceInfo.includes('iPhone')||deviceInfo.includes('Android')){
                that.runSwiper();
            }
        })
    },
    methods:{
        ...mapMutations(['setDevice','onResize']),
        runSwiper(){
            if(this.isMobile){
                this.mySwiper = new Swiper('.swiper-container', {
                    loop:true,
                    // autoplay: true,//可选选项，自动滑动
                    // initialSlide:1,
                    watchOverflow:true,
                    navigation: {
                        nextEl: '.swiper-button-next',//自动隐藏
                        prevEl: '.swiper-button-prev',//自动隐藏
                    },
                    pagination: {
                        el: '.swiper-pagination',//自动隐藏
                        dynamicBullets:true
                    }
                })
            }  
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url(product.css);
    
</style>
