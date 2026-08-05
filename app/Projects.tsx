import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import LinkButton from "./components/LinkButton";

const Projects = () => {
  return (
    <section id="projects">
      <Heading align="center" mb="7" size="9">
        Projects
      </Heading>
      {projects.map((project) => (
        <Grid
          key={project.title}
          gap="4"
          mb="6"
          columns={{ initial: "1", md: "2" }}
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
            <Text as="p" size="6" mb="4">
              {project.madeWith.join(" · ")}
            </Text>
            <Text as="p" size="6" mb="4">
              {project.description}
            </Text>
            <Flex gap="3">
              <LinkButton
                href={project.link}
                openInNewTab
                color="var(--accent-9)"
              >
                <TbWorld />
                Visit
              </LinkButton>
              {project.github && (
                <LinkButton
                  href={project.github}
                  openInNewTab
                  color="var(--accent-9)"
                >
                  <FaGithub />
                  Code
                </LinkButton>
              )}
            </Flex>
          </Box>
        </Grid>
      ))}
    </section>
  );
};

export default Projects;

const projects = [
  {
    title: "Issue Tracker",
    description:
      "Full-featured issue tracker with authentication, filtering, pagination, assignment system and dashboard with charts.",
    madeWith: ["Next.js", "Prisma", "MySQL", "React Query"],
    image: "/projects/issueTracker.png",
    link: "https://issue-tracker-drab-eta.vercel.app/",
    github: "https://github.com/gabolope/issue-tracker",
  },
  {
    title: "Gamepedia",
    description:
      "Functional replica of the RAWG website, consuming its public API via React Query.",
    madeWith: ["React", "React Query"],
    image: "/projects/issueTracker.png",
    link: "https://gamepedia-ten.vercel.app/",
    github: "https://github.com/gabolope/gamepedia",
  },
  {
    title: "ThermoReleaf",
    description: "Landing page for a biotech startup",
    madeWith: ["HTML", "CSS", "Bootstrap"],
    image: "/projects/thermoreleaf.png",
    link: "https://thermoreleaf.com.ar/",
  },
  {
    title: "Kreart",
    description: "Multipage landing page for a furniture company",
    madeWith: ["HTML", "CSS", "Bootstrap"],
    image: "/projects/kreart.png",
    link: "https://kreart-dpm.com/",
  },
];
