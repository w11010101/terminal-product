import routes from './routers'
Vue.use(VueRouter);

export default new VueRouter({
    mode: process.env.NODE_ENV === 'production'?'hash':'history',
    routes
})
