import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiMongodb,
  SiSitecore,
  SiFormik,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaConnectdevelop, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const IconStyle = "w-full h-full p-1 rounded-xl";

export const Skills = [
  {
    id: 1,
    name: "HTML5",
    color: "text-HTML5",
    icon: <FaHtml5 className={`${IconStyle} text-HTML5`} />,
  },
  {
    id: 2,
    name: "CSS",
    color: "text-CSS",
    icon: <FaCss3Alt className={`${IconStyle} text-CSS`} />,
  },
  {
    id: 4,
    name: "JavaScript",
    color: "text-JavaScript",
    icon: <SiJavascript className={`${IconStyle} text-JavaScript`} />,
  },
  {
    id: 5,
    name: "TypeScript",
    color: "text-TypeScript",
    icon: <SiTypescript className={`${IconStyle} text-TypeScript`} />,
  },
  {
    id: 6,
    name: "React",
    color: "text-React",
    icon: <FaReact className={`${IconStyle} text-React`} />,
  },
  {
    id: 7,
    name: "Next.js",
    color: "text-NextJS",
    icon: <RiNextjsFill className={`${IconStyle} text-NextJS`} />,
  },
  {
    id: 16,
    name: "SASS",
    color: "text-CSS",
    icon: <FaCss3Alt className={`${IconStyle} text-CSS`} />,
  },
  {
    id: 17,
    name: "CSS Modules",
    color: "text-CSS",
    icon: <FaCss3Alt className={`${IconStyle} text-CSS`} />,
  },
  {
    id: 8,
    name: "Redux",
    color: "text-Redux",
    icon: <SiRedux className={`${IconStyle} text-Redux`} />,
  },
  {
    id: 3,
    name: "Tailwind",
    color: "text-Tailwind",
    icon: <RiTailwindCssFill className={`${IconStyle} text-Tailwind`} />,
  },
  {
    id: 9,
    name: "RTK Query",
    color: "text-RTKQuery",
    icon: <SiRedux className={`${IconStyle} text-RTKQuery`} />,
  }, // Same as Redux
  {
    id: 10,
    name: "Styled Components",
    color: "text-StyledComponents",
    icon: (
      <SiStyledcomponents className={`${IconStyle} text-StyledComponents`} />
    ),
  },
  {
    id: 11,
    name: "Node.js",
    color: "text-NodeJS",
    icon: <FaNodeJs className={`${IconStyle} text-NodeJS`} />,
  },
  {
    id: 12,
    name: "MongoDB",
    color: "text-MongoDB",
    icon: <SiMongodb className={`${IconStyle} ${"text-MongoDB"}`} />,
  },
  {
    id: 13,
    name: "REST API",
    color: "text-RESTAPI",
    icon: <FaConnectdevelop className={`${IconStyle} text-RESTAPI`} />,
  },
  {
    id: 14,
    name: "Sitecore",
    color: "text-Sitecore",
    icon: <SiSitecore className={`${IconStyle} text-Sitecore`} />,
  },
  {
    id: 15,
    name: "Formik",
    color: "text-Formik",
    icon: <SiFormik className={`${IconStyle} text-Formik`} />,
  },
];
