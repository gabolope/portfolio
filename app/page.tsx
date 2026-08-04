import About from "./About";
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
    </>
  );
}
