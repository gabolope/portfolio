import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <div className="py-4 mb-8">
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}
