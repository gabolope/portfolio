"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { BsJavascript } from "react-icons/bs";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAuth0,
  SiAxios,
  SiChakraui,
  SiClaudecode,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRadixui,
  SiReacthookform,
  SiTanstack,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { TbApi, TbBrandTypescript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import FadeInOnView from "./components/FadeInOnView";
import SectionHeading from "./components/SectionHeading";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Skills = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, languages, frontend, backend, tools } =
    translations[language].skills;

  const skillCategories = [
    {
      title: languages,
      skills: [
        { label: "JavaScript", icon: <BsJavascript /> },
        { label: "TypeScript", icon: <TbBrandTypescript /> },
        { label: "HTML5", icon: <TiHtml5 /> },
        { label: "CSS3", icon: <FaCss3Alt /> },
        { label: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: frontend,
      skills: [
        { label: "React", icon: <FaReact /> },
        { label: "Next.js", icon: <RiNextjsLine /> },
        { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        { label: "Radix UI", icon: <SiRadixui /> },
        { label: "Chakra UI", icon: <SiChakraui /> },
        { label: "TanStack Query", icon: <SiTanstack /> },
      ],
    },
    {
      title: backend,
      skills: [
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Prisma", icon: <SiPrisma /> },
        { label: "MySQL", icon: <GrMysql /> },
        { label: "PostgreSQL", icon: <SiPostgresql /> },
        { label: "Firebase", icon: <IoLogoFirebase /> },
        { label: "REST APIs", icon: <TbApi /> },
        { label: "Auth.js", icon: <SiAuth0 /> },
        { label: "Zod", icon: <SiZod /> },
        { label: "React Hook Form", icon: <SiReacthookform /> },
      ],
    },
    {
      title: tools,
      skills: [
        { label: "Claude Code", icon: <SiClaudecode /> },
        { label: "Docker", icon: <FaDocker /> },
        { label: "Git", icon: <FaGitAlt /> },
        { label: "GitHub", icon: <FaGithub /> },
        { label: "Postman", icon: <SiPostman /> },
        { label: "Axios", icon: <SiAxios /> },
        { label: "Vercel", icon: <SiVercel /> },
      ],
    },
  ];

  return (
    <section id="skills" className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      {skillCategories.map((category) => (
        <Box key={category.title} mb="7">
          <Text
            as="div"
            mb="3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {category.title}
          </Text>

          <Flex wrap="wrap" gap="3">
            {category.skills.map((skill, index) => (
              <FadeInOnView key={skill.label} index={index} delay={70}>
                <div
                  style={{
                    border: "1px solid var(--line)",
                    padding: "9px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ color: "var(--signal)", display: "flex" }}>
                    {skill.icon}
                  </div>
                  <Text as="div" size="3" weight="medium">
                    {skill.label}
                  </Text>
                </div>
              </FadeInOnView>
            ))}
          </Flex>
        </Box>
      ))}
    </section>
  );
};

export default Skills;
