homepageAnimation()
realpageanitmation()
teamworks()
paraanimation()
loco()
capsuleanimation()

function homepageAnimation(){
    gsap.set(".marquee",{scale:5})

    var tl = gsap.timeline({
        //here we are creating a timeline that implements a scroller 
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub: 2
        }
    })

    // this is to clip the vedio while scrolling
    tl.to(".vdodiv",{
        '--clip':"0%",
        ease: Power2
    },'a')

    //will add at the marquee to zoom out the text
    tl.to(".marquee",{
        scale:1,
        ease: Power2
    },'a')

    // animation on rows
    // left
    tl.to(".lft",{
        xPercent:-1,
        stagger:.03,
        ease: Power4
    },"b")
    // right
    tl.to(".rgt",{
        xPercent:1,
        stagger:.03,
        ease: Power4
    },"b")
}

function realpageanitmation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamworks(){
    document.querySelectorAll(".listlem")
    .forEach(function (el) {
        el.addEventListener("mousemove",function (dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                x:gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
                ease: Power4,
                duration:.25
            })
        })
    
        el.addEventListener("mouseleave",function (dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease: Power4,
                duration:.25
            })
        })
    })
}

function paraanimation() {
    
    // this is to make every tag a span tag 
    var clutter = "";
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
        if(e===" ") clutter += `<span class="opacity-10> &nbsp;</span>`
        clutter += `<span class="opacity-10">${e}</span>`
    })
    // adding back those span tag to the page
    document.querySelector(".textpara").innerHTML = clutter;

    gsap.to(".textpara span",{
        scrollTrigger:{
            trigger:".para",
            start:"top 60%",
            end:"bottom 90%",
            scrub:.2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })

}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
    
}

function capsuleanimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:2
        },
        y:0,
        ease: Power4
    })
}

document.querySelectorAll(".section")
.forEach(function (e) {
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme",e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme",e.dataset.color)
        }
    })
})