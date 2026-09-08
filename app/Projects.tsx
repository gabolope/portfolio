"use client";

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import LinkButton from "./components/LinkButton";
import FadeInOnView from "./components/FadeInOnView";
import ProjectImageShowcase from "./components/ProjectImageShowcase";
import SectionHeading from "./components/SectionHeading";
import { useLanguage } from "./context/LanguageContext";
import { getProject, type ProjectScreen } from "./data/projects";

const translations = {
  en: {
    eyebrowIndex: "03",
    eyebrowLabel: "Selected Work",
    title: "Projects",
    visit: "Visit",
    code: "Code",
  },
  es: {
    eyebrowIndex: "03",
    eyebrowLabel: "Trabajos seleccionados",
    title: "Proyectos",
    visit: "Visitar",
    code: "Código",
  },
};

interface DisplayProject {
  title: string;
  description: string;
  madeWith: string[];
  image: string;
  link: string;
  github?: string;
  screens: ProjectScreen[];
}

// Facts and copy (name, URL, screenshots, description) live in
// app/data/projects.ts — this just picks the home page's order and pairs
// each project with its tech-stack tags.
const HOME_ORDER = [
  {
    id: "herald",
    madeWith: [
      "Bun",
      "Express",
      "React",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
    ],
  },
  {
    id: "songmanager",
    madeWith: ["React", "TypeScript", "Firebase", "Firestore", "Chakra UI"],
  },
  {
    id: "critter",
    madeWith: ["Next.js", "Prisma", "MySQL", "React Query"],
  },
  {
    id: "thermoreleaf",
    madeWith: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "kreart",
    madeWith: ["HTML", "CSS", "Bootstrap"],
  },
] as const;

const Projects = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, visit, code } =
    translations[language];

  const projects: DisplayProject[] = HOME_ORDER.map(({ id, madeWith }) => {
    const project = getProject(id);
    return {
      title: project.title,
      description: project.description[language],
      madeWith: [...madeWith],
      image: project.screens[0].desktop,
      link: project.href,
      github: project.github,
      screens: project.screens,
    };
  });

  return (
    <section id="projects" className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      {projects.map((project, index) => (
        <FadeInOnView
          key={project.title}
          index={index}
          delay={100}
          threshold={0.25}
          alternating
        >
          <Grid
            gap="6"
            columns={{ initial: "1", md: "2" }}
            align="start"
            style={{ marginBottom: "7.5rem" }}
          >
            <ProjectImageShowcase
              title={project.title}
              image={project.image}
              screens={project.screens}
            />
            <Box>
              <Heading as="h3" mb="3" size="8" style={{ fontWeight: 600 }}>
                {project.title}
              </Heading>
              <Text
                as="p"
                size="3"
                mb="4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--muted)",
                }}
              >
                {project.madeWith.join(" · ")}
              </Text>
              <Text
                as="p"
                size="5"
                mb="5"
                style={{ color: "var(--muted)", lineHeight: 1.65 }}
              >
                {project.description}
              </Text>
              <Flex gap="3">
                <LinkButton href={project.link} openInNewTab variant="solid">
                  <TbWorld />
                  {visit}
                </LinkButton>
                {project.github && (
                  <LinkButton
                    href={project.github}
                    openInNewTab
                    variant="outline"
                  >
                    <FaGithub />
                    {code}
                  </LinkButton>
                )}
              </Flex>
            </Box>
          </Grid>
        </FadeInOnView>
      ))}
    </section>
  );
};

export default Projects;
