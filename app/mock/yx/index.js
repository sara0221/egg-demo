// 写mock数据的地方
module.exports = {
    list: [{
            id: 1,
            title: 'this is news 1',
            url: '/news/1'
        },
        {
            id: 2,
            title: 'this is news 2',
            url: '/news/2'
        }
    ],
    notice: [{
        text: '【福利】下载严选APP，抢1元包邮团，领...',
        link: 'http://u.163.com/aospd41?_stat_content=%E3%80%90%E7%A6%8F%E5%88%A9%E3%80%91%E4%B8%8B%E8%BD%BD%E4%B8%A5%E9%80%89APP%EF%BC%8C%E6%8A%A21%E5%85%83%E5%8C%85%E9%82%AE%E5%9B%A2%EF%BC%8C%E9%A2%86...&_stat_refer=%2F'
    }, {
        text: '【严选x中行联名卡】达标领80元礼品卡>',
        link: 'http://you.163.com/act/pub/Gq0SwbxEmB.html?from=web_hz_neibu_neibu_105&_stat_content=%E3%80%90%E4%B8%A5%E9%80%89x%E4%B8%AD%E8%A1%8C%E8%81%94%E5%90%8D%E5%8D%A1%E3%80%91%E8%BE%BE%E6%A0%87%E9%A2%8680%E5%85%83%E7%A4%BC%E5%93%81%E5%8D%A1%3E&_stat_refer=%2F'
    }, {
        text: '【福利】下载严选APP，抢1元包邮团，领...',
        link: 'http://u.163.com/aospd41?_stat_content=%E3%80%90%E7%A6%8F%E5%88%A9%E3%80%91%E4%B8%8B%E8%BD%BD%E4%B8%A5%E9%80%89APP%EF%BC%8C%E6%8A%A21%E5%85%83%E5%8C%85%E9%82%AE%E5%9B%A2%EF%BC%8C%E9%A2%86...&_stat_refer=%2F'
    }],
    DefaultShowDate:[
        {
            text:"明星产品 智能马桶盖 直降240元",
            color:"red",
            link:""
        }
        ],
    recentSearchDefault:[
        {  
            text:"马桶盖",
            link:""
        }
    ],
    hotSearchDate:[
        {
            text:"助眠好物",
            color:"red",
            link:"https://act.you.163.com/act/pub/FUVAhC14yv.html?keyword=%E5%8A%A9%E7%9C%A0%E5%A5%BD%E7%89%A91%E4%BB%B69%E6%8A%98%202%E4%BB%B68%E6%8A%98&_stat_search=default_user&searchWordSource=3&_stat_referer=index"
        },
        {
            text:"助眠好物",
            color:"",
            link:"https://act.you.163.com/act/pub/FUVAhC14yv.html?keyword=%E5%8A%A9%E7%9C%A0%E5%A5%BD%E7%89%A91%E4%BB%B69%E6%8A%98%202%E4%BB%B68%E6%8A%98&_stat_search=default_user&searchWordSource=3&_stat_referer=index"}
    ],
    customerSever: [{

        text: '在线客服',
        link: ''
    }, {
        text: '帮助中心',
        link: ''
    }, {
        text: '商务合作',
        link: ''
    }, {
        text: '开放平台',
        link: ''
    }],
    menuItems: [{
        text: "首页",
        link: ''
    }, {
        text: "居家",
        link: '',
        menuUlItem: [{
                text: '床品',
                link: '',
                menuLiItem: [{
                    text: '夏凉',
                    link: ''
                }, {
                    text: '床品件套',
                    link: ''
                }, {
                    text: '被枕',
                    link: ''
                }]
            },
            {
                text: '家具家装',
                link: '',
                menuLiItem: [{
                    text: '家具',
                    link: ''
                }, {
                    text: '灯具',
                    link: ''
                }, {
                    text: '布艺软装',
                    link: ''
                }, {
                    text: '家饰',
                    link: ''
                }]
            }, {
                text: '收纳',
                link: '',
                menuLiItem: [{
                    text: '收纳',
                    link: ''
                }, {
                    text: '旅行用品',
                    link: ''
                }, {
                    text: '晾晒除味',
                    link: ''
                }]
            }, {
                text: '医疗宠物',
                link: '',
                menuLiItem: [{
                    text: '家庭医疗',
                    link: ''
                }, {
                    text: '宠物',
                    link: ''
                }]
            }

        ]
    }, {
        text: "鞋包配饰",
        link: '',
        menuUlItem: [{
            text: '箱包',
            link: '',
            menuLiItem: [{
                text: '行李箱',
                link: ''
            }, {
                text: '女士包袋',
                link: ''
            },{
                text: '男士包袋',
                link: ''
            },{
                text: '钱包及小皮件',
                link: ''
            }]
        }, {
            text: '鞋靴',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '配饰配件',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }]
    }, {
        text: "服装",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "电器",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "洗护",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "饮食",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "厨房",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "婴童",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "文体",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }, {
        text: "特色区",
        link: '',
        menuUlItem: [{
            text: '',
            link: '',
            menuLiItem: [{
                text: '',
                link: ''
            }, {
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            },{
                text: '',
                link: ''
            }]
        }, {
            text: '',
            link: ''
        }, {
            text: '',
            link: ''
        }]
    }],
    imgsCount:[{
        alt: 'img1',
        link:'https://yanxuan.nosdn.127.net/9c1c9faa33500244e383f909d3208474.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    },
    {
        alt: 'img2',
        link:'https://yanxuan.nosdn.127.net/7e03800ec8df216f0eaaae649b88a650.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    },
    {
        alt: 'img3',
        link:'https://yanxuan.nosdn.127.net/e0f9051e1c408572ba1183dab48a32a0.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    },
    {
        alt: 'img4',
        link:'https://yanxuan.nosdn.127.net/27304c27c573b4ffeaa9bb7c5a67e655.jpg?imageView&quality=95&thumbnail=1920x420'
    },
    {
        alt: 'img5',
        link:'https://yanxuan.nosdn.127.net/75832a146d3a6c32cab561bbcca9ef9b.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    },
    {
        alt: 'img6',
        link:'https://yanxuan.nosdn.127.net/a591df9eca4fde3c5d5c413fb8d57e84.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    },
    {
        alt: 'img7',
        link:'https://yanxuan.nosdn.127.net/9c1c9faa33500244e383f909d3208474.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    },
    {
        alt: 'img8',
        link:'https://yanxuan.nosdn.127.net/f9716311d6dd169b17a597fb6d2222b9.jpg?imageView&quality=95&thumbnail=1920x420',
        url: 'http://www.youku.com'
    }],
    ProductsBoxs:[
        {
            number:0,
            title:"男士轻潮舒软老爹运动鞋",
            link1:"https://yanxuan.nosdn.127.net/4c607adec051e7311b40c37e9e6ed076.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/8e43233601ea2644b0e0fe30bde2378a.png?quality=95&thumbnail=265x265&imageView",
            Productprice:"438",
            ColorTwo:"display:block;",
            ColorText:"两色可选"
        },{
            number:1,
            title:"经典切尔西皮面女靴",
            link1:"https://yanxuan.nosdn.127.net/cbbdd7c5622a0eaab31e42247909c959.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/c0c46db2900faea56a786086ecdec95f.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"249",
            ColorText: null,
            ColorTwo:"display:none;"
        },{
            number:2,
            title:"网易智造R1智能折叠跑步机",
            link1:"https://yanxuan.nosdn.127.net/1f4a514f45be21c58d9f653b6a01198c.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/0124e41f1df434173808140d4d7c22e0.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"2119",
            ColorTwo:"display:none;"
        },{
            number:3,
            title:"女式经典风衣",
            link1:"https://yanxuan.nosdn.127.net/4e874802bfb82017bd6d854c54e692b2.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/7170015a8c85548573e8df5489a30863.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"119",
            ColorTwo:"display:none;"

        },{
            number:4,
            title:"男式经典真皮夹克衫",
            link1:"https://yanxuan.nosdn.127.net/ba259752608bc3e2f7fd8b966b365348.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/4e1695842a4d66177f2e2effff895da1.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"1299"
        },{
            number:5,
            title:"网易智造mini暖风机",
            link1:"https://yanxuan.nosdn.127.net/37423fe8917eea97ce273a801e3f87b9.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/ef03d0ea6003cf7e7c31f1ce09a67a56.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"129"
        },{
            number:6,
            title:"网易智造mini暖风机",
            link1:"https://yanxuan.nosdn.127.net/37423fe8917eea97ce273a801e3f87b9.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/ef03d0ea6003cf7e7c31f1ce09a67a56.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"129"
        },{
            number:7,
            title:"3双/5双装 女式日系罗纹中筒袜",
            link1:"https://yanxuan.nosdn.127.net/3767dc4e30cf9934592e0612553b8232.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/4fc04bffb6c95f505d913658c6817542.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"29.5"
        },{
            number:8,
            title:"3双/5双装 女式日系罗纹中筒袜",
            link1:"https://yanxuan.nosdn.127.net/3767dc4e30cf9934592e0612553b8232.png?quality=95&thumbnail=265x265&imageView",
            link2:"https://yanxuan.nosdn.127.net/4fc04bffb6c95f505d913658c6817542.jpg?quality=95&thumbnail=265x265&imageView",
            Productprice:"29.5"
        }
    
    ],
    indexPopularItemBox:[
        {
            title:"便携手持挂烫机",
            link:"https://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?quality=95&thumbnail=320x320&imageView",
            itemTag:"三石福利价",
            retailPrice:99,
            counterPrice:199
        },{
            title:"便携手持挂烫机",
            link:"https://yanxuan.nosdn.127.net/0fd986c542d483294ab89e70650c9f5f.png?quality=95&thumbnail=180y180&imageView",
            itemTag:"限时购",
            itemTag2:"爆品",
            itemTag3:"满赠",
            retailPrice:99,
            counterPrice:"¥ 199"
        },{
            title:"智能马桶盖",
            link:"https://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?quality=95&thumbnail=180y180&imageView",
            itemTag:"爆品",
            retailPrice:1599,
            counterPrice:"",
        },{
            title:"泰国制造 天然乳胶床垫 7.5CM",
            link:"https://yanxuan.nosdn.127.net/8c994850a3612633e441584bb115bf38.png?quality=95&thumbnail=180y180&imageView",
            itemTag:"满e减",
            retailPrice:1599,
            counterPrice:"",
        },{
            title:"泰国制造 天然乳胶床垫 7.5CM",
            link:"https://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?quality=95&thumbnail=180y180&imageView",
            itemTag:"满e减",
            retailPrice:1599,
            counterPrice:"",
        },{
            title:"泰国制造 天然乳胶床垫 7.5CM",
            link:"https://yanxuan.nosdn.127.net/da8ba5cd1fb0cfd689ebbe905a330913.png?quality=95&thumbnail=180y180&imageView",
            itemTag:"满e减",
            retailPrice:1599,
            counterPrice:"",
        },{
            title:"泰国制造 天然乳胶床垫 7.5CM",
            link:"https://yanxuan.nosdn.127.net/a77fb86ea742720fa25bd98cc1e5c112.png?quality=95&thumbnail=180y180&imageView",
            itemTag:"满e减",
            retailPrice:1599,
            counterPrice:"",
        }
    ],
    FlashItemList:[
        {
            number:1,
            title:"切尔西短款雨靴",
            link:"https://yanxuan.nosdn.127.net/886373f454b8307100f33301db7c2abc.png?imageView&thumbnail=180x180&quality=95",
            p:"保护双脚，四季百搭",
            restorNumber:558,
            widthPercent:"148px",
            aPrice:75.6,
            oPrice:108
        },{
            number:2,
            title:"日本制造 24K金T型美容棒",
            link:"https://yanxuan.nosdn.127.net/3ecd145289f5584750b7322c5baf840e.png?imageView&thumbnail=180x180&quality=95",
            p:"COSME大赏销量冠军",
            restorNumber:236,
            widthPercent:"128px",
            aPrice:369,
            oPrice:459

        },{
            number:3,
            title:"日式多功能午睡枕 新款",
            link:"https://yanxuan.nosdn.127.net/41339dc93140643db8d6224d8e9b46dd.png?imageView&thumbnail=180x180&quality=95",
            p:"针织透气，日式条纹",
            restorNumber:345,
            widthPercent:"18px",
            aPrice:59.3,
            oPrice:79

        },{
            number:4,
            title:"皇乳营养液 500克",
            link:"https://yanxuan.nosdn.127.net/42180962d774b16c62ff9a28793afb18.png?imageView&thumbnail=180x180&quality=95",
            p:"增强免疫力，抗辐射",
            restorNumber:272,
            widthPercent:"118px",
            aPrice:96,
            oPrice:160
        }
    ],
    ModuleList:[
        {
            number:0,
            title:"今日特价",
            searchAll:"查看全部",
            ModuleBd:[
                {
                    link:"https://yanxuan.nosdn.127.net/a77fb86ea742720fa25bd98cc1e5c112.png?quality=95&thumbnail=130x130&imageView",
                    name:"日本制造 天然草本睡眠足贴",
                    limitPrice:59.9,
                    limitText:"限时价",
                    counterPrice:69,
                    discount:8.7,
                },
                {
                    link:"https://yanxuan.nosdn.127.net/a77fb86ea742720fa25bd98cc1e5c112.png?quality=95&thumbnail=130x130&imageView",
                    name:"日本制造 天然草本睡眠足贴",
                    limitPrice:59.9,
                    limitText:"限时价",
                    counterPrice:69,
                    discount:8.7,
                },
                {
                    link:"https://yanxuan.nosdn.127.net/a77fb86ea742720fa25bd98cc1e5c112.png?quality=95&thumbnail=130x130&imageView",
                    name:"日本制造 天然草本睡眠足贴",
                    limitPrice:59.9,
                    limitText:"限时价",
                    counterPrice:69,
                    discount:8.7,
                },
                {
                    link:"https://yanxuan.nosdn.127.net/a77fb86ea742720fa25bd98cc1e5c112.png?quality=95&thumbnail=130x130&imageView",
                    name:"日本制造 天然草本睡眠足贴",
                    limitPrice:59.9,
                    limitText:"限时价",
                    counterPrice:69,
                    discount:8.7,
                }
            ]
        },
        {
            number:1,
            title:"量贩囤货",
            searchAll:"全部",
            ModuleBd:[
                {
                    link:"https://yanxuan.nosdn.127.net/88576f942d8286d3b6783e555c1a519b.png?quality=95&thumbnail=50x50&imageView",
                    limitPrice:59.9,
                    iconCart:"w-icon-cart",
                    name:"棉质生活 婴儿纯棉柔巾"
                },
                {
                    link:"https://yanxuan.nosdn.127.net/88576f942d8286d3b6783e555c1a519b.png?quality=95&thumbnail=50x50&imageView",
                    limitPrice:59.9,
                    iconCart:"w-icon-cart",
                    name:"棉质生活 婴儿纯棉柔巾"
                }
            ]
        }
        ,
        {
            number:2,
            title:"今日APP价",
            searchAll:"全部",
            ModuleBd:[
                {
                    link:"https://yanxuan.nosdn.127.net/88576f942d8286d3b6783e555c1a519b.png?quality=95&thumbnail=50x50&imageView",
                    limitPrice:59.9,
                    iconCart:"w-icon-cart",
                    name:"棉质生活 婴儿纯棉柔巾"
                },
                {
                    link:"https://yanxuan.nosdn.127.net/88576f942d8286d3b6783e555c1a519b.png?quality=95&thumbnail=50x50&imageView",
                    limitPrice:59.9,
                    iconCart:"w-icon-cart",
                    name:"棉质生活 婴儿纯棉柔巾"
                }
            ]
        }

    ],
    BigBox:[
        {
            nameH3:"居家",
            Names:[
                {   
                    name:"床品件套"
                },
                {   
                    split:"/",
                    name:"被枕"
                },
                {
                    split:"/",
                    name:"家具"
                },
                {
                    split:"/",
                    name:"灯具"
                },
                {
                    split:"/",
                    name:"收纳"
                },
                {
                    split:"/",
                    name:"布艺软装"
                },
                {
                    split:"/",
                    name:"家饰"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/9df76d9d42d2bf907bfdf4498db71800.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"林音系列实木床",
                colorNum:"2色可选",
                link:"https://yanxuan.nosdn.127.net/58acbc1b7450c0bd6c685fc8acd0aab3.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"今日特价",
                retailPrice:1759.1,
                counterPrice:1999
            },
            {
                title:"仕趣系列 储物床",
                link:"https://yanxuan.nosdn.127.net/0e946a58bea85f2663b1dfac6294584f.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"挑款师特惠",
                retailPrice:3289.29,
                counterPrice:4699
            },
            {
                title:"仕趣系列 储物床",
                link:"https://yanxuan.nosdn.127.net/60de0631b077e236160a4d621c00ebe8.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"挑款师特惠",
                retailPrice:3289.29,
                counterPrice:4699
            },
            {
                title:"仕趣系列 储物床",
                link:"https://yanxuan.nosdn.127.net/f3e7c097d9f0682bb9311a4f94e0448e.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"挑款师特惠",
                retailPrice:3289.29,
                counterPrice:4699
            }
        ]
        },
        {
            nameH3:"鞋包配饰",
            Names:[
                {   
                    name:"行李箱"
                },
                {   
                    split:"/",
                    name:"女士包袋"
                },
                {
                    split:"/",
                    name:"男士包袋"
                },
                {
                    split:"/",
                    name:"钱包及小皮件"
                },
                {
                    split:"/",
                    name:"女鞋"
                },
                {
                    split:"/",
                    name:"男鞋"
                },
                {
                    split:"/",
                    name:"拖鞋"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/e3e4a9a317c8db8b4d062710986b9f89.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"短筒皮毛一体女士雪地靴",
                colorNum:"4色可选",
                link:"https://yanxuan.nosdn.127.net/a7642dcbab7d4b3ec715c18c42d43373.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"三石福利价",
                retailPrice:199,
                counterPrice:299
            },
            {
                title:"切尔西牛皮敲花女靴",
                link:"https://yanxuan.nosdn.127.net/20730762db9507fc0720071df2dcaaee.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"APP特惠",
                counterPrice:429,
                retailPrice:199
            },
            {
                title:"日式和风条纹男女家居拖鞋",
                link:"https://yanxuan.nosdn.127.net/213c5adcd1181983207cef460f1115b6.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"挑款师特惠",
                colorNum:"4色可选",
                retailPrice:3289.29,
                counterPrice:4699
            },
            {
                title:"仕趣系列 储物床",
                link:"https://yanxuan.nosdn.127.net/f3e7c097d9f0682bb9311a4f94e0448e.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:3289.29,
                counterPrice:4699
            }
        ]
        },
        {
            nameH3:"服装",
            Names:[
                {   
                    name:"男士外套"
                },
                {   
                    split:"/",
                    name:"男士针织衫 / 卫衣"
                },
                {
                    split:"/",
                    name:"男士裤装"
                },
                {
                    split:"/",
                    name:"男士牛仔"
                },
                {
                    split:"/",
                    name:"男士衬衣"
                },
                {
                    split:"/",
                    name:"男式T恤/POLO"
                },
                {
                    split:"/",
                    name:"女式外套"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/64128355e65c75f93ee062b220bba0a0.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"男式工装风夹克羽绒服",
                colorNum:"4色可选",
                link:"https://yanxuan.nosdn.127.net/cc8921dab75b085485fcc46415fe8829.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"新品",
                itemTag1:"品牌日专享",
                itemTag2:"满赠",
                retailPrice:459,
                counterPrice:599
            },
            {
                title:"女式速暖双层加厚保暖内衣套装（上衣+裤）",
                link:"https://yanxuan.nosdn.127.net/48053a64e3a217461123cace8831860a.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:259
            },
            {
                title:"100%羊毛 男式经典美利奴V领羊毛衫",
                link:"https://yanxuan.nosdn.127.net/98b66ee406a588bdc22a0ef69ac980b1.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"分会场专享",
                colorNum:"2色可选",
                retailPrice:180.29,
                counterPrice:329
            },
            {
                title:"男式经典牛津纺衬衫",
                link:"https://yanxuan.nosdn.127.net/aab85231160337b5f7432364a5da6a50.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:59,
                itemTag:"开天辟地价",
                counterPrice:149
            }
        ]
        },
        {
            nameH3:"电器",
            Names:[
                {   
                    name:"生活电器"
                },
                {   
                    split:"/",
                    name:"厨房电器"
                },
                {
                    split:"/",
                    name:"个护健康"
                },
                {
                    split:"/",
                    name:"数码"
                },
                {
                    split:"/",
                    name:"影音娱乐"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/1d0b6040e0dc6fbf24b628b8abec3dd3.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"指触LED子母化妆镜",
                colorNum:"2色可选",
                link:"https://yanxuan.nosdn.127.net/cc8921dab75b085485fcc46415fe8829.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:109
            },
            {
                title:"网易智造空气感超薄苹果手机壳",
                link:"https://yanxuan.nosdn.127.net/58de46e4ece818a686e54510606c091f.png?quality=95&thumbnail=265x265&imageView",
                counterPrice:39
            },
            {
                title:"网易智造X3 Plus蓝牙HiFi耳机",
                link:" https://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"爆品",
                retailPrice:199
            },
            {
                title:"网易智造可折叠便携电熨斗",
                link:"https://yanxuan.nosdn.127.net/b850f59dfff59ce1d8468a90d780f555.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:89
            }
        ]
        },
        {
            nameH3:"洗护",
            Names:[
                {   
                    name:"纸品湿巾"
                },
                {   
                    split:"/",
                    name:"家庭清洁"
                },
                {
                    split:"/",
                    name:"生理用品"
                },
                {
                    split:"/",
                    name:"女性用品"
                },
                {
                    split:"/",
                    name:"浴室用具"
                },
                {
                    split:"/",
                    name:"毛巾浴巾"
                },
                {
                    split:"/",
                    name:"美妆"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/0d8b9355ed6542de252dd21f456c520e.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"小方管系列 哑光唇膏",
                link:"https://yanxuan.nosdn.127.net/f7db92b8feff81ec15c3f9adc35355dd.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:89
            },
            {
                title:"阿瓦提长绒棉超柔毛巾",
                link:"https://yanxuan.nosdn.127.net/d3571a8e36904b030b24d7c44e36c88e.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:23,
                colorNum:"2色可选"
            },
            {
                title:"小方盖系列 水性可撕指甲油",
                link:"https://yanxuan.nosdn.127.net/c95a4d1daa62d7a9004208752a1a2098.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:14.9,
                colorNum:"2色可选"
            },
            {
                title:"美国制造 除甲醛空气净化剂227g",
                link:"https://yanxuan.nosdn.127.net/2d43d642d928240ef2013e8da1c133b2.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:38,
                itemTag:"爆品",
                itemTag1:"条款师特惠",
                colorNum:"2色可选",
                retailPrice:38,
                counterPrice:45
            }
        ]
        },
        {
            nameH3:"饮食",
            Names:[
                {   
                    name:"饼干糕点"
                },
                {   
                    split:"/",
                    name:"小食糖巧"
                },
                {
                    split:"/",
                    name:"坚果炒货"
                },
                {
                    split:"/",
                    name:"肉类零食"
                },
                {
                    split:"/",
                    name:"蜜饯果干"
                },
                {
                    split:"/",
                    name:"冲调饮品"
                },
                {
                    split:"/",
                    name:"茶包花茶"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/3bd498fc41513218c30dfbd25f53b780.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"大丈夫冻干牛肉面 6杯装",
                link:"https://yanxuan.nosdn.127.net/b9dec2158dc46a69f2f8bb106b4595c1.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:33.9,
                colorNum:"4个规格"
            },
            {
                title:"四川酸辣粉 185克*6盒",
                link:"https://yanxuan.nosdn.127.net/cc0c69427ba052091a2ff8b627637665.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:69
            },
            {
                title:"胎菊 50克",
                link:"https://yanxuan.nosdn.127.net/ac617e412406fc940b304910e6b7eba5.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:20,
                itemTag:"满折"
            },
            {
                title:"月见和菓子（棉花糖麻薯) 184克",
                link:"https://yanxuan.nosdn.127.net/83b3759078b1d08c3bd1c1889f75c018.png?quality=95&thumbnail=265x265&imageView",
                itemTag:"满折",
                colorNum:"4个口味",
                retailPrice:18
            }
        ]
        },
        {
            nameH3:"厨房",
            Names:[
                {   
                    name:"水具杯壶"
                },
                {   
                    split:"/",
                    name:"餐具"
                },
                {
                    split:"/",
                    name:"锅具"
                },
                {
                    split:"/",
                    name:"清洁保鲜"
                },
                {
                    split:"/",
                    name:"厨房配件"
                },
                {
                    split:"/",
                    name:"刀剪砧板"
                },
                {
                    split:"/",
                    name:"茶具咖啡具酒具"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/70f55f2e37f622d9d0b102c4254b623c.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"丹桂金秋限量款珐琅锅",
                link:"https://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:309,
                counterPrice:369,
                itemTag:"双十一新品预售"
            },
            {
                title:"德式轻量保温杯",
                link:"https://yanxuan.nosdn.127.net/02da8bce2fa3a182d398f6a09e8ac2f5.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:119,
                colorNum:"4色可选"
            },
            {
                title:"日本制造 可叠加厨房收纳盒（单个装）",
                link:"https://yanxuan.nosdn.127.net/d59eacdaaf45cff38c59ecae3845b8d6.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:9.9
            },
            {
                title:"日本制造 雪平锅",
                link:"https://yanxuan.nosdn.127.net/d85e444fbc8be79e7c5dc02881c90152.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:149
            }
        ]
        },
        {
            nameH3:"婴童",
            Names:[
                {   
                    name:"童鞋"
                },
                {   
                    split:"/",
                    name:"中大童服装"
                },
                {
                    split:"/",
                    name:"小童服装"
                },
                {
                    split:"/",
                    name:"新生儿服装"
                },
                {
                    split:"/",
                    name:"婴童床品"
                },
                {
                    split:"/",
                    name:"儿童家具收纳"
                },
                {
                    split:"/",
                    name:"毛巾口水巾"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/81331a256e25a0e3dddf57d60ecee1b3.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"小海马儿童运动鞋",
                link:"https://yanxuan.nosdn.127.net/1897fb4550cf38ca32b2ee08b115756e.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:99,
                counterPrice:129,
                itemTag:"婴童专享",
                colorNum:"8色可选"
            },
            {
                title:"可调节腰围.简约梭织水洗小童长裤",
                link:"https://yanxuan.nosdn.127.net/0b96febf2f06ca90cede71da19a24daf.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:99,
                colorNum:"2色可选"
            },
            {
                title:"饱满充棉连帽马甲背心（儿童）",
                link:"https://yanxuan.nosdn.127.net/0b736a1af1fc68710e8677410ce4346e.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:199,
                colorNum:"3色可选"
            },
            {
                title:"儿童卡通双肩包",
                link:"https://yanxuan.nosdn.127.net/c821642575c543469efedc2719da5871.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:79
            }
        ]
        },
        {
            nameH3:"文体",
            Names:[
                {   
                    name:"文具"
                },
                {   
                    split:"/",
                    name:"运动户外"
                },
                {
                    split:"/",
                    name:"乐器唱片"
                },
                {
                    split:"/",
                    name:"礼品卡"
                },
                {
                    split:"/",
                    name:"云音乐周边"
                },
                {
                    split:"/",
                    name:"游戏点卡"
                },
                {
                    split:"/",
                    name:"暴雪周边"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/270aed432a238be3f405d5aafdcaad4c.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"弹力编织休闲腰带 网易游戏",
                link:"https://yanxuan.nosdn.127.net/003c036cbb50ef824941707b01f34dfd.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:99
            },
            {
                title:"头层牛皮卡包 网易游戏",
                link:"https://yanxuan.nosdn.127.net/ab983f5a0ecb53b9cea3f4ad7c9eeb88.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:89
            },
            {
                title:"弹性透气护膝",
                link:"https://yanxuan.nosdn.127.net/7ce2b330bcffeebc7d794a42da792f59.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:59
            },
            {
                title:"Red-s Play 概念红款 尤克里里",
                link:"https://yanxuan.nosdn.127.net/0dd6e1fae79a4fec71e195cf4c009741.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:1880
            }
        ]
        },
        {
            nameH3:"特色区",
            Names:[
                {   
                    name:"日本馆"
                },
                {   
                    split:"/",
                    name:"韩国馆"
                },
                {
                    split:"/",
                    name:"东南亚馆"
                },
                {
                    split:"/",
                    name:"欧美馆"
                },
                {
                    split:"/",
                    name:"澳新馆"
                },
                {
                    split:"/",
                    name:"智造馆"
                },
                {
                    split:"/",
                    name:"春风馆"
                }
            ],
            link:"https://yanxuan.nosdn.127.net/e9637a0e58dfdb2b24090cf29dca5fb5.jpg?imageView&&thumbnail=1090x310&quality=95",
            itemList:[{
                title:"丹麦制造 95.8%高支白鹅绒被可机洗",
                link:"https://yanxuan.nosdn.127.net/5b0aed79b7c9a0555b930ece1cf6c6e4.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:2899,
                colorNum:"丹麦制造",
                counterPrice:3599,
                itemTag:"双11新品预售"
            },
            {
                title:"韩国制造 1/2型 省水超柔化妆棉 ",
                link:"https://yanxuan.nosdn.127.net/aba3ae916539df488143f6c3e367e3c7.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:19,
                colorNum:"韩国制造",
                itemTag:"新品"
            },
            {
                title:"意大利制造 男女款100%超细美利奴毛衣",
                link:"https://yanxuan.nosdn.127.net/fb6e2a0fd689c95d37b3a95f458c523b.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:494.5,
                counterPrice:899,
                colorNum:"意大利制造",
                itemTag:"五折秒杀区"
            },
            {
                title:"日本制造 雪平锅",
                link:"https://yanxuan.nosdn.127.net/d85e444fbc8be79e7c5dc02881c90152.png?quality=95&thumbnail=265x265&imageView",
                retailPrice:149,
                colorNum:"日本制造"
            }
        ]
        }
    ],
    indexComment:[{
        title:"Yessing女式百搭加绒保暖针织裤",
        link:"https://yanxuan.nosdn.127.net/c019122e0e2caa96d6caf3bf109ce92c.jpg?imageView&quality=95&thumbnail=355x355",
        fontname:"M***8",
        date:"2018-2-3",
        Price:599,
        dateContent:"真的超级舒服，每次躺在上面刷剧，看书或者打游戏都超级爽啊。"

    },{
        title:"Yessing女式百搭加绒保暖针织裤",
        link:"https://yanxuan.nosdn.127.net/df02132f29cf0a378f8991d3cb0b3c4e.jpg?imageView&quality=95&thumbnail=355x355",
        fontname:"M***8",
        date:"2018-2-3",
        Price:599,
        dateContent:"真的超级舒服，每次躺在上面刷剧，看书或者打游戏都超级爽啊，一直想买来着，虽然同学觉得是浪费."

    },{
        title:"Yessing女式百搭加绒保暖针织裤",
        link:"https://yanxuan.nosdn.127.net/fad1b0d5d3c163e9e0e5f9a276af09e5.jpg?imageView&quality=95&thumbnail=355x355",
        fontname:"M***8",
        date:"2018-2-3",
        Price:599,
        dateContent:"真的超级舒服，每次躺在上面刷剧，看书或者打游戏都超级爽啊，一直想买来着，虽然同学觉得是浪费，而且宿舍的单人床有点放不下它，但是它可坐可躺."
    },{
        title:"Yessing女式百搭加绒保暖针织裤",
        link:"https://yanxuan.nosdn.127.net/fad1b0d5d3c163e9e0e5f9a276af09e5.jpg?imageView&quality=95&thumbnail=355x355",
        fontname:"M***8",
        date:"2018-2-3",
        Price:599,
        dateContent:"真的超级舒服，每次躺在上面刷剧，看书或者打游戏都超级爽啊，一直想买来着，虽然同学觉得是浪费，而且宿舍的单人床有点放不下它，但是它可坐可躺，整个人到了上面就不想走，以后有自"
    }]
}