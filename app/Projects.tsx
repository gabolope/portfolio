"use client";

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import LinkButton from "./components/LinkButton";
import FadeInOnView from "./components/FadeInOnView";
import ProjectImageShowcase from "./components/ProjectImageShowcase";
import SectionHeading from "./components/SectionHeading";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

interface Project {
  title: string;
  description: string;
  madeWith: string[];
  image: string;
  link: string;
  github?: string;
  screens?: { mobile: string; desktop: string }[];
}

const Projects = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, d1, d3, d4, d5 } =
    translations[language].projects;
  const { visit, code } = translations[language].buttons;

  const projects: Project[] = [
    {
      title: "Herald",
      description: d5,
      madeWith: [
        "Bun",
        "Express",
        "React",
        "Prisma",
        "PostgreSQL",
        "TanStack Query",
      ],
      image: "/projects/herald/desktop1.png",
      link: "https://helpdesk-production-4866.up.railway.app/",
      screens: [
        {
          mobile: "/projects/herald/mobile2.png",
          desktop: "/projects/herald/desktop1.png",
        },
        {
          mobile: "/projects/herald/mobile3.png",
          desktop: "/projects/herald/desktop2.png",
        },
        {
          mobile: "/projects/herald/mobile1.png",
          desktop: "/projects/herald/desktop3.png",
        },
      ],
    },
    {
      title: "Issue Tracker",
      description: d1,
      madeWith: ["Next.js", "Prisma", "MySQL", "React Query"],
      image: "/projects/issueTracker.png",
      link: "https://issue-tracker-drab-eta.vercel.app/",
      github: "https://github.com/gabolope/issue-tracker",
    },
    {
      title: "ThermoReleaf",
      description: d3,
      madeWith: ["HTML", "CSS", "Bootstrap"],
      image: "/projects/thermoreleaf/desktop1.png",
      link: "https://thermoreleaf.com.ar/",
      screens: [
        {
          mobile: "/projects/thermoreleaf/mobile1.png",
          desktop: "/projects/thermoreleaf/desktop1.png",
        },
        {
          mobile: "/projects/thermoreleaf/mobile2.png",
          desktop: "/projects/thermoreleaf/desktop2.png",
        },
        {
          mobile: "/projects/thermoreleaf/mobile3.png",
          desktop: "/projects/thermoreleaf/desktop3.png",
        },
      ],
    },
    {
      title: "Kreart",
      description: d4,
      madeWith: ["HTML", "CSS", "Bootstrap"],
      image: "/projects/kreart/desktop1.png",
      link: "https://kreart-dpm.com/",
      screens: [
        {
          mobile: "/projects/kreart/mobile1.png",
          desktop: "/projects/kreart/desktop1.png",
        },
        {
          mobile: "/projects/kreart/mobile2.png",
          desktop: "/projects/kreart/desktop2.png",
        },
        {
          mobile: "/projects/kreart/mobile3.png",
          desktop: "/projects/kreart/desktop3.png",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      {projects.map((project, index) => (
        <FadeInOnView
          key={project.title}
          index={index}
          delay={100}
          threshold={0.75}
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
              <Heading mb="3" size="8" style={{ fontWeight: 600 }}>
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
