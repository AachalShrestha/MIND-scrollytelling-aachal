import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./collisionLetters.css";

export default function CollisionLetterForm({ innerRef }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // Letters configuration
  const letters = [
    { char: "C", fromLeft: true },
    { char: "o", fromLeft: false, customY: 30 },
    { char: "L", fromLeft: true },
    { char: "L", fromLeft: false },
    { char: "I", fromLeft: true },
    { char: "S", fromLeft: false },
    { char: "I", fromLeft: true },
    { char: "o", fromLeft: false, customY: 30 },
    { char: "N", fromLeft: true },
  ];

  // Letter positions (same as before)
  const x0 = useTransform(scrollYProgress, [0, 1], ["-22vw", "5vw"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["130vw", "10vw"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-34vw", "25vw"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["120vw", "30vw"]);
  const x4 = useTransform(scrollYProgress, [0, 1], ["-20vw", "35vw"]);
  const x5 = useTransform(scrollYProgress, [0, 1], ["110vw", "40vw"]);
  const x6 = useTransform(scrollYProgress, [0, 1], ["-20vw", "45vw"]);
  const x7 = useTransform(scrollYProgress, [0, 1], ["110vw", "50vw"]);
  const x8 = useTransform(scrollYProgress, [0, 1], ["-10vw", "65vw"]);

  const xTransforms = [x0, x1, x2, x3, x4, x5, x6, x7, x8];

  return (
    <div
      className="collision-letters-container"
      style={{ height: "100vh" }}
      ref={innerRef}
    >
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
        {/* Text that scrolls slower */}
        <motion.h1
          style={{
            position: "absolute",
            top: "40%",
            left: "38%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(1rem, 3vw, 2rem)",
            textAlign: "center",
            width: "100%",
          }}
        >
          We create them through high-energy{" "}
          <span className="dark-green">collisions</span>
        </motion.h1>

        {/* Collision letters */}
        {letters.map(({ char }, index) => {
          const y = index === 1 || index === 7 ? "10vh" : "50vh";
          const x = xTransforms[index];
          const className =
            index === 1 || index === 7 ? "proton-letter-o" : "proton-letter";

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                x,
                top: y,
                fontWeight: "bold",
              }}
              className={className}
            >
              {char}
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
