changecolor()
homepageAnimation();
realpageanitmation();
teamworks();
paraanimation();
loco();
timelineanimation()
boxanimation()




function changecolor() {
  // this is to change the color of the text
  document.addEventListener('scroll', function() {
    let containers = document.querySelectorAll('.color-manager');
    let body = document.body;
    containers.forEach(container => {
        let rect = container.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            let color = container.getAttribute('data-color');
            body.setAttribute('theme', color);
        }
    });
});


}


function homepageAnimation() {
  gsap.set(".marquee", { scale: 5 });

  var tl = gsap.timeline({
    //here we are creating a timeline that implements a scroller
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  // this is to clip the vedio while scrolling
  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );

  //will add at the marquee to zoom out the text
  tl.to(
    ".marquee",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  // animation on rows
  // left
  tl.to(
    ".lft",
    {
      xPercent: -1,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
  // right
  tl.to(
    ".rgt",
    {
      xPercent: 1,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
}

function realpageanitmation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function teamworks() {
  document.querySelectorAll(".listlem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
        ease: Power4,
        duration: 0.25,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.25,
      });
    });
  });
}

function paraanimation() {
  // this is to make every tag a span tag
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span class="opacity-10> &nbsp;</span>`;
      clutter += `<span class="opacity-10">${e}</span>`;
    });
  // adding back those span tag to the page
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function timelineanimation(){
  gsap.registerPlugin(MotionPathPlugin);
  
  let timeline = gsap.timeline({  
    scrollTrigger: {
      trigger: ".box",
      toggleActions: "restart pause resume pause",
      start: "top 60%",
      end: "bottom -300%",
      scrub: true,
    },
  });
   
  timeline.to(".box", {
    motionPath: {
      path: "#path",
      align: "#path",
    },
    // duration: 2,
    ease: "linear",
  });
}


function boxanimation() {

  let tl = gsap.timeline();

tl.from(".edu", {
  scrollTrigger: {
    trigger: ".edu",
    start: "top 90%",
    end: "bottom 60%",
    markers: false,
    scrub: 0.2,
  },
  x: -500,
  ease: Power4.easeOut,
  duration: 2,
})
.from(".edu2", {
  scrollTrigger: {
    trigger: ".edu2",
    start: "top 90%",
    end: "bottom 60%",
    markers: false,
    scrub: 0.2,
  },
  x: -500,
  ease: Power4.easeOut,
  duration: 2,
})
.from(".edu3", {
  scrollTrigger: {
    trigger: ".edu3",
    start: "top 90%",
    end: "bottom 60%",
    markers: false,
    scrub: 0.2,
  },
  x: -500,
  ease: Power4.easeOut,
  duration: 2,
})
.from(".edu4", {
  scrollTrigger: {
    trigger: ".edu4",
    start: "top 90%",
    end: "bottom 60%",
    markers: false,
    scrub: 0.2,
  },
  x: -500,
  ease: Power4.easeOut,
  duration: 2,
})
.from(".edu5", {
  scrollTrigger: {
    trigger: ".edu5",
    start: "top 90%",
    end: "bottom 60%",
    markers: false,
    scrub: 0.2,
  },
  x: -500,
  ease: Power4.easeOut,
  duration: 2,
});

}