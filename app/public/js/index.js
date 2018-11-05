// header marquee
;(function() {
    var yanxuan_notice_ul=document.getElementById("yanxuan-notice-ul")
    function moveBysecond(){
        var currTop=parseInt(yanxuan_notice_ul.style.top)
        if(currTop<-69){
            currTop=20
        }
        currTop=currTop-30 +"px"
        yanxuan_notice_ul.style.top=currTop
        setTimeout(moveBysecond,2000)
    }
    moveBysecond()
})();

// main slide 
;(function() {
    var imgCenterBanner=document.querySelector(".imgCenterBanner")
    var slick_list=document.querySelector(".slick-list")
    var width=parseInt(window.getComputedStyle(slick_list).getPropertyValue("width"))
    var len=document.querySelectorAll(".slick-dots span").length
    var prev=document.querySelector(".slick-prev")
    var next=document.querySelector(".slick-next")
    
    var span=document.querySelectorAll(".slick-dots span")
    //点击前后幻灯
    next.onclick=function(){
        next_pic()
    }
    
    prev.onclick=function(){
        prev_pic()
    }
    function next_pic(){
        var newLeft=parseInt(imgCenterBanner.style.left)-width
        if(newLeft<(- width*(len-1))){
            newLeft=0
        }
        imgCenterBanner.style.left=newLeft+"px"
        index++
        if(index> len-1){
            index=0
        }
        ShowCurrentDot()
    }
    
    function prev_pic(){
        var newLeft=parseInt(imgCenterBanner.style.left)+width
        if(newLeft>0){
            newLeft= - width*(len-1)
        }
        imgCenterBanner.style.left=newLeft+ "px"
        index--
        if(index<0){
            index=len-1
        }
        ShowCurrentDot()
    }
    
    //自动播放
    var timer=null
    function autoPlay(){
        timer=setInterval(function(){
            next_pic()
        },3000)
    }
    autoPlay()
    slick_list.onmouseenter=function(){
        clearInterval(timer)
    }
    slick_list.onmouseleave=function(){
        autoPlay()
    }
    
    var index=0
    ShowCurrentDot()
    function ShowCurrentDot(){
        for(let i=0,len=span.length;i<len;i++){
            span[i].className=" "
        }
        span[index].className="slick-active"
    }
    
    for(let i =0,len=span.length;i<len;i++){
            span[i].onclick=function(){
                imgCenterBanner.style.left= i*(-width)+"px"
                index=i
                ShowCurrentDot()
            }    
    }
})();

// search 
;(function() {

    var searchButton=document.querySelector(".yx-searchButton")
    const SEARCH_HISTORY_STORAGE_KEY = 'searchHistory'
    var searchInput=document.querySelector(".yx-searchInput")
    var searchBox=document.querySelector(".searchBox")
    var yx_icon_yxtop=document.querySelector(".yx-icon-yxtop")
    var recently=document.querySelector('.search-recently')
    var icon_yxnormal_deleteAll=document.querySelector('.icon-yxnormal-deleteAll')

    function setSearchHistory(data){
        localStorage.setItem(SEARCH_HISTORY_STORAGE_KEY, JSON.stringify(data))
    }

    function getSearchHistory(){
        return JSON.parse(localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY)) || []
    }

    function generateSearchHistoryList(){
        let searchHistory=getSearchHistory()
        let html=''
        let ul=document.querySelector('.recentSearchDefault')
        
        searchHistory.forEach(e=>{
            html+=`
            <li>
                <a class="a-remove" data-keyword=${e}>
                ${e}
                <i class="yx-cp-icon-yxclose icon-yxclose-close8"></i>
                </a>
               
            </li>
            `
        })
        recently.style.display = searchHistory.length ? 'block' : 'none';
        ul.innerHTML=html
    }
    
    //点击出现下拉框
    searchInput.addEventListener("focus",function(event){
        searchBox.style.display="block"
        generateSearchHistoryList()
    })

    //输入时，默认广告字消失
    searchInput.addEventListener("keydown",function(event){
        var yx_searchDefaultKeyword=document.querySelector(".yx-searchDefaultKeyword")
        yx_searchDefaultKeyword.style.display="none"
    })

    //点击放大镜图标时，排列搜索顺序
    yx_icon_yxtop.addEventListener("click",function(event){
        var val=searchInput.value.trim()
        let temp=getSearchHistory()
        if(val.length){
            
            let index=temp.findIndex(el=>{
                return el==val
            })
            if(index!= -1){
                temp.splice(index,1)
            }
            temp.unshift(val)
            setSearchHistory(temp)
        }
        
    })
    //点击搜索框的所有数据相关操作
    document.body.addEventListener("click",e=>{
        let removeEl=e.target.closest(".a-remove")
        if(removeEl){
            let keyword=removeEl.getAttribute("data-keyword")
            let temp=getSearchHistory()
            temp=temp.filter(e=>{
                return keyword!==e
            })
            let liEl=removeEl.closest("li")
            liEl&&liEl.remove()
            if(temp.length===0){
                recently.style.display="none"
            }
            setSearchHistory(temp)
        }
    })
    //删除数据
    icon_yxnormal_deleteAll.addEventListener('click',e=>{
        let recentSearchDefault=document.querySelector('.recentSearchDefault')
        recentSearchDefault.innerHTML=''
        recently.style.display="none"
        setSearchHistory([])
        //防止a标签跳转了
        e.preventDefault()    
    })
      // 脱靶之后恢复
      document.body.addEventListener("click",e=>{
        var removeEl=e.target.closest(".searchBox")||e.target.closest(".yx-search")
        if(!removeEl){
            searchBox.style.display="none"
        }
    })
})();

// /* 新品首发 */

(function(){
    var fnTimeCountDown=function(d,o){
        var f={
            zero:function(n){
                var n=parseInt(n,10)
                if(n>0){
                    if(n<=9){
                        n="0"+n
                    }
                    return String(n)
                }else{
                    return "00"
                }
            },
            dv:function(){
                d = d || Date.UTC(2018,11,11,22,22)
                var future = new Date(d)
                var now=new Date()
                var dur =Math.round((future.getTime()-now.getTime())/1000)+future.getTimezoneOffset()*60
                var pms={
                    sec:"00",
                    mini:"00",
                    hour:"00",
                    day:"00",
                    month:"00",
                    year:"0"
                }

                if(dur > 0){
                    pms.sec=f.zero(dur % 60)
                    pms.mini=Math.floor((dur / 60))>0 ? f.zero(Math.floor((dur / 60))% 60) : "00"
                    pms.hour=Math.floor((dur / 3600 )) >0 ? f.zero(Math.floor((dur / 3600))% 24) : "00"
                    pms.day=Math.floor((dur / 86400)) > 0 ? f.zero(Math.floor((dur / 86400)) % 30) : "00"
                    pms.month=Math.floor((dur / 2629744)) > 0 ? f.zero(Math.floor((dur / 2629744)) % 12) : "00"
                    pms.year=Math.floor((dur / 31556926)) > 0 ? Math.floor((dur / 31556926)) : "0"
                }
                return pms
            },
            ui:function(){
                if(o.sec){
                    o.sec.innerHTML = f.dv().sec
                }
                if(o.mini){
                    o.mini.innerHTML = f.dv().mini
                }
                if(o.hour){
                    o.hour.innerHTML = f.dv().hour
                }
                if(o.day){
                    o.day.innerHTML = f.dv().day
                }
                if(o.month){
                    o.month.innerHTML = f.dv().month
                }
                if(o.year){
                    o.year.innerHTML = f.dv().year
                }
                setTimeout(f.ui,1000)
            }
        }
        f.ui()
    }
    var d=Date.UTC(2018,11,11,22,22)
    var obj={
        sec:document.getElementById("second"),
        mini:document.getElementById("minute"),
        hour:document.getElementById("hour")
    }
    fnTimeCountDown(d,obj)
})();

(function(){
    var prev=document.querySelector(".m-newProducts .slick-prev")
    var next=document.querySelector(".m-newProducts .slick-next")
    var slick_track_inner=document.querySelector(".m-newProducts .slick-track-inner")
    var width=parseInt(window.getComputedStyle(slick_track_inner).getPropertyValue("width"))
    var slick_track=document.querySelector(".slick-track")
    var len=document.querySelectorAll(".m-newProducts .slick-list   .m-product").length
    next.onclick=function(){
        next_pic()
    }
    
    prev.onclick=function(){
        prev_pic()
    }
    function next_pic(){
        var newLeft=parseInt(slick_track.style.left)-width
        if(newLeft<(- width*(len/4-1))){
            if(newLeft==-1090){

                next.style.backgroundColor="#E7E2D7"
            }
        }else{
            if(newLeft==-1355){
                newLeft=265
            }
        }                
        slick_track.style.left=newLeft+"px"
    }

    function prev_pic(){
        var newLeft=parseInt(slick_track.style.left)+width
        if(newLeft>0){
            newLeft= - width*(len/4-1)
        }
        else{
            newLeft=0
        }
        slick_track.style.left=newLeft+"px"
        }
})()