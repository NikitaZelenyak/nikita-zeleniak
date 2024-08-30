import { Skills } from "@/app/helpers/SkiilsSection/Skills";
import { FaHtml5, FaCss3Alt, FaConnectdevelop, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiMongodb,
  SiSitecore,
  SiFormik,
} from "react-icons/si";

const iconMap = {
  HTML5: <FaHtml5 />,
  "CSS/SASS/CSS Modules": <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <RiNextjsFill />,
  Redux: <SiRedux />,
  Tailwind: <RiTailwindCssFill />,
  "RTK Query": <SiRedux />,
  "Styled Components": <SiStyledcomponents />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  "REST API": <FaConnectdevelop />,
  Sitecore: <SiSitecore />,
  Formik: <SiFormik />,
};

export const SkillsSections = () => {
  return (
    <section className="container">
      <h2 className="text-center">Skills Overview</h2>

      <ul className="flex flex-wrap items-center justify-center gap-4">
        {Skills.map(({ name, id, color }) => (
          <li key={id} className="flex items-center gap-2">
            {iconMap[name]} {/* Render the icon based on the skill name */}
            <h3 className={`${color}`}>{name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
