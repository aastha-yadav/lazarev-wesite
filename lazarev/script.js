function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveAnimation()



function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "20px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation()

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: .3,
            ease: "power4.out" 
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navAnimation()



function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to( elem.childNodes[3],{
            opacity:1,
            scale:1
       })
   })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            left: ${dets.x - elem.getBoundingClientRect().x-50},
            top: ${dets.y - elem.getBoundingClientRect().y-50},
            duration:.5,
            ease:"power1.out"
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to( elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
})
}
page2Animation()


function page3videoAnimation(){
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}
page3videoAnimation()


function page7Animation(){
    var sections = document.querySelectorAll(".sec-right")

sections.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })

})
}
page7Animation()


function page8Animation(){
    var span = document.querySelector("#page8-content h1 span")
var uiux = document.querySelector("#page8-content .uiux")
flage = 0
uiux.addEventListener("click",function(){
    if(flage==0){
        span.innerHTML = <i class="ri-arrow-up-s-line"></i>
        flage =1
    }else{
        span.innerHTML = <i class="ri-arrow-down-s-line"></i>
        flage=0
    }
})


var product = document.querySelector(".product")
var span1 = document.querySelector(".product h1 span")
var flagg = 0
product.addEventListener("click",function(){
    if(flagg == 0){
        span1.innerHTML = <i class="ri-arrow-down-s-line"></i>
        flagg = 1
    }
    else{
        span1.innerHTML = <i class="ri-arrow-up-s-line"></i>
        flagg = 0
    }

})
}
page8Animation()

function page9Animation(){
    
var elemVideo = document.querySelector("#page9 .element-container video")
var elemContainer = document.querySelector("#page9 .element-container")
elemContainer.addEventListener("mouseenter", function(){
    elemVideo.play()
    gsap.to("#page9 .element-container h4",{
        opacity:0,
        duration:.5
    })
    gsap.to("#page9 .element-container i",{
        opacity:0,
        duration:.5
    })
    gsap.to("#page9 .element-container video",{
        height:"170%",
        display:"block",
        duration:.5
    })
})
elemContainer.addEventListener("mouseleave", function(){
    elemVideo.load()
    gsap.to("#page9 .element-container h4",{
        opacity:1,
        duration:.5
    })
    gsap.to("#page9 .element-container i",{
        opacity:1,
        duration:.5
    })
    gsap.to("#page9 .element-container video",{
        height:"100%",
        display:"none",
        duration:.5
    })
})





var elemVideo2 = document.querySelector("#page9 .element-container2 video")
var elemContainer2 = document.querySelector("#page9 .element-container2")
elemContainer2.addEventListener("mouseenter", function(){
    elemVideo2.play()
    gsap.to("#page9 .element-container2 h4",{
        opacity:0,
        duration:.5
    })
    gsap.to("#page9 .element-container2 i",{
        opacity:0,
        duration:.5
    })
    gsap.to("#page9 .element-container2 video",{
        height:"170%",
        display:"block",
        duration:.5
    })
})
elemContainer2.addEventListener("mouseleave", function(){
    elemVideo2.load()
    gsap.to("#page9 .element-container2 h4",{
        opacity:1,
        duration:.5
    })
    gsap.to("#page9 .element-container2 i",{
        opacity:1,
        duration:.5
    })
    gsap.to("#page9 .element-container2 video",{
        height:"100%",
        display:"none",
        duration:.5
    })
})

}
page9Animation()


function page11Animation(){
    
gsap.from("#btm11-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#btm11-part2",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})
gsap.from("#btm11-part3 h4",{
    x:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#btm11-part2",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})
gsap.from("#btm11-part4 h4",{
    x:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#btm11-part2",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})
}
page11Animation()