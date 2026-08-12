import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import SocialButton from "./components/SocialButton";

const Contact = () => {
  return (
    <section id="contact">
      <Heading align="center" mb="7" size={{ initial: "8", sm: "9" }}>
        Want to...
      </Heading>
      <Flex gap="5" wrap="wrap" justify="center" mb="7">
        {cards.map((card) => (
          <Box
            key={card.title}
            width={{
              initial: "100%",
              sm: "calc(50% - 12px)", // 2 columnas (resta la mitad del gap de 24px)
              md: "calc(33.333% - 16px)", // 3 columnas (resta 1/3 del gap total de 48px)
            }}
          >
            <Card
              variant="surface"
              style={{ height: "100%", border: "1px solid var(--accent-7)" }}
            >
              <Heading align="center" size={{ initial: "7", sm: "8" }} mb="2">
                {card.title}
              </Heading>
              <Text align="center">{card.text}</Text>
            </Card>
          </Box>
        ))}
      </Flex>
      <Flex justify="center">
        <Grid
          columns={{ initial: "2", sm: "4" }}
          gap={{ initial: "4", sm: "8" }}
          justify="center"
        >
          {socialLinks.map(({ id, href, label, icon }) => (
            <SocialButton
              key={id}
              href={href}
              color="var(--accent-9)"
              openInNewTab
            >
              {icon}
              {label}
            </SocialButton>
          ))}
        </Grid>
      </Flex>
    </section>
  );
};

export default Contact;

const cards = [
  {
    title: "Offer job opportunity?",
    text: "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
  },
  {
    title: "Connect?",
    text: "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
  },
  {
    title: "Build something?",
    text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
  },
];

const socialLinks = [
  {
    id: "email",
    href: "mailto:gabriellopezmdp@gmail.com?subject=Contact%20from%20Portfolio&body=Hi,%20I%20saw%20your%20online%20portfolio...",
    label: "Email",
    icon: <MdOutlineEmail />,
  },
  {
    id: "github",
    href: "https://github.com/gabolope",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/gabriel-alejandro-l%C3%B3pez/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    id: "resume",
    href: "/resume.pdf",
    label: "Resume",
    icon: <FaRegFilePdf />,
  },
];
