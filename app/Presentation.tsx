import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

const Presentation = () => {
  return (
    <Grid columns={{ initial: "1", md: "2" }} align="center" gap="6">
      <Box>
        <Heading mb="4" size="7">
          Hello! My name is
        </Heading>
        <Heading mb="4" size="8" style={{ color: "var(--accent-9)" }}>
          Gabriel López
        </Heading>
        <Heading mb="4" size="7">
          and I am Frontend Developer.
        </Heading>
        <Text as="p" size="5">
          I'm a passionate Frontend Developer based in Argentina. I have a PhD
          in science. Specialized in React, TypeScript, and JavaScript, with
          experience integrating REST APIs, authentication, relational
          databases, and modern frontend architecture using Tailwind CSS, Prisma
          and React Query. I enjoy turning complex needs into clear and
          functional user experiences through web development. My background in
          scientific research sharpened my analytical thinking and
          problem-solving approach, which I bring directly to every project. I'm
          looking to contribute to a collaborative team while continuing to grow
          as a software engineer.
        </Text>
      </Box>
      <Box
        className="w-full md:w-[30vw] md:mx-auto"
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "10px 10px var(--accent-9)",
        }}
      >
        <Image
          src="/photo.png"
          fill
          alt="Gabriel López picture"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Grid>
  );
};

export default Presentation;
