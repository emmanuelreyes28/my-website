//import anime from "animejs";
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
  const dots = []; // used to store divs of dots
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div className={styles.dotborder} data-index={index} key={`${i}-${j}`}>
          <div className={styles.dot} data-index={index}></div>
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
