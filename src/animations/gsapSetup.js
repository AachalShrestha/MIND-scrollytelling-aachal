// gsapSetup.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

// Register plugins once here
gsap.registerPlugin(ScrollTrigger, Flip);

// Reusable animation: fade in on scroll
export const ScaleDown = (el) => {
  gsap.to(el, {
    scale: 0.8,          // scale down to 80%
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
  });
};
// Reusable Flip animation
export const flipElement = (el) => {
  const state = Flip.getState(el);
  // Make your layout/DOM change here if needed
  Flip.from(state, {
    duration: 1,
    ease: "power2.inOut",
  });
};
