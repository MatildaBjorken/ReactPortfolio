import gsap from "gsap";

let tl = gsap.timeline();

// tl.to(".header .logo a", 0.65, { css: { mixBlendMode: "normal", color: "black", y:0 } })
  
export const openMenu = width => {
  tl
 
  .to("nav", 0, {
    css: { display: "block" }
  })

  .to("body", 0, { css: { overflow: "hidden" } })

  .to(".App", 1, {
      y: width <= 454 ? "60vh" : "60vh" ,
      ease: "expo.inOut"
    })
    .to(".hamburger-menu span", 0.6, {
        delay: -1,
        scaleX: 0,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
    })
    .to(".header .logo a", 0, { css: { mixBlendMode: "difference", color: "white" } }, '<.4')
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 5
      }
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 20
      }
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18
      }
    })
    .to("#circle", 0.6, {
      delay: -0.8,
      css: {
        strokeDashoffset: 0
      },
      ease: "expo.inOut"
    })
   
    .to(".hamburger-menu-close", 0.6, {
      delay: -0.8,
      css: { display: "block" }
    })
   
};

export const closeMenu = () => {
  tl
 
  .to(".App", 1, {
    y: 0,
    ease: "expo.inOut"
  })

    .to("#circle", 0.6, {
      delay: -0.6,
      css: {
        strokeDashoffset: -193,
        strokeDasharray: 227
      }
    })
    
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10
      }
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10
      }
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40
      }
    })
   
    .to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut"
    })
   
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      css: { display: "none" }
    })
    
    .to(".header .logo a", 0, { css: { mixBlendMode: "normal", color: "black" } }, '>-.2')
    .to("body", 0, { css: { overflow: "auto" } })
    // .to(".logo a", 0, { css: { color: "black" } })
    .to("nav", 0, {
      css: { display: "none" }
    })
    
};