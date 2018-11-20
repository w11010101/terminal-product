import navData from '@/js/data';
// console.log(navData)
Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state:{    // 相当于 data
        isMobile:true,
    },
    mutations:{     // 相当于 methods
        setDevice(state){
            state.isMobile = window.innerWidth < 768 ? true:false;
        },
        onResize(state){
            var that = this;
            window.addEventListener('resize',function(){
                that.commit('setDevice');
            })
        },
    },
    getters:{       // 相当于 computer

    }
})