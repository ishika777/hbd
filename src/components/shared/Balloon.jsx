import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Balloon = () => {
  const balloonContainer = useRef(null);

  useEffect(() => {
    if (balloonContainer.current) {
      gsap.fromTo(
        balloonContainer.current.children,
        { opacity: 0.9, y: "100vh" },  // Start just outside the viewport
        { opacity: 1, y: "-200vh", stagger: 0.2, duration: 2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="baloons w-full fixed inset-0 h-full overflow-hidden pointer-events-none" ref={balloonContainer}>
      {Array.from({ length: 20 }).map((_, index) => (
        <img
          key={index}
          src={`./ballon${(index % 3) + 1}.svg`}
          alt="Balloon"
        className={`absolute top-full ${
            index % 6 === 0 ? "left-[2%]" :
            index % 6 === 1 ? "left-[15%]" :
            index % 6 === 2 ? "left-[30%]" :
            index % 6 === 3 ? "left-[45%]" : 
            index % 6 === 4 ? "left-[55%]" :
            "left-[70%]"
          }`}
        />
      ))}
    </div>
  );
};

export default Balloon;
