import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Me from "../../assets/imgMe.jpg";
import useStyles from "./useStyles";
import { motion } from "framer-motion";
import {
  father,
  toRight,
  toLeft,
  boom,
} from "../../components/Animations/Animations";
import ButtonOrange from "../../components/Buttons/ButtonOrange/ButtonOrange";
import ButtonSlider from "../../components/Buttons/ButtonSlider/ButtonSlider";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const navigate = useNavigate();
  const toWork = () => navigate("/work");
  const toContact = () => navigate("/contact");
  const toResumes = () => navigate("/resumes");
  const styles = useStyles();
  const [t] = useTranslation("language");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      className={styles.container}
    >
      <div className={styles.subContainer}>
        <ButtonSlider />

        <div className={styles.textContainer}>
       <div className="m-2">
        
<img src={Me} className={styles.img} alt="imgMe" />
        </div>   
        <div className="flex flex-col justify-center  items-center ml-4">
          <motion.p variants={toLeft} className={styles.hi}>
          
            {t("homePage.hi")}
          </motion.p>
          <motion.h1
            variants={toRight}
            className={`${styles.textTitle} `}
          >
            {t("homePage.title")}
          </motion.h1>
          <motion.h2
            variants={toLeft}
            className={`${styles.textsubTitle} `}
          >
            {t("homePage.subtitle")}
          </motion.h2>
        </div>
          
        </div>
        <div className={styles.networksBox}>
<div>

   <p className={styles.networks} >{t("homePage.networks")}</p>
        <div className={styles.socialIcons}>
       
          <motion.div variants={boom}>
            
            <div className={`${styles.iconBox}  bg-rose-500 `}>
              <a
                className={styles.icon}
                href="https://www.linkedin.com/in/pamelaelinsosa/"
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={boom}>
            <div className={`${styles.iconBox} bg-rose-500 `}>
              {" "}
              <a
                className={styles.icon}
                href="https://github.com/PamelaElin"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={boom}>
            <div className={`${styles.iconBox} bg-rose-500`}>
              <div
                className={styles.icon}
                onClick={toContact}
                title={t("homePage.titleContact")}
              >
                <HiOutlineMail size={30} />
              </div>
            </div>
          </motion.div>
</div>


          
          
        </div>
        <div >
          <p className={styles.networks} >{t("homePage.titleCV")}</p>
<div className={styles.socialIconsResume}>
  <motion.div variants={boom}>
            <div className={`${styles.iconBox} bg-rose-500`}>
            <div
                className={styles.icon}
                onClick={toResumes}
                title={t("homePage.titleCV")}
              > <BsFillPersonLinesFill size={30} />
              </div>
             
            
            </div>
          </motion.div>
</div>
            
          </div>
        </div>

        <ButtonOrange text={t("buttonOrange.home")} onClick={toWork} />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
