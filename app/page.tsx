import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./Intro";
import Experience from "./Experience";

export default function Home() {
  return (
    <div>
      <Intro />
      <Experience />
    </div>
  );
}
