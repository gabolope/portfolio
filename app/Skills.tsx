import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
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

const Skills = () => {
  return (
    <section id="skills">
      {skillCategories.map((category) => (
        <Box key={category.title} mb="6">
          <Heading mb="3" size="6">
            {category.title}
          </Heading>

          <Flex wrap="wrap" gap="3">
            {category.skills.map((skill) => (
              <Card
                key={skill.label}
                style={{ border: "1px solid var(--accent-7)" }}
              >
                <Flex gap="3" align="center">
                  <div style={{ color: " var(--accent-9)" }}>{skill.icon}</div>
                  <Text as="div" size="3" weight="medium">
                    {skill.label}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Box>
      ))}
    </section>
  );
};

export default Skills;

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { label: "JavaScript", icon: <BsJavascript /> },
      { label: "TypeScript", icon: <TbBrandTypescript /> },
      { label: "HTML5", icon: <TiHtml5 /> },
      { label: "CSS3", icon: <FaCss3Alt /> },
      { label: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Frontend",
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
    title: "Backend & Database",
    skills: [
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Prisma", icon: <SiPrisma /> },
      { label: "MySQL", icon: <GrMysql /> },
      { label: "Firebase", icon: <IoLogoFirebase /> },
      { label: "REST APIs", icon: <TbApi /> },
      { label: "Auth.js", icon: <SiAuth0 /> },
      { label: "Zod", icon: <SiZod /> },
      { label: "React Hook Form", icon: <SiReacthookform /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { label: "Docker", icon: <FaDocker /> },
      { label: "Git", icon: <FaGitAlt /> },
      { label: "GitHub", icon: <FaGithub /> },
      { label: "Postman", icon: <SiPostman /> },
      { label: "Axios", icon: <SiAxios /> },
      { label: "Vercel", icon: <SiVercel /> },
    ],
  },
];
