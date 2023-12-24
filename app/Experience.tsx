import styles from "./styles/experience.module.css";

function Experience() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>EXPERIENCE</h1>
      <div className={styles.experienceOne}>
        <div className={styles.leftCells}>
          <h3 className={styles.jobTitle}>Software Engineer • Abbott</h3>
          <p className={styles.timeframe}>
            <em>February 2022 - Present</em>
          </p>
          <p className={styles.jobDescription}>
            Specialize in addressing complex field issues, conducting root
            causes analyses and implementing solutions in adherence to Quality
            System regulations. Collaborate with DevOps and other
            cross-functional teams to deploy software releases, impacting
            500,000 users. Develop software verification plans for testing in
            staging and production environments.
          </p>
          <div className={styles.skills}>
            <span>Python</span>
            <span>SQL</span>
            <span>Software Development Life Cycle</span>
            <span>Graylog</span>
          </div>
        </div>
      </div>
      <div className={styles.experienceTwo}>
        <div className={styles.rightCells}>
          <h3 className={styles.jobTitle}>
            Software Progamming Instructor • Coding Minds Academy
          </h3>
          <p className={styles.timeframe}>
            <em>August 2019 - February 2022</em>
          </p>
          <p className={styles.jobDescription}>
            Experienced programming educator with a proven track record of
            teaching over 10 courses, including Python and Web Development, to
            students aged 13-17. Collaborated on curriculum design, resulting in
            widespread adoption and the successful completion of 100+ projects
            per quarter by 150+ students and instructors.
          </p>
          <div className={styles.skills}>
            <span>Python</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>C#</span>
          </div>
        </div>
      </div>
      <div className={styles.experienceOne}>
        <div className={styles.leftCells}>
          <h3 className={styles.jobTitle}>
            Software & Robotics Instructor • UCI Merage Beall Center
          </h3>
          <p className={styles.timeframe}>
            <em>June 2018 - August 2018</em>
          </p>
          <p className={styles.jobDescription}>
            Educational leader with a focus on coding and robotics, overseeing a
            group of 20 students in an immersive introduction to Arduino
            programming. Enhanced students&apos; coding proficiency through
            effective instruction in C++ programming and Arduino IDE
            utilization. Guided students in crafting expressive robotics,
            resulting in the successful development of 10 operational robots.
          </p>
          <div className={styles.skills}>
            <span>C++</span>
            <span>Arduino</span>
            <span>Breadboarding</span>
            <span>Hardware Components</span>
          </div>
        </div>
      </div>
      <div className={styles.experienceThree}>
        <div className={styles.rightCells}>
          <h3 className={styles.jobTitle}>
            Software Progamming Instructor • Dreams for Schools
          </h3>
          <p className={styles.timeframe}>
            <em>April 2017 - June 2017</em>
          </p>
          <p className={styles.jobDescription}>
            At Rancho San Joaquin Middle School, I spearheaded a 12-week project
            using MIT App Inventor, providing guidance to students as they
            created unique educational games. In addition to teaching
            programming concepts, I fostered collaboration within groups to
            collectively design engaging and educational games.
          </p>
          <div className={styles.skills}>
            <span>MIT App Inventor</span>
            <span>Block Programming</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
