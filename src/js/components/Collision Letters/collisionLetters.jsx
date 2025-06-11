import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import "./collisionLetters.css";

export default function CollisionLetters() {
  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const letters = ["C", "O", "L", "L", "I", "S", "I", "O", "N"];

  // Generate positions once
  const positions = useMemo(
    () =>
      letters.map(() => ({
        y: Math.floor(Math.random() * 100),
      })),
    []
  );

  // Generate transform hooks at the top level — no loops
  const x0 = useTransform(scrollYProgress, [0, 1], ["-22vw", "110vw"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["130vw", "-20vw"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-34vw", "120vw"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["120vw", "-24vw"]);
  const x4 = useTransform(scrollYProgress, [0, 1], ["-20vw", "110vw"]);
  const x5 = useTransform(scrollYProgress, [0, 1], ["110vw", "-20vw"]);
  const x6 = useTransform(scrollYProgress, [0, 1], ["-20vw", "110vw"]);
  const x7 = useTransform(scrollYProgress, [0, 1], ["110vw", "-20vw"]);
  const x8 = useTransform(scrollYProgress, [0, 1], ["-10vw", "110vw"]);

  const xTransforms = [x0, x1, x2, x3, x4, x5, x6, x7, x8];

  return (
    <div className="collision-letters-container" style={{ height: "100vh" }}>
      <section
        ref={ref}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100vw",
          pointerEvents: "none",
        }}
      >
        {letters.map((letter, index) => {
          const { y } = positions[index];
          const x = xTransforms[index];

          return (
            <motion.div
              key={index}
              className="proton-letter"
              style={{
                position: "absolute",
                top: `${y}vh`,
                x,
                width: 50,
                color: "#96C08E",
                opacity: "0.8",
                height: 50,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "80px",
              }}
            >
              {letter}
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
