function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy mthods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();



}
init()



var overlay=document.querySelector("#overlay")
var isscroll=document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
    isscroll.style.transform="scale(1)"
})

overlay.addEventListener("mouseleave",function(){
    isscroll.style.transform="scale(0)"
})

window.addEventListener("mousemove",function(dets){
    isscroll.style.left=`${dets.pageX}px`
    isscroll.style.top=`${dets.pageY}px`
})

// var tl=gsap.timeline(); 

gsap.to("#page2 img",{
    rotate:5,
    scrollTrigger:{
        scrub:1,
        trigger:"#page2 img",
        scroller:"#main",
        start:"-20% bottom",
        // markers:true,
        end:"65% top"
    }
})

function abcd(){
  gsap.to("svg",{
    fill:"#111"
  })
}


var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top 45%",
      end: "top -100%",
      scrub: true,
  }
})

tl.to("svg", {
  scale: 1,
  top: "5%",

})
.to("#nav",{
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})
.to("#nav,svg", {
  fill:"#111",
  color: "#111",
  delay:-0.5,
})


var overlay2=document.querySelector("#overlay2")
var mover=document.querySelector("#mover")


overlay2.addEventListener("mouseenter",function(){
  mover.style.transform="scale(1)"
})


overlay2.addEventListener("mouseleave",function(){
  mover.style.transform="scale(0)"
})


window.addEventListener("mousemove",function(det){
  mover.style.left=`${det.x}px`
  mover.style.top=`${det.y}px`
})


var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -345%",
      end: "top -345%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav", {
  color: "#fff",
  background: "transparent",
})


  gsap.to("#main",{
    background:"#111",
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page3",
      // markers:true,
   start:"95% bottom",
   end:"top top",
   scrub:true,
    }

  })

  var page4=document.querySelector("#page4")
  var im=document.querySelector("#page4>img")
  var butt=document.querySelector("#page4>button")
page4.addEventListener("mousemove",function(det){
      im.style.left=(det.x-100)+"px"
      im.style.top=(det.y-10)+"px"
      butt.style.left=(det.x-25)+"px"
      butt.style.top=(det.y+150)+"px"
     
     
 }) 


 page4.addEventListener("mouseenter",function(){
  im.style.opacity=1;
  butt.style.opacity=1;
 })

 page4.addEventListener("mouseleave",function(){
  im.style.opacity=0;
  butt.style.opacity=0;
 })

 var el=document.querySelectorAll(".elem")

 el.forEach(function(det){
 console.log(det)
   var a=det.getAttribute("data-img")
   det.addEventListener("mouseenter",function(){
    document.querySelector("#page4>img").setAttribute("src",a);
   })
 })

gsap.to("#page6",{
  scrollTrigger:{
pin:true,
trigger:"#page6",
scroller:"#main",
// markers:true,
scrub:true,

  }
})
 

gsap.from("#page6 #image1",{
   rotate:"-5deg",
   scrollTrigger:{
    trigger:"#page6 #image1",
    scroller:"#main",
    // markers:true,
    scrub:true,
    start:"top 80%",
    end:"top top",
      }

})

gsap.from("#page6 #image2",{
  rotate:"-15deg",
  y:600,
  scrollTrigger:{
   trigger:"#page6 #image2",
   scroller:"#main",
  //  markers:true,
   scrub:true,
   start:"top 60%",
   end:"top top",
     }

})

var  men=document.querySelector("#menu")
var line1=document.querySelector("#line1")
var line2=document.querySelector("#line2")
var line3=document.querySelector("#line3")
var full=document.querySelector("#full")

var flag=0

men.addEventListener("click",function(){
    if(flag==0){

    line1.style.rotate="45deg"
    line3.style.rotate="-45deg"
    line1.style.backgroundColor="black"
    line3.style.backgroundColor="black"
    line2.style.opacity=0
    full.style.top=0
  flag=1
    }
    else{
  
        line2.style.opacity=1
        line1.style.rotate="0deg"
        line1.style.backgroundColor="#c45508"
        line3.style.backgroundColor="#c45508"
        line3.style.rotate="0deg"
        full.style.top="-100vh"
      flag=0
    }


    
})


// $('#page7 h1').textillate({ in: { effect: 'rollIn' } });
//using onstart in gsap use 



