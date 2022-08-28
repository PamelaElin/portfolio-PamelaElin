import useStyles from "./useStyles";
import { motion} from "framer-motion";
import Me from "../../assets/imgMe.jpg";
import { father, toRight } from "../../components/Animations/Animations";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import {BsEmojiSmile} from "react-icons/bs";
const About = () => {
  const styles = useStyles();
  const [t]=useTranslation("language");
  return (
   
      <motion.div
      initial="hidden"
      animate="visible"
      variants={father} 
      
        className={styles.container}
        name="about"
      >
        <motion.div 
        variants={toRight}
        className={styles.ring}>
          <div className={styles.about}>
            <div >
              <p  className={styles.aboutText}>{t("aboutPage.about")}</p>
            </div>
            <div className={styles.imgContainer}>
              <img src={Me} className={styles.img} alt="imgMe" />
            </div>
          </div>
          <div className={styles.colum}>
            <div className={styles.columText}>
              <p className={styles.hi}>
                {t("aboutPage.title")}
              </p>
            </div>

            <div>
              <p>
               {t("aboutPage.textCol2")}
              </p>
             
            </div> 
            <div>
              <p>
               {t("aboutPage.textCol3")}
              </p>
              <div className={styles.smile}>
             <BsEmojiSmile size={20}/>

              </div>
            </div> 
          </div>
        </motion.div>
        <Footer/>
      </motion.div>

  );
};

export default About;
