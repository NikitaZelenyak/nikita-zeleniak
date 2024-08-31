"use client";

import { ReactElement, useEffect, useState } from "react";

export const SkillItem = ({
  name,
  color,
  icon,
  id,
}: {
  name: string;
  id: number;
  color?: string;
  icon: ReactElement;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isTextActive, setIsTextActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 100 * Math.floor(Math.random() * 10) + Math.floor(Math.random() * 5) );
    setTimeout(() => {
      setIsTextActive(true);
    }, 1100);
  }, []);
  return (
    <li className={` flex flex-col  items-center   p-2 `}>
      <div
        className={`w-16 h-16 p-2 bg-black/30 rounded-full ${
          isActive ? "scale-100 rotate-0 " : " scale-0 rotate-270"
        } duration-500 ease-bg-blink`}
      >
        {icon}
      </div>
      <p
        className={`${color} ${
          isTextActive ? " opacity-100" : "opacity-0 rota"
        } duration-300 ease-bg-blink `}
      >
        {name}
      </p>
    </li>
  );
};
