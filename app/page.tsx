import About from "./About";
import LinkButton from "./components/LinkButton";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <div className="wavy py-4 mb-8">
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
    </>
  );
}
