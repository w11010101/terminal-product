var router_config = [
    {
        path:'/',
        name:'layout',
        component:resolve =>require(['@/components/layout/layout'],resolve),
        children:[
            {
                path:'/product',
                name:'product',
                components:{
                    'menu-content':resolve => require(['@/components/product/product'],resolve),
                }
            },
            {
                path:'/product-info',
                name:'product-info',
                components:{
                    'menu-content':resolve => require(['@/components/product-info/product-info'],resolve),
                }
            },
            {
                path:'/error',
                name:'error',
                components:{
                    'menu-content':resolve => require(['@/components/error/error'],resolve),
                }
            }
        ]
    },
];
                
module.exports = router_config;
