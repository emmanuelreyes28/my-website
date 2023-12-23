"use client";
import anime from "animejs";
import styles from "./styles.module.css";

const WaterDropGrid = () => {
  return (
    <div className={styles.dotgrid}>
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = []; // used to store divs of dots
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className={styles.dotborder}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className={`dot-point ${styles.dot}`} data-index={index}></div>
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
      }}
      className={styles.dotdisplay}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};

export default WaterDropGrid;
