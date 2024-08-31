"use client";
import { Skills } from "@/app/helpers/SkiilsSection/Skills";
import { SkillItem } from "./SkillItem";
import { ReactElement, useState } from "react";
import { CTAButton } from "../../../ui/button/CTAButton";

export const SkillsSections = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = Skills?.slice(0, indexOfLastItem);
  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <section className="container">
      <h2 className="text-center mb-8">Skills Overview</h2>

      <ul className="  grid grid-cols-5 gap-4 relative">
        {currentItems.map(
          ({
            name,
            id, 
            color,
            icon,
          }: {
            name: string;
            icon: ReactElement;
            id: number;
            color: string;
          }) => {
            return (
              <SkillItem
                key={id}
                id={id}
                name={name}
                color={color}
                icon={icon}
              />
            );
          }
        )}
      </ul>
      {currentItems.length < Skills.length ? (
        <CTAButton
          text={"Load more"}
          style="mx-auto block mt-12"
          onClick={loadMore}
        />
      ) : (
        <p className="text-center mt-8">
         I'm learning new skills every day—who knows, I might be just a few steps away from finishing ChatGPT-5!
        </p>
      )}
    </section>
  );
};
