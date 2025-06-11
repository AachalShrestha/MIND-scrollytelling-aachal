import "../css/Intro.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

import MainParticle from "./components/mainParticle";
import ParticlesTube from "./2_Particle_tube";
import CollisionLetters from "./components/Collision Letters/collisionLetters";
import CollisionLettersForm from "./components/Collision Letters/collisionLettersForm";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const subtitleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const subtitleEl = subtitleRef.current;
    const imgEl = imgRef.current;

    gsap.to(imgEl, {
      scale: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleEl,
        start: "bottom top",
        end: "bottom top+=100",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  //main img dissapear when collision form is in view
  const formRef = useRef(null);
  const isInView = useInView(formRef, {
    margin: "20px 0px 0px 0px",
    once: false,
  });

  useEffect(() => {
    console.log("formRef.current = ", formRef.current);
    console.log(isInView.current);
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 className="big-title main-title">MAKING THE INVISIBLE VISIBLE</h1>
        </div>
        <p>
          How new the Higgs Boson (and other particles) are discovered at Cern
        </p>
      </div>
      <div className="pt-2">
        <h1 ref={subtitleRef} className="big-title sub-title">
          Some particles, like the Higgs boson, do not exist naturally in our
          everyday world.
        </h1>
        {/*         <div className="img-main">
          <img
            ref={imgRef}
            className="floating-img"
            src="/assets/particles/pink/O_MAIN.png"
          />
        </div> */}
        <motion.div
          className="mainParticle"
          style={{
            opacity: isInView ? 0 : 1,
            pointerEvents: isInView ? "none" : "auto",
            transition: "opacity 0.5s ease",
          }}
        >
          <MainParticle></MainParticle>
        </motion.div>
      </div>
      <ParticlesTube />
      <CollisionLetters />
      <CollisionLetters />
      <CollisionLettersForm innerRef={formRef}></CollisionLettersForm>
    </>
  );
}

export default Intro;
