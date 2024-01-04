import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./Projects";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}
