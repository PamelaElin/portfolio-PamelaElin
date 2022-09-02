import { HiArrowNarrowRight } from "react-icons/hi";
import useStyles from "./useStyles";
import { motion } from "framer-motion";
import { toUp } from "../../Animations/Animations";

const ButtonOrange = ({ text, onClick }) => {
  const styles = useStyles();

  return (
    <div>
      <motion.div variants={toUp}>
        <button className={styles.btn} onClick={onClick}>
          {text}
          <span>
            <HiArrowNarrowRight className={styles.arrow} />
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default ButtonOrange;
