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
                                <ul id="drop-down-menu-ul"></ul>
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
                    <li class="yx-tabNav-item nav-top-first-li"><a href="">首页</a></li>
                    <li class="yx-tabNav-item">
                        <a class="yx-topLevel" href="" title="居家" target="_blank">居家</a>
                        <div class="yx-tabNav-dropdown"></div>
                    </li>
                    <li class="yx-tabNav-item"><a>鞋包配饰</a></li>
                    <li class="yx-tabNav-item"><a>服装</a></li>
                    <li class="yx-tabNav-item"><a>电器</a></li>
                    <li class="yx-tabNav-item"><a>洗护</a></li>
                    <li class="yx-tabNav-item"><a>饮食</a></li>
                    <li class="yx-tabNav-item"><a>餐厨</a></li>
                    <li class="yx-tabNav-item"><a>婴童</a></li>
                    <li class="yx-tabNav-item"><a>文体</a></li>
                    <li class="yx-tabNav-item"><a>特色区</a></li>
                    <li class="yx-tabNav-split"></li>
                    <li class="yx-tabNav-item"><a>为你严选</a></li>
                    <li class="yx-tabNav-item"><a>众筹</a></li>
                </ul>

            </div>
        </div>
    </div>
    <script src="/public/js/index.js"></script>
</body>

</html>