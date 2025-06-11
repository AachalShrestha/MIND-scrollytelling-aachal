import { useEffect, useRef } from "react";
import "../css/ParticleTube.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainParticle from "./components/mainParticle";

gsap.registerPlugin(ScrollTrigger);

export default function ParticlesTube() {
  const pathRef = useRef(null);
  const wrapperRef = useRef(null);
  useEffect(() => {
    console.log("wrapperRef:", wrapperRef.current);
    console.log("pathRef:", pathRef.current);

    gsap.fromTo(
      pathRef.current,
      // ─── fromVars ───────────────────────────────────────────────
      {
        attr: { startOffset: "-50%" },
      },
      // ─── toVars ─────────────────────────────────────────────────
      {
        attr: { startOffset: "110%" },
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 2%",
          end: "bottom 20%",
          pin: true,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="text-path-wrapper" ref={wrapperRef}>
        <div className="text-path">
          <svg width="100%" height="350" viewBox="0 0 1324 178" fill="none">
            <path
              id="master"
              d="M0.5 164C161.833 169.667 460.1 170.8 486.5 164C519.5 155.5 545 136.5 568 101C591 65.5 610.5 -1.49999 679.5 1.50001C748.5 4.50001 750.5 52.5 785 67C819.5 81.5 879.5 68 898 101C916.5 134 939.844 168.262 979.5 173.5C1059 184 1209.83 164 1323.5 164"
              stroke="none"
              fill="none"
              strokeWidth="2"
            />
            <text fill="#fff" fontSize="24" className="text">
              <textPath
                ref={pathRef}
                xlinkHref="#master"
                textLength="550"
                startOffset="-50%"
              >
                So we have to create them
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
