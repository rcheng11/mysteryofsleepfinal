gsap.registerPlugin(ScrollTrigger)

// light
const light = gsap.timeline({ 
    defaults: { duration : 1 },
    scrollTrigger: {
        trigger: "#light-container",
        endTrigger: "#end-container",
        pin: true,
        scrub: true,
        start: "top 10%"
    }})

light
    .from("#cant-sleep", {opacity: 0, duration: 2, ease: "none"})
    .from("#tips", {opacity: 0, ease: "none"})
    .from("#scroll", {y: "-10%", opacity: 0, ease: "none"})
    .to("#cant-sleep", {opacity: 0, duration: 2, ease: "none"})
    .to("#tips", {opacity: 0, ease: "none"})
    .to("#scroll", {y: "-10%", opacity: 0, ease: "none"})
    // light
    .from("#light-header", {opacity: 0, ease: "none"})
    .from("#light-img", {x: "100%", ease: "none"})
    .from("#light-text", {x: "-100%", ease: "none"})
    .to("#light-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#light-img", {y: "-200vh", ease: "power2.in"})
    .to("#light-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // snack
    .from("#snack-header", {opacity: 0, ease: "none"})
    .from("#snack-img", {x: "100%", ease: "none"})
    .from("#snack-text", {x: "-100%", ease: "none"})
    .to("#snack-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#snack-img", {y: "-200vh", ease: "power2.in"})
    .to("#snack-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // temp
    .from("#temp-header", {opacity: 0, ease: "none"})
    .from("#temp-img", {x: "100%", ease: "none"})
    .from("#temp-text", {x: "-100%", ease: "none"})
    .to("#temp-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#temp-img", {y: "-200vh", ease: "power2.in"})
    .to("#temp-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // basket
    .from("#basket-header", {opacity: 0, ease: "none"})
    .from("#basket-img", {x: "100%", ease: "none"})
    .from("#basket-text", {x: "-100%", ease: "none"})
    .to("#basket-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#basket-img", {y: "-200vh", ease: "power2.in"})
    .to("#basket-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // clock
    .from("#clock-header", {opacity: 0, ease: "none"})
    .from("#clock-img", {x: "100%", ease: "none"})
    .from("#clock-text", {x: "-100%", ease: "none"})
    .to("#clock-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#clock-img", {y: "-200vh", ease: "power2.in"})
    .to("#clock-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // separate
    .from("#separate-header", {opacity: 0, ease: "none"})
    .from("#separate-img", {x: "100%", ease: "none"})
    .from("#separate-text", {x: "-100%", ease: "none"})
    .to("#separate-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#separate-img", {y: "-200vh", ease: "power2.in"})
    .to("#separate-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // device
    .from("#device-header", {opacity: 0, ease: "none"})
    .from("#device-img", {x: "100%", ease: "none"})
    .from("#device-text", {x: "-100%", ease: "none"})
    .to("#device-header", {y: "-200vh", ease: "power2.in", duration: 2})
    .to("#device-img", {y: "-200vh", ease: "power2.in"})
    .to("#device-text", {y: "-200vh", ease: "power2.in", delay: -1})
    // credits
    .from("#credits-header", {opacity: 0, ease: "none"})
    .from("#credits-1", {opacity: 0, ease: "none"})
    .from("#credits-2", {opacity: 0, ease: "none"})
    .from("#credits-3", {opacity: 0, ease: "none"})
    .from("#credits-4", {opacity: 0, ease: "none"})