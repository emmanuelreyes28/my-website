import styles from "./styles/footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Link href="https://github.com/emmanuelreyes28">
            <FaGithub />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://www.linkedin.com/in/reyesej/">
            <FaLinkedin />
          </Link>
        </div>
        <div className={styles.icon}>
          <a href="mailto:emmanuel.reyes28@gmail.com">
            <MdEmail />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>{year} &copy; Emmanuel Reyes</div>
    </div>
  );
}

export default Footer;
