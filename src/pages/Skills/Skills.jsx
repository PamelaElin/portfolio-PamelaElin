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
import { FaAngular, FaBootstrap, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJsSquare, FaNode, FaReact, FaSass } from "react-icons/fa";

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
           
            <FaHtml5 />
           
          </div>
          <div className={styles.iconBox}>
            <FaCss3Alt />
           
          </div>
          <div className={styles.iconBox}>
            <FaJsSquare />
        
          </div>
          <div className={styles.iconBox}>
            <FaReact />
            
          </div>
          <div className={styles.iconBox}>
          zustand
          </div>
          <div className={styles.iconBox}>
            <FaSass />
          </div>
          <div className={styles.iconBox}>
         
            <FaBootstrap />
          </div>
          <div className={styles.iconBox}>
            Tailwhind
          </div>
          <div className={styles.iconBox}>
            <FaGit />

          </div>
          <div className={styles.iconBox}>
            <FaGithub />
          </div>
          <div className={styles.iconBox}>
          Next js
          </div>
          <div className={styles.iconBox}>
            express
          </div>
          <div className={styles.iconBox}>
            <FaNode />
          </div>
       
           <div className={styles.iconBox}>
           Typescript
          </div> 
          <div className={styles.iconBox}>
          <FaAngular />
            
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
