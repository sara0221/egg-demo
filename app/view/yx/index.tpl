{# 写模板的地方 #}
<html>

<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/reset.css" />
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
                        <ul id="yanxuan-notice-ul" class="header-notice-wrap">
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

            </div>
        </div>
    </div>
    <div class="g-bd">
        <div class="js-slick m-focusSlick">
            <button type="button" class="slick-prev icon-normal-slick-leftRound"></button>
            <div class="slick-list draggable">
                <div class="slick-track">
                    <div class="item imgCenterBanner">
                        <a href="" class="wrap" >
                            <img src="https://yanxuan.nosdn.127.net/c2f7f36ff35bfcb7cc1730a05f18cdde.JPG?imageView&quality=95&thumbnail=1920x420">
                        </a>
                    </div>
                </div>
            </div>
            <button type="button" class="slick-next icon-normal-slick-rightRound"></button>
            <ul class="slick-dots" >
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
                <li class="slick-dots-li" id="slick-slide00">
                    <button type="button" >
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <script src="/public/js/index.js"></script>
</body>

</html>