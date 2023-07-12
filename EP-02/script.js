var tl=gsap.timeline()

tl.from("#nav img ,#nav h3 ,#nav h4 ,#nav button",{
    y:-100,
    duration:0.8,
    delay:1,
    // initially opacity 0 rahegi dhhere dhere dikegi
    opacity:0,
    stagger:0.2
})
tl.from("#main h1",{
    y:200,
    opacity:0,
    duration:0.5,
    stagger:0.2
})
tl.from("#main>img",{
    opacity:0,
    scale:0,
    stagger:0.3

})
tl.from("h1 span",{
    scale:0,
    opacity:0,
    rotate:360,
    
    duration:0.5
})
tl.from("#social-icons i",{
    opacity:0,
    scale:0,
    stagger:0.2
})
tl.from("h5",{
    opacity:0,
    scale:0
})

tl.to("h5",{
  y:20,
//   for infinite time
  repeat:-1,
  duration:0.7,
  yoyo:true
})
