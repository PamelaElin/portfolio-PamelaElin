import useStyles from "./useStyles";
import { motion} from "framer-motion";
import Me from "../../assets/imgMe.jpg";
import { father, toRight } from "../../components/Animations/Animations";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
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
               {t("aboutPage.text")}
              </p>
             
            </div> 
          </div>
        </motion.div>
        <Footer/>
      </motion.div>

  );
};

export default About;
