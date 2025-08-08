
function loader() {

    let count = 0;
    let counter = setInterval(() => {
        count += 1;
        document.querySelector("#count").innerHTML = count;
        if (count == 100) {
            clearInterval(counter);
        }
    }, 40)

    let tl = gsap.timeline()
    tl.from(".line h1", {
        y: 100,
        stagger: 0.25,
        duration: .6,
        delay: 0.5,
    })

    
    tl.to("#loader .line", {
        opacity: 0,
        delay: 3,
        duration: 0.4,
    })
    tl.to("#loader", {
        y: "-100%",
        delay: 1,
        duration0: 3,
    })
    tl.from(".hero h1",{
        y:150,
        stagger:0.4,
        duration:1,

    })
}
loader()

document.addEventListener("mousemove", function(cord){
    gsap.to("#crsr",{
        left : cord.clientX,
        top: cord.clientY,
    })


   })




Shery.makeMagnet("#right a" /* Element to target.*/, {

  });


function sheryAnimantion(){
    Shery.imageEffect(".shery-img", {
  style: 6,
  config:{"noiseDetail":{"value":12.21,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8379122061131963},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.3,"range":[0,10]},"metaball":{"value":0.31,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":15.27,"range":[0,100]}},

  gooey: true,
});

}

sheryAnimantion()





