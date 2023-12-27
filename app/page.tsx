import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}
