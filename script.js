const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var w=document.querySelector("#minicircle")
/*function firstPageAnim(){
    var tl = gsap.timeline();
tl.from("#nav",{
    y:"-10",
    opacity:0,
    duration:1.5,
    ease:Expo.easeInout(),
})
.to(".boundingelem",{
    y:0,
    stagger:0.2,
    duration:2,
    delay:-1,
    ease:Expo.easeInout(),
})
.from("#herofooter",{
    y:-10,
    opacity:0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInout(),
    

})
}*/
function mousecirclefollow(xscale,yscale){
    window.addEventListener("mousemove",function(dets){

    w.style.left=dets.x+"px"
    w.style.top=dets.y+"px"
    
    });

var timeout;
function mousesqeeze(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        //var xdiff=dets.clientX -xprev
        //var ydiff=dets.clientY -yprev;
        yscale=gsap.utils.clamp(.8,1.2,dets.x -xprev)
        xscale=gsap.utils.clamp(.8,1.2,dets.y -yprev)
   
       
        xprev=dets.x;
        xprev=dets.y;
        mousecirclefollow(xscale,yscale);
        timeout=setTimeout(function(){
            w.style.left=dets.x+"px"
            w.style.top=dets.y+"px"
           
        },100)

        
        });
}
//mousesqeeze();
//mousecirclefollow();
document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var differot=0;
    elem.addEventListener("mouseleave",function(details){
        gsap.to( elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
              });
            });
            elem.addEventListener("mousemove",function(details){
                    
    console.log(details.clientY-elem.getBoundingClientRect().top)
    var differot =details.clientX-rotate;
    rotate = details.clientX;
    
       gsap.to( elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:details.diff,
            left:details.clientX,
            rotate:gsap.utils.clamp(-20,20,differot*.5)
        })
    });
});



    
    




}
mousecirclefollow();




    
