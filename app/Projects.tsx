"use client";
import Link from "next/link";
import styles from "./styles/projects.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div id="projects">
      <h1 className={styles.header}>PROJECTS</h1>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <div className={styles.container}>
          <motion.div variants={item}>
            <div className={styles.project}>
              <div className={styles.cell}>
                <Link href="https://the-pre-workout-insider.vercel.app/">
                  <h3 className={styles.projectTitle}>
                    The Pre-Workout Insider
                    <span className={styles.arrow}>
                      <FiArrowUpRight />
                    </span>
                  </h3>
                  <p className={styles.projectDescription}>
                    Here, you can discover new pre-workout products and share
                    your own reviews based on your personal experiences. We
                    provide detailed information about each pre-workout,
                    including its benefits, caffeine content, and whether it
                    features an open label or proprietary blend. Make informed
                    decisions and find the perfect pre-workout to enhance your
                    fitness journey.
                  </p>
                  <div className={styles.technologies}>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Tailwind CSS</span>
                    <span>MongoDB</span>
                    <span>Vercel</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className={styles.project}>
              <div className={styles.cell}>
                <Link href="https://github.com/emmanuelreyes28/blue-bird">
                  <h3 className={styles.projectTitle}>
                    Blue Bird
                    <span className={styles.arrow}>
                      <FiArrowUpRight />
                    </span>
                  </h3>
                  <p className={styles.projectDescription}>
                    A mininum viable product (mvp) clone of X, formerly known as
                    Twitter. Users can easily sign-in with their GitHub or
                    LinkedIn account. Once signed-in, users can post tweets and
                    like other users&apos; posts.
                  </p>
                  <div className={styles.technologies}>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Tailwind CSS</span>
                    <span>PostgeSQL</span>
                    <span>Supabase</span>
                    <span>Vercel</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className={styles.project}>
              <div className={styles.cell}>
                <Link href="https://github.com/emmanuelreyes28/resume-api">
                  <h3 className={styles.projectTitle}>
                    Resume-API
                    <span className={styles.arrow}>
                      <FiArrowUpRight />
                    </span>
                  </h3>
                  <p className={styles.projectDescription}>
                    Designed and developed a RESTful API to showcase various
                    sections of my resume, including personal information,
                    education, work experience, projects and skills.
                  </p>
                  <div className={styles.technologies}>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>Mocha</span>
                    <span>Chai</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className={styles.project}>
              <div className={styles.cell}>
                <Link href="https://github.com/emmanuelreyes28/Blog-Web-App">
                  <h3 className={styles.projectTitle}>
                    Blog Web App
                    <span className={styles.arrow}>
                      <FiArrowUpRight />
                    </span>
                  </h3>
                  <p className={styles.projectDescription}>
                    The Blog Web App project is a dynamic and interactive
                    platform designed for creating, managing, and sharing blog
                    content. Leveraging modern web technologies, this project
                    aims to provide a user-friendly interface for both bloggers
                    and readers.
                  </p>
                  <div className={styles.technologies}>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Embedded JavaScript Templates (EJS)</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
