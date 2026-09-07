"use client";

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import LinkButton from "./components/LinkButton";
import FadeInOnView from "./components/FadeInOnView";
import ProjectImageShowcase from "./components/ProjectImageShowcase";
import SectionHeading from "./components/SectionHeading";
import { useLanguage } from "./context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "03",
    eyebrowLabel: "Selected Work",
    title: "Projects",
    d1: "A comprehensive issue tracking system featuring user authentication, advanced filtering, pagination, task assignment, and an analytics dashboard with charts, demonstrating full-stack capabilities.",
    d3: "Responsive landing page for a biotech startup, emphasizing clean design and effective messaging.",
    d4: "Multi-page landing page for a furniture company, featuring section-based navigation and visual storytelling.",
    d5: "AI-assisted support helpdesk with two-way email ticketing, role-based authentication, and automated triage: inbound emails are classified and resolved by LLM agents against a knowledge base, with a workspace for replies, ticket assignment, and AI-polished drafts. Questions about how it works? Email support@inbox.gabriellopez.com.ar and an AI agent will answer.",
    visit: "Visit",
    code: "Code",
  },
  es: {
    eyebrowIndex: "03",
    eyebrowLabel: "Trabajos seleccionados",
    title: "Proyectos",
    d1: "Aplicación completa de seguimiento de problemas que incluye autentificación de usuario, filtrado, paginación, agregado de problemas, y un dashboard con gráficos, demostrando habilidades full-stack.",
    d3: "Página de destino responsiva para una startup de biotecnología, enfatizando diseño limpio y mensajería efectiva.",
    d4: "Página de destino multipágina para una empresa de muebles, con navegación por secciones y narrativa visual.",
    d5: "Mesa de ayuda de soporte asistida por IA con tickets por correo bidireccional, autenticación por roles y triaje automatizado: los correos entrantes se clasifican y resuelven mediante agentes con LLM contra una base de conocimiento, con un espacio de trabajo para respuestas, asignación de tickets y redacción pulida por IA. ¿Preguntas sobre cómo funciona? Escribí a support@inbox.gabriellopez.com.ar y un agente de IA responderá.",
    visit: "Visitar",
    code: "Código",
  },
};

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
  const { eyebrowIndex, eyebrowLabel, title, d1, d3, d4, d5, visit, code } =
    translations[language];

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
      title: "Critter",
      description: d1,
      madeWith: ["Next.js", "Prisma", "MySQL", "React Query"],
      image: "/projects/critter/desktop1.png",
      link: "https://critter.gabriellopez.com.ar/",
      github: "https://github.com/gabolope/issue-tracker",
      screens: [
        {
          mobile: "/projects/critter/mobile1.png",
          desktop: "/projects/critter/desktop1.png",
        },
        {
          mobile: "/projects/critter/mobile2.png",
          desktop: "/projects/critter/desktop2.png",
        },
        {
          mobile: "/projects/critter/mobile3.png",
          desktop: "/projects/critter/desktop3.png",
        },
      ],
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
