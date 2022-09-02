import HTMLimg from "../../assets/html.png";
import CSSimg from "../../assets/css.png";
import JSimg from "../../assets/javascript.png";
import SASSimg from "../../assets/sass.png";
import BootstrapImg from "../../assets/bootstrap.png";
import TWImg from "../../assets/tailwind.png";
import ReactImg from "../../assets/react.png";
import ReduxImg from "../../assets/redux.png";
import GitImg from "../../assets/git.png";
import GitHubImg from "../../assets/github.png";
import certif1 from "../../assets/certif1.png";
import certif2 from "../../assets/certif2.png";
import useStyles from "./useStyles";
import { motion } from "framer-motion";
import {
  father,
  toLeft,
  toUp,
  toRight,
} from "../../components/Animations/Animations";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";

const Skills = () => {
  const styles = useStyles();
  const [t] = useTranslation("language");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      name="skills"
      className={styles.container}
    >
      <div className={styles.textContainer}>
        <motion.p variants={toRight} className={styles.skills}>
          {t("skillsPage.skills")}
        </motion.p>

        <motion.p variants={toLeft} className={styles.text}>
          {t("skillsPage.subtitle")}
        </motion.p>

        <motion.div variants={toUp} className={styles.containerSkills}>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={HTMLimg} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={CSSimg} alt="css icon" />
            <p>CSS</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={JSimg} alt="js icon" />
            <p>JAVASCRIPT</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={ReactImg} alt="react icon" />
            <p>REACT</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={ReduxImg} alt="redux icon" />
            <p>REDUX</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={SASSimg} alt="sass icon" />
            <p>SASS</p>
          </div>
          <div className={styles.iconBox}>
            <img
              className={styles.icon}
              src={BootstrapImg}
              alt="bootstrap icon"
            />
            <p>BOOTSTRAP</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={TWImg} alt="tw icon" />
            <p>TAILWIND</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={GitImg} alt="git icon" />
            <p>GIT</p>
          </div>
          <div className={styles.iconBox}>
            <img className={styles.icon} src={GitHubImg} alt="github icon" />
            <p>GITHUB</p>
          </div>
        </motion.div>
      </div>

      {/* Certifications*/}
      <div className={styles.textContainer}>
        <motion.p variants={toRight} className={styles.skills}>
          {t("skillsPage.certif")}
        </motion.p>

        <motion.div variants={toUp} className={styles.containerCertif}>
          <div className={styles.certifBox}>
            <img className={styles.certif} src={certif1} alt="certif1" />
            <p>HTML y CSS</p>
          </div>
          <div className={styles.certifBox}>
            <img className={styles.certif} src={certif2} alt="certif1" />
            <p>JS</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Skills;
