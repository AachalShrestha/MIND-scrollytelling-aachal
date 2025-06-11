import "../../css/Intro.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* gsap.registerPlugin(ScrollTrigger);
 */
function MainParticle() {
  const imgRef = useRef(null);
  /* 
  useEffect(() => {
    const imgEl = imgRef.current;

    gsap.to(imgEl, {
      scale: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body, // or another global trigger
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); */

  return (
    <div className="img-main">
      <img
        ref={imgRef}
        className="floating-img"
        src="/assets/particles/pink/O_MAIN.png"
        alt="Floating Particle"
      />
    </div>
  );
}

export default MainParticle;
