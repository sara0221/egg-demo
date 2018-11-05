{# 写模板的地方 #}
<html>

<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/reset.css" />
    <link rel="stylesheet" href="/public/css/normalize.css" />
    <link rel="stylesheet" href="/public/css/index.css" />
</head>

<body>
    <div class="header">
        <div class="top-header">
            <div class="top-header-inner">
                <div class="top-header-left clearfix">
                    <div class="header-left-tip">
                        <a href="http://you.163.com/story">好的生活，没那么贵</a>
                    </div>
                    <div class="header-left-info">
                        <ul id="yanxuan-notice-ul" class="header-notice-wrap" style="top:-10px;">
                            {% for item in notice %}
                            <li class="notice-list-item" style="line-height:30px;">
                                <a class="notice-link" href="{{item.link}}">{{item.text}}</a>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
                <div class="top-header-right">
                    <ul class="top-header-right-ul">
                        <li class="right-ul-li">
                            <a href="" class="right-ul-li-a">登录</a>
                        </li>
                        <li class="right-ul-li">
                            <a href="" class="right-ul-li-a">注册</a>
                        </li>
                        <li class="right-ul-li">
                            <a href="" class="right-ul-li-a">我的订单</a>
                        </li>
                        <li class="right-ul-li">
                            <a href="" class="right-ul-li-a">会员</a>
                        </li>
                        <li class="right-ul-li">
                            <a href="" class="right-ul-li-a">甄选家</a>
                        </li>
                        <li class="right-ul-li">
                            <a href="" class="right-ul-li-a">企业采购</a>
                        </li>
                        <li class="right-ul-li drop-down-menu-li">
                            <div class="drop-down-menu right-ul-li-div">
                                <div class="icon-arrow-up"></div>
                                <ul class="drop-down-menu-ul">
                                {% for item in customerSever %}
                                <li class="notice-list-item" style="">
                                <a class="notice-link" href="{{item.link}}">
                                {{item.text}}</a>
                                </li>
                                {% endfor %}
                                </ul>
                            </div>
                            <a href="" class="right-ul-li-a" class="right-cumstomer">客户服务
                                <i class="icon-upArrow"> </i>

                            </a>
                        </li>
                        <li class="right-ul-li">
                            <a href="">
                                <i class="icon-app"></i>APP</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <div class="nav-header">
            <div class="nav-header-inner">
                <a href="http://you.163.com" title="网易严选" target="_blank"><i class="yx-icon-nav">

                    </i></a>
                <div class="nav-cartEnterWrap">
                    <div class="nav-cartEnter">
                        <i class="yx-cartEnter-icon .yx-logo-imag"></i>
                    </div>
                </div>
                <ul class="nav-top nav-top-border">
                    {% for items in menuItems %}
                    <li class="yx-tabNav-item">
                        <a href="{{items.link}}">{{items.text}}</a>
                        <div class="yx-dropMenu">
                            <div></div>
                            {% for item in items.menuUlItem %}
                                <ul class="yx-dropMenu-ul">{{item.text}}
                                {% for _item in item.menuLiItem %}
                                    <li class="yx-dropMenu-li">
                                        <a href="{{_item.link}}">{{_item.text}}</a>
                                    </li>
                                {% endfor %}
                                </ul>
                            {% endfor %}
                        </div>
                    </li>
                    {% endfor %}
                    <li class="yx-tabNav-split"></li>
                    <li class="yx-tabNav-item"><a>为你严选</a></li>
                    <li class="yx-tabNav-item"><a>众筹</a></li>
                </ul>
                <div class="yx-search">
                    <input type="text" class="yx-searchInput"></input>
                    {% for item in DefaultShowDate %}
                    <div class="yx-searchDefaultKeyword">{{item.text}}</div>
                    {% endfor %}
                </div>
                <div class="searchBox">
                    <div class="search-recently">
                        <span class="yx-icon-yxword">最近搜索</span>
                        <span class="yx-icon-yxnormal icon-yxnormal-deleteAll"></span>
                        <ul class="recentSearchDefault"></ul>
                    </div>
                    <div class="search-history">
                        <span>大家都在搜</span>
                        <ul>
                        {% for item in hotSearchDate %}
                           <li><a href="{{item.link}}" target="_self" style="color:{{item.color}};">{{item.text}}</a></li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
                <a class="yx-searchButton"  target="_self">
                    <i class="yx-icon-yxtop icon-yxtop-search"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="g-bd">
        <div class="js-slick m-focusSlick">
            
            <div class="slick-list draggable">
                <div class="imgCenterBanner" style="left:0px;">
                    {%for item in imgsCount%}
                    <a href="{{item.url}}">
                        <img src="{{item.link}}">
                    </a>          
                {% endfor %}
                 </div>
            </div>
            <button type="button" class="slick-prev icon-normal-slick-leftRound"></button>
            <button type="button" class="slick-next icon-normal-slick-rightRound"></button>
            <div class="slick-dots" >
                <span class="slick-active" id="">1
                </span>
                <span class="tag-span" id="">2
                </span>
                <span class="tag-span" id="">3
                </span>
                <span class="tag-span" id="">4
                </span>
                <span class="tag-span" id="">5
                </span>
                <span class="tag-span" id="">6
                </span>
                <span class="tag-span" id="">7
                </span>
                <span class="tag-span" id="">8
                </span>
            </div>
        </div>
        <div class="m-manufacturer g-row">
            <div class="m-commonHeader">
                <div class="f-left lh1">
                    <a href="" targert="_blank">
                        <h3 class="name">品牌制造商</h3>
                    </a>
                    <small class="frontName f-fz14">工厂直达消费者，剔除品牌溢价</small>
                </div>
                <div class="f-right lh1">
                    <a href="" target="_blank" class="moreItems f-fz14">更多制造商 ></a>
                </div>
            </div>
            <div class="bd">
                <div class="manufactureList">
                    <a targert="_blank" class="manufacture first large" href="">
                        <div class="mask" ></div>
                        <div class="name">
                            <span>海外制造商</span>
                            <span class="newShelfTag">上新</span>
                        </div>
                        <div class="price">9.9元起</div>
                        <div style="width:100%;height:100%;">
                            <img class="img img-noBgPic img-lazyload j-lazyload img-lazyoaded" src="http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg">
                        </div>
                    </a>
                     <a targert="_blank" class="manufacture first large middle" href="">
                        <div class="mask" ></div>
                        <div class="name">
                            <span>CK制造商</span>
                            <span class="newShelfTag">上新</span>
                        </div>
                        <div class="price">25元起</div>
                        <div style="width:100%;height:100%;">
                            <img class="img img-noBgPic img-lazyload j-lazyload img-lazyoaded" src="http://yanxuan.nosdn.127.net/b72c6486bc681f7b0dcb87d9af0ab1bb.png">
                        </div>
                    </a>
                     <a targert="_blank" class="manufacture small" href="">
                        <div class="mask" ></div>
                        <div class="name">
                            <span>新秀丽制造商</span>
                        </div>
                        <div class="price">34.9元起</div>
                        <div style="width:100%;height:100%;">
                            <img class="img img-noBgPic img-lazyload j-lazyload img-lazyoaded" src="http://yanxuan.nosdn.127.net/957c8d117473d103b52ff694f372a346.png">
                        </div>
                    </a>
                    <a targert="_blank" class="manufacture small last" href="">
                        <div class="mask" ></div>
                        <div class="name">
                            <span>MUJU制造商</span>
                        </div>
                        <div class="price">39.9元起</div>
                        <div style="width:100%;height:100%;">
                            <img class="img img-noBgPic img-lazyload j-lazyload img-lazyoaded" src="http://yanxuan.nosdn.127.net/574cea67f235598950acdbae4b5bdd5b.jpg">
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="m-newProducts g-row">
            <div class="m-commonHeader">
                <div class="f-left lh1">
                    <a href="" targert="_blank">
                        <h3 class="name">新品首发</h3>
                        <small class="frontName f-fz14">为你寻觅世间好物</small>
                </div>
                <div class="f-right lh1">
                    <a href="" targert="_blank" class="moreItems f-fz14">更多新品 ></a>
                </div>
            </div>
            <div class="bd slickWidth">
                <ul class="itemList">
                    <div id="js-newItemSlick" class="m-newItemSlick slick-initialized slick-slider">
                        <button type="button" class="slick-prev icon-normal-slick-leftRound w-icon-normal slick-arrow"></button>
                        <div class="slick-list draggable">
                         <div class="slick-track-inner">
                            <div class="slick-track" style="left:0px;">
                               
                                {% for item in ProductsBoxs %}
                               <div class="m-product m-newProduct newProduct-{{item.number}} slick-slide slick-active">
                                    <div class="hd">
                                        <a class="imgWrap" href="" title={{item.title}} targert="_blank" >
                                           
                                            <div>
                                                <img class="img white img-lazyload img-lazyloaded" src="{{item.link1}}">
                                            </div>
                                            <div>
                                                <img class="imgScene img-lazyload img-lazyloaded" src="{{item.link2}}">
                                            </div>
                                             {% if item.ColorText %}
                                            <div class="colorNum">{{item.ColorText}}</div>
                                            {% endif %}
                                        </a>
                                    </div>
                                    <div class="bd">
                                        <div class="prdtTags"></div>
                                        <h4 class="name">
                                            <a href="" title={{item.title}} class="nameNext">
                                                <span class="spanTitle">{{item.title}}</span>
                                            </a>
                                        </h4>
                                        <p class="price">
                                            <span class="retailPrice">
                                                <span>¥</span>
                                                <span>{{item.Productprice}}</span>
                                            </span>
                                            <span></span>
                                        </p>
                                    </div>
                               </div>
                               {% endfor %}
                                </div>
                            </div>
                        </div>
                        <button type="button" class="slick-next icon-normal-slick-rightRound w-icon-normal slick-arrow"></button>
                    </div>
                </ul>
            </div>
            <div class="f-hide j-addNewItemList"></div>
        </div>
        <div class="m-indexPopularItem">
            <div class="g-row" >
                <div class="m-commonHeader">
                    <div class="f-left lh1">
                        <a href="" targert="_blank" class="f-left-a">
                            <h3 class="name">人气推荐</h3>
                        </a>
                        <div class="m-commonTab tabList">
                            <div class="innerWrap">
                                <ul>
                                    <li class="item active">
                                        <a href="">编辑推荐</a>
                                    </li>
                                    <li class="item">
                                        <a href="">热销总榜</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="f-right lh1">
                        <a class="moreItems f-fz14" targert="_blank">更多推荐></a>
                    </div>
                </div>
                <div class="showContainer">
                    {% for item in indexPopularItemBox %}
                        <div class="m-product popularItem m-popularItem">
                            <div class="hd">
                                <a href="" title={{item.title}} targert="_blank " class="imgWrap">
                                    <div>
                                        <img class="img white img-lazyload j-lazyload img-lazyloaded" src="{{item.link}}" alt="{{item.title}}" >
                                    </div>
                                    <div class="colorNum"></div>
                                </a>
                            </div>
                            <div class="bd">
                                <div class="prdtTags">
                                    <span class="itemTag">{{item.itemTag}}</span>
                                    {% if item.itemTag2 %}
                                    <span class="itemTagB">{{item.itemTag2}}</span>
                                    {% endif %}

                                    {% if item.itemTag3 %}
                                    <span class="itemTagM">{{item.itemTag3}}</span>
                                    {% endif %}
                                </div>
                                <h4 class="name">
                                    <span>{{item.title}}</span>
                                </h4>
                                <p class="price">
                                    <span class="retailPrice">
                                        <span>¥</span>
                                        <span>{{item.retailPrice}}</span>
                                    </span>
                                    {% if item.counterPrice %}
                                    <span class="counterPrice">
                                        <span>{{item.counterPrice}}</span>
                                    </span>
                                    {% endif %}
                                </p>
                            </div>
                        </div>
                    {% endfor %}
                </div>
            </div>
        </div>
        <div id="flashSaleContainer">
            <div class="m-flashSale">
                <div class="g-row">
                    <header class="hd">
                        <a class="left" href="" targert="_blank">
                            <h3>限时购</h3>
                        </a>
                        <a class="right" href="" targert="_blank">更多抢购&nbsp;></a>
                    </header>
                    <section class="bd">
                        <div class="flashSaleLt">
                            <div class="screenHd">22点场</div>
                            <div class="line"></div>
                            <div class="sreenEndTips">距离结束还剩</div>
                            <div class="m-countDown">
                               <span class="w-cd j-hour" id="hour"></span> 
                               <span class="colon">:</span>
                               <span class="w-cd j-minute" id="minute"></span>
                               <span class="colon">:</span>
                               <span class="w-cd j-second" id="second"></span>
                            </div>
                            <span class="seeMoreBtn">查看全部&nbsp;></span>
                            <a href="" targert="_blank" class="link"></a>
                        </div>
                        <div class="flashSaleRt flahItemList" id="flashItemList">
                            {% for item in FlashItemList %}
                            <section class="m-flashSaleProduct flashSaleItem-{{item.number}}">
                                <div class="lt">
                                    <a href="" class="picIn" targert="_blank" title={{item.title}}>
                                        <img src={{item.link}} alt={{item.title}} class="pic">
                                    </a>
                                </div>
                                <div class="rt">
                                    <h2 class="itemName">
                                        <a href="" targert="_blank" class="link">{{item.title}}</a>
                                    </h2>
                                    <p class="itemDes">{{item.p}}</p>
                                    <div class="itemNum">
                                        <div class="numBar">
                                            <div class="numbarIn hasSellVolume" style="width:{{item.widthPercent}};"></div>
                                        </div>
                                        <div class="numTips">还剩{{item.restorNumber}}件</div>
                                    </div>
                                    <div class="itemPrice">
                                        <span class="aPrice">限时价
                                            <span class="yuan">¥<span>
                                            <span class="aPriceIn bold">{{item.aPrice}}</span>
                                        </span>
                                        <span class="oPrice">
                                            &nbsp;
                                            <span class="oPriceIn">¥{{item.oPrice}}</span>
                                        </span>
                                    </div>
                                    <a class="w-btn tobuyBtn" targert="_blank" href="">立即抢购</a>
                                </div>
                            </section>
                            {% endfor %}
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="m-saleCenter">
            <div class="g-row">
                <div class="m-commonHeader">
                    <div class="f-left lh1">
                        <a href="" targert="_blank">
                            <h3 class="name">福利社</h3>
                        </a>
                    </div>
                    <div class="f-right lh1">
                        <a href="" targert="_blank">查看全部福利&nbsp;></a>
                    </div>
                </div>
                <div class="saleCenterList">
                    <div class="m-indexCarousel f-fl">
                        <div class="m-focus">
                            <div class="focus-bd">
                                <div class="js-slick m-focusSlick slick-initialized slick-slider slick-dotted">
                                    <div class="slick-list draggable">
                                        <div class="slick-track">
                                            <div class="item normal slick-slide">
                                                <a href="" class="wrap">
                                                    <img src="https://yanxuan.nosdn.127.net/2dff1fab7c67be8db190f8dec0c40ea8.jpg?imageView&quality=95&thumbnail=224x376">
                                                </a>
                                            </div>
                                            <div class="item normal slick-slide"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="moduleList f-fl">
                        {% for item in ModuleList %}
                        <div class="module module-{{item.number}}">
                            <div class="moduleHd f-clearfix">
                                <div class="lt f-fl">{{item.title}}</div>
                                <div class="rt f-fr">
                                    <a targert="_blank" href="">
                                         <span>{{item.searchAll}}</span>
                                         <span>&nbsp;></span>
                                    </a>
                                </div>
                            </div>
                            <div class="moduleBd f-clearfix">
                                    {% for items in item.ModuleBd %}
                                    <div class="item f-fl">
                                        <div class="hd f-fl">
                                            <a>
                                                <img src={{items.link}}>
                                            </a>
                                            {% if  items.discount %}
                                            <div class="discount small">
                                                <span class="num">{{items.discount}}</span>
                                                <span>折</span>
                                            </div>
                                            {% endif %}
                                        </div>
                                        <div class="bd f-fl">
                                            <div class="name f-text-overflow">
                                                <a href="">{{items.name}}</a>
                                            </div>
                                            <div class="limitPrice">
                                                {% if items.limitText %}
                                                <span>{{items.limitText}}&nbsp;</span>
                                                {% endif %}
                                                <span class="yen">¥</span>
                                                <span>&nbsp;</span>
                                                <span class="num">{{items.limitPrice}}</span>
                                            </div>
                                            {% if items.iconCart %}
                                            <a >
                                                <i class="{{items.iconCart}} cart-salecart"></i>
                                            </a>
                                            {% endif %}
                                            {% if items.counterPrice%}
                                            <div class="counterPrice">
                                                <span class="num">
                                                    <span>¥</span>
                                                    <span>{{items.counterPrice}}</span>
                                                </span>
                                            </div>
                                            {% endif %}
                                             {% if items.counterPrice %}
                                            <div class="w-button btn">
                                                <a>立即抢购</a>
                                            </div>
                                            {% endif %}
                                        </div>
                                    </div>
                                    {% endfor %}
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="m-indexCates">
            {% for item in BigBox %}
            <div class="g-row">
                <div class="m-indexCate">
                    <div class="m-commonHeader">
                        <div class="f-left lh1">
                            <a>
                                <h3 class="name">{{item.nameH3}}</h3>
                            </a>
                            <span></span>
                        </div>
                        <div class="f-right lh1">
                            <div class="subCateList">
                            {% for itemS in item.Names %}
                            <span>
                                <b class="spilt">{{itemS.split}}</b>
                                <a>{{itemS.name}}</a>
                            </span>
                            {% endfor %}
                            </div>
                            <a class="moreItems f-fz14">查看更多 ></a>
                        </div>
                    </div>
                    <div class="banner">
                        <a class="wrap" targert="_blank" title="热销-{{item.nameH3}}">
                            <div>
                                <img class="img img-lazyload j-lazyload img-lazyloaded" src={{item.link}}
                            </div>
                        </a>
                    </div>
                    <div class="bd">
                        <ul class="itemList">
                            {% for itemList in item.itemList %}
                            <li class="item" >
                                <div class="m-product">
                                    <div class="hd">
                                        <a title={{itemList.title}} targert="_blank" class="imgWrap">
                                            <div>
                                                <img class="img img-lazyload j-lazyload img-lazyloaded" src={{itemList.link}}>
                                            </div>
                                            {% if itemList.colorNum %}
                                            <div class="colorNum">{{itemList.colorNum}}</div>
                                            {% endif %}
                                        </a>
                                    </div>
                                    <div class="bd">
                                        
                                        <div class="prdtTags">
                                            {% if itemList.itemTag %}
                                            <span class="itemTag">{{itemList.itemTag}}</span>
                                            {% endif %}
                                             {% if itemList.itemTag1 %}
                                            <span class="itemTag">{{itemList.itemTag1}}</span>
                                            {% endif %}
                                             {% if itemList.itemTag2 %}
                                            <span class="itemTag2">{{itemList.itemTag}}</span>
                                            {% endif %}
                                        </div>
                                        
                                        <h4 class="name">
                                            <a title={{itemList.title}} targert="_blank">
                                                <span>{{itemList.title}}</span>
                                            </a>
                                        </h4>
                                        <p class="price">
                                            <span class="retailPrice">
                                            <span>¥</span>
                                            <span>{{itemList.retailPrice}}</span>
                                            </span>
                                            {% if itemList.counterPrice %}
                                            <span class="counterPrice">¥ {{itemList.counterPrice}}</span>
                                            {% endif %}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        <div class="m-expert g-row">
            <div class="m-commonHeader">
                <div class="f-left lh1">
                    <h3 class="name">甄选家</h3>
                    <small class="frontName f-fz14">我们在寻找，对生活有态度的你</small>
                </div>
                <div class="f-right lh1">
                    <a targert="_blank" class="moreItems f-fz14"></a>
                </div>
            </div>
            <div class="bd"></div>
        </div>
        
    </div>
    <script src="/public/js/index.js"></script>
</body>

</html>