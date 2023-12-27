"use client";

import Link from "next/link";
import styles from "./styles/projects.module.css";
import { FiArrowUpRight } from "react-icons/fi";

function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>PROJECTS</h1>
      <Link href="https://the-pre-workout-insider.vercel.app/">
        <div className={styles.leftCell}>
          <div className={styles.projectOne}>
            <h3 className={styles.projectTitle}>
              The Pre-Workout Insider
              <span className={styles.arrow}>
                <FiArrowUpRight />
              </span>
            </h3>
            <p className={styles.projectDescription}>
              Here, you can discover new pre-workout products and share your own
              reviews based on your personal experiences. We provide detailed
              information about each pre-workout, including its benefits,
              caffeine content, and whether it features an open label or
              proprietary blend. Make informed decisions and find the perfect
              pre-workout to enhance your fitness journey.
            </p>
            <div className={styles.technologies}>
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
              <span>MongoDB</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://github.com/emmanuelreyes28/blue-bird">
        <div className={styles.rightCell}>
          <div className={styles.projectTwo}>
            <h3 className={styles.projectTitle}>
              Blue Bird
              <span className={styles.arrow}>
                <FiArrowUpRight />
              </span>
            </h3>
            <p className={styles.projectDescription}>
              A mininum viable product (mvp) clone of X, formerly known as
              Twitter. Users can easily sign-in with their GitHub or LinkedIn
              account. Once signed-in, users can post tweets and like other
              users&apos; posts.
            </p>
            <div className={styles.technologies}>
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
              <span>PostgeSQL</span>
              <span>Supabase</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://github.com/emmanuelreyes28/resume-api">
        <div className={styles.leftCell}>
          <div className={styles.projectThree}>
            <h3 className={styles.projectTitle}>
              Resume-API
              <span className={styles.arrow}>
                <FiArrowUpRight />
              </span>
            </h3>
            <p className={styles.projectDescription}>
              Designed and developed a RESTful API to showcase various sections
              of my resume, including personal information, education, work
              experience, projects and skills.
            </p>
            <div className={styles.technologies}>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Mocha</span>
              <span>Chai</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://github.com/emmanuelreyes28/Blog-Web-App">
        <div className={styles.rightCell}>
          <div className={styles.projectTwo}>
            <h3 className={styles.projectTitle}>
              Blog Web App
              <span className={styles.arrow}>
                <FiArrowUpRight />
              </span>
            </h3>
            <p className={styles.projectDescription}>
              The Blog Web App project is a dynamic and interactive platform
              designed for creating, managing, and sharing blog content.
              Leveraging modern web technologies, this project aims to provide a
              user-friendly interface for both bloggers and readers.
            </p>
            <div className={styles.technologies}>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Embedded JavaScript Templates</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Projects;
