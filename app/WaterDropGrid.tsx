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
  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {}
  }
};

export default WaterDropGrid;
