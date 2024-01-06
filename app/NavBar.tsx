import styles from "./styles/navbar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <div className={styles.container}>
      <section className={styles.nav}>
        <div>
          <Link href="#intro" className={styles.link}>
            Introduction
          </Link>
        </div>
        <div>
          <Link href="#experience" className={styles.link}>
            Experience
          </Link>
        </div>
        <div>
          <Link href="#projects" className={styles.link}>
            Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
