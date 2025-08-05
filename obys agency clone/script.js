
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
// loader()

document.addEventListener("mousemove", function(cord){
    gsap.to("#crsr",{
        left : cord.clientX,
        top: cord.clientY,
    })


   })




Shery.makeMagnet("#right a" /* Element to target.*/, {

  });





