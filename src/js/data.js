import {JSAjaxRequest} from './JSAjaxRequest.js';

// console.log($.ajax)
$.ajax({
    url:'http://api.wx.xzxyun.com/oidc/WxSysResourceManagement/GetSysInfos',
    type:'post',
    dataType:'json',
    contentType:'application/json',
    data:{},
    success:function(){

    }

})
// console.log(JSAjaxRequest)
// JSAjaxRequest({
//     url:"http://api.wx.xzxyun.com/oidc/WxSysResourceManagement/GetSysInfos",
//     contentType:'application/json',
//     data:{},
//     success:function(data){
//         console.log(data)
//     },
//     error:function(data){
//         console.log(data)z
//     }
// });
// JSAjaxRequest({
//     url:"http://api.wx.xzxyun.com/device/WxDeviceInventory/GetDeviceModels4System",
//     contentType:'application/json',
//     data:{
//         "request":"securityguard",
//         "client": {
//             "rType": 8
//         }
//     },
//     success:function(data){
//         console.log(data)
//     },
//     error:function(data){
//         console.log(data)
//     }
// });
export default [
    {
        value:'value1',
        label:'自助缴费',
        children:[
            {
                value:'value2',
                label:'自助产品1',
                path:'/product'
            },
            {
                value:'value3',
                label:'自助产品2',
                path:'/product-info'
            }
        ]
    },
    {
        value: 'beijing',
        label: '北京1',
        children: [
            {
                value: 'dongchengqu',
                label: '东城区1',
            },
            {
                value: 'xichengqu',
                label: '西城区'
            },
            {
                value: 'haidianqu',
                label: '海淀区'
            },
            {
                value: 'fengtaiqu',
                label: '丰台区'
            },
            {
                value: 'tongzhouqu',
                label: '通州区',
            },
            {
                value: 'daxingqu',
                label: '大兴区'
            },
            {
                value: 'chaoyangqu',
                label: '朝阳区'
            },
            {
                value: 'changpingqu',
                label: '昌平区'
            }
        ]
    }, 
    {
        value:'heilongjiang',
        label:'黑龙江',
        children:[
            {
                value:'haerbin',
                label:'哈尔滨',
                // children:[
                //     {
                //         value:'nangangqu',
                //         label:'南岗区',
                //     },
                //     {
                //         value:'daoliqu',
                //         label:'道里区',
                //     },
                //     {
                //         value:'daowaiqu',
                //         label:'道外区',
                //     },
                //     {
                //         value:'xiangfangqu',
                //         label:'香坊区',
                //     },

                // ]
            },
            {
                value:'daxinganling',
                label:'大兴安岭',
                // children:[
                //     {
                //         value:'moheshi',
                //         label:'漠河市',
                //     },{
                //         value:'yuyinglinyeju',
                //         label:'育英林业局',
                //     },
                //     {
                //         value:'tuqianglinyeju',
                //         label:'图强林业局',
                //     },
                //     {
                //         value:'amuerlinyeju',
                //         label:'阿木尔林业局',
                //     }
                // ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: '江苏',
        children: [
            {
                value: 'nanjing',
                label: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        label: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                label: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                    },
                    {
                        value: 'shizilin',
                        label: '狮子林',
                    }
                ]
            }
        ],
    }
]