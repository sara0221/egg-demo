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

// 写脚本的地方
var imgCenterBanner=document.querySelector(".imgCenterBanner")
var slick_list=document.querySelector(".slick-list")
var width=parseInt(window.getComputedStyle(slick_list).getPropertyValue("width"))
var len=document.querySelectorAll(".slick-dots span").length
var prev=document.querySelector(".slick-prev")
var next=document.querySelector(".slick-next")

var span=document.getElementsByTagName("span")
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