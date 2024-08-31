"use client";
import { useState, useEffect } from "react";

const GridRow = ({ gridInsideDivs }: { gridInsideDivs: string[] }) => {
  const [clickedStates, setClickedStates] = useState(
    new Array(gridInsideDivs.length)
      .fill(false)
      .map(() => new Array(16).fill(false))
  );

  const handleClick = (rowIndex: number, innerIndex: number) => {
    setClickedStates((prevState) => {
      const newState = prevState.map((row, i) =>
        i === rowIndex
          ? row.map((clicked, j) => (j === innerIndex ? !clicked : clicked))
          : row
      );
      return newState;
    });
  };

  return (
    <div className="grid grid-cols-12">
      {gridInsideDivs.map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-4 h-8 md:h-12 lg:h-24 col-span-1 w-full border-2 hover:bg-MainColor/10 hover:scale-105 ease-scale-bouncy duration-300 cursor-pointer border-MainColor/10 first:border-l-2  border-l-0 border-t-0"
        >
          {new Array(16).fill("").map((_, innerIndex) => (
            <div
              key={innerIndex}
              id={`square-${index}-${innerIndex}`}
              className={` col-span-1 h-full border border-MainColor/10 hover:scale-75 ease-scale-bouncy duration-300 cursor-pointer ${
                clickedStates[index][innerIndex]
                  ? "bg-AccentColor"
                  : "hover:bg-AccentColor/10"
              }`}
              onClick={() => handleClick(index, innerIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const HomeHeroSection = () => {
  const [isActive, setIsActive] = useState(false);
  const gridRows = 5;
  const gridDivs = new Array(12).fill("");

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 1150);
  }, []);
  
  return (
    <section className="container" style={{ perspective: "1000px" }}>
      <div
        className="transform rotate-x-30 relative hover:rotate-x-0 duration-300 ease-bg-smooth group"
        style={{ perspective: "1000px" }}
      >
        {new Array(gridRows).fill("").map((_, rowIndex) => (
          <GridRow key={rowIndex} gridInsideDivs={gridDivs} />
        ))}
        <h1 className="absolute top-1/2 -translate-x-1/2  -translate-y-1/2 left-1/2 w-full text-center group-hover:opacity-0   ease-bg-blink">
          Nikita Zeleniak - Front-End Developer
        </h1>
        <div className="absolute top-1/2 -translate-x-1/2  -translate-y-1/2 left-1/2 flex flex-col pointer-events-none">
          <p className=" opacity-0 group-hover:opacity-100 duration-300  ease-opacity-smooth ">
            I’m Nikita Zeleniak, a Front-End Developer based in Toronto, Canada.
            With over three years of experience in front-end development and UI
            design, I specialize in creating modern, responsive web interfaces
            using cutting-edge technologies. My background includes proficiency
            in HTML5, CSS/SASS, JavaScript, TypeScript, and various frameworks
            like React and Next.js. I am passionate about delivering exceptional
            user experiences and optimizing web performance.
          </p>
          <button
            type="button"
            className={` pointer-events-auto uppercase text-2xl border-2 py-8 px-24 border-MainColor/10  bg-AccentColor/80 hover:bg-AccentColor ease-scale-bouncy duration-300 hover:scale-110 hover:text-WhiteColor  ${
              !isActive ? "opacity-100 scale-0" : " scale-100 opacity-100"
            }`}
          >
            download cv
          </button>
        </div>
      </div>
    </section>
  );
};

// const Cube = ({ position = "top-0 left-0" }: { position?: string }) => {
//   return (
//     <div
//       className={`cube-container w-24 h-24   absolute   ${position}`}
//       style={{ perspective: "1000px" }}
//     >
//       <div className="cube">
//         <div className="face front"></div>
//         <div className="face back"></div>
//         <div className="face left"></div>
//         <div className="face right"></div>
//         <div className="face top"></div>
//         <div className="face bottom"></div>
//       </div>
//     </div>
//   );
// };
