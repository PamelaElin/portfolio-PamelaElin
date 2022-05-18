import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../../assets/cv.pdf";
import useStyles from "./useStyles";
import { motion } from "framer-motion";
import {
  father,
  toRight,
  toLeft,
  nut,
} from "../../components/Animations/Animations";
import ButtonPink from "../../components/Buttons/ButtonPink/ButtonPink";
import ButtonSlider from "../../components/Buttons/ButtonSlider/ButtonSlider";
import { useTranslation } from "react-i18next";
import Footer from '../../components/Footer/Footer';
const Home = () => {
  const navigate = useNavigate();
  const toWork = () => navigate("/work");
  const toContact = () => navigate("/contact");
  const styles = useStyles();
  const [t]=useTranslation("language");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      className={styles.container}
    >
<div className={styles.subContainer}>

    <ButtonSlider/>

    
     
      <motion.p variants={toLeft} className={styles.hi}>
      {t("homePage.hi")}
      </motion.p>
      <motion.h1
        variants={toRight}
        className={`${styles.textTitle} text-white`}
      >
        Pamela Elin Sosa
      </motion.h1>
      <motion.h2
        variants={toLeft}
        className={`${styles.textTitle} text-[#ced7ee]`}
      >
        {t("homePage.title")}
      </motion.h2>
     
      <div className={styles.socialIcons}>
        <motion.div variants={nut}>
          <div className={`${styles.iconBox}  bg-[#86b7df] `}>
            <a
              className={styles.icon}
              href="https://www.linkedin.com/in/pamelaelinsosa/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </motion.div>
        <motion.div variants={nut}>
          <div className={`${styles.iconBox} bg-[#333333] `}>
            {" "}
            <a
              className={styles.icon}
              href="https://github.com/PamelaElin"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </motion.div>
        <motion.div variants={nut}>
          <div className={`${styles.iconBox} bg-[#6fc2b0]`}>
            <div className={styles.icon} onClick={toContact}>
              <HiOutlineMail size={30} />
            </div>
          </div>
        </motion.div>
        <motion.div variants={nut}>
          <div className={`${styles.iconBox} bg-[#b480b6]`}>
            <a className={styles.icon} href={Resume}>
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </motion.div>
      </div>

      <ButtonPink text={t("buttonPink.home")} onClick={toWork} />
      </div>
      <Footer/>
    </motion.div>
  );
};

export default Home;
