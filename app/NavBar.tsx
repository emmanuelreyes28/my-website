import styles from "./styles/navbar.module.css";
import Link from "next/link";

//TO-DO: Link each section; Add underline to each link; Add on hover effect; Make navbar sticky

function NavBar() {
  return (
    <div>
      <section className={styles.container}>
        <div>
          <Link href="#" className={styles.link}>
            Introduction
          </Link>
        </div>
        <div>
          <Link href="#" className={styles.link}>
            Projects
          </Link>
        </div>
        <div>
          <Link href="#" className={styles.link}>
            Experience
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
