


function animation() {
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

   t1.fromTo (".about-us-text-h1", 1, {x: "-150rem", opacity: 0 }, {x: "0rem", opacity: 1}, "-=0.5");
   t1.fromTo (".line", 0.5, {x: "0rem", opacity: 0 }, {x: "0rem", opacity: 1}, "-=0.4");
   

   const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

   t2.fromTo(".text-1", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
   

     new ScrollMagic.Scene({
    triggerElement: ".line",
    triggerHook: 0.25,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

    const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });

     t3.fromTo(".text-2", 0.25, { x: "-5rem", opacity: 0 }, { x: 0, opacity: 1 });
   

        new ScrollMagic.Scene({
        triggerElement: ".scroll-1",
        triggerHook: 0.25,
        reverse: false,
    })
        .setTween(t3)
        .addTo(controller);

    const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t4.fromTo(".text-3", 0.25, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
   

        new ScrollMagic.Scene({
        triggerElement: ".scroll-2",
        triggerHook: 0.25,
        reverse: false,
    })
        .setTween(t4)
        .addTo(controller);

    const t5 = gsap.timeline({ defaults: { ease: Expo.InOut } });   
        
    t5.fromTo(".text-4", 0.25, { x: "-5rem", opacity: 0 }, { x: 0, opacity: 1 });
   

        new ScrollMagic.Scene({
        triggerElement: ".scroll-3",
        triggerHook: 0.25,
        reverse: false,
    })
        .setTween(t5)
        .addTo(controller);    

    const t6 = gsap.timeline({ defaults: { ease: Expo.InOut } });   
        
    t6.fromTo(".text-5", 0.25, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
   

        new ScrollMagic.Scene({
        triggerElement: ".scroll-4",
        triggerHook: 0.25,
        reverse: false,
    })
        .setTween(t6)
        .addTo(controller);   
        
    const t7 = gsap.timeline({ defaults: { ease: Expo.InOut } });   
        
    t7.fromTo(".text-6", 0.25, { x: "-5rem", opacity: 0 }, { x: 0, opacity: 1 });
   

        new ScrollMagic.Scene({
        triggerElement: ".scroll-5",
        triggerHook: 0.25,
        reverse: false,
    })
        .setTween(t7)
        .addTo(controller);       

        
   

}


  animation();