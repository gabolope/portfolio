"use client";

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import LinkButton from "./components/LinkButton";
import FadeInOnView from "./components/FadeInOnView";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Projects = () => {
  const { language } = useLanguage();
  const { title, d1, d2, d3, d4 } = translations[language].projects;
  const { visit, code } = translations[language].buttons;

  const projects = [
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
      image: "/projects/thermoreleaf.png",
      link: "https://thermoreleaf.com.ar/",
    },
    {
      title: "Kreart",
      description: d4,
      madeWith: ["HTML", "CSS", "Bootstrap"],
      image: "/projects/kreart.png",
      link: "https://kreart-dpm.com/",
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <Heading align="center" mb="7" size="9">
        {title}
      </Heading>
      {projects.map((project, index) => (
        <FadeInOnView
          key={project.title}
          index={index}
          delay={100}
          threshold={0.75}
          alternating
        >
          <Grid
            gap="4"
            mb="6"
            columns={{ initial: "1", md: "2" }}
            align="start"
          >
            <Box
              style={{
                position: "relative",
                aspectRatio: "5 / 3",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </Box>
            <Box>
              <Heading mb="4" size="8">
                {project.title}
              </Heading>
              <Text as="p" size="5" mb="4">
                {project.madeWith.join(" · ")}
              </Text>
              <Text as="p" size="5" mb="4">
                {project.description}
              </Text>
              <Flex gap="3">
                <LinkButton
                  href={project.link}
                  openInNewTab
                  color="var(--accent-9)"
                >
                  <TbWorld />
                  {visit}
                </LinkButton>
                {project.github && (
                  <LinkButton
                    href={project.github}
                    openInNewTab
                    color="var(--accent-9)"
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
