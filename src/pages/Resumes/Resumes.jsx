import React from "react";
import ResumeEs from "../../assets/cvES.pdf";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  father,
  toRight,
  toLeft,
  toDown,
} from "../../components/Animations/Animations";
import useStyles from "./useStyles";

export const Resumes = () => {
  const [t] = useTranslation("language");
  const styles = useStyles();
// alert temporal hasta que se modifique cv
  const handleClick=(e)=>{
    e.preventDefault()
    alert(`${t("resumePage.alert")}`)}
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      className={styles.container}
    >
      <div className={styles.subContainer}>
        <motion.div variants={toDown}>

        <p className={styles.title}> {t("resumePage.title")}</p>
      </motion.div>
      <motion.div variants={toRight} >
        <a href={ResumeEs} target="_blank" rel="noreferrer" className={styles.btn}>
          {t("resumePage.btn1")}
        </a>
      </motion.div>
      <motion.div variants={toLeft} onClick={handleClick} className={styles.btn}>
        {/* <a href={ResumeEn} target="_blank" rel="noreferrer"> */}
          {t("resumePage.btn2")}
        {/* </a> */}
      </motion.div>
      </div>
      
    </motion.div>
  );
};
