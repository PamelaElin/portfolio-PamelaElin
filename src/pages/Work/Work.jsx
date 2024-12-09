import WorkImg from '../../assets/workImg.jpeg';
import Natural from '../../assets/nd.jpeg'
import ayrtonImg from '../../assets/ayrtonImg.jpeg'
import weatherImg from '../../assets/weatherImg.jpeg';
import crudImg from '../../assets/crudImg.jpeg';
import toDoList from '../../assets/toDoList.jpeg';
import useStyles from './useStyles';
import { motion } from "framer-motion"
import { father,toLeft,toRight,toUp} from "../../components/Animations/Animations";
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import WorkBox from './WorkBox';
const Work = () => {
    const styles=useStyles();
    const [t]=useTranslation("language");
  return (
<motion.div
initial="hidden"
animate="visible"
variants={father}  name='work' className={styles.container}>
    
        <div className={styles.subContainer}>
            <motion.p variants={toRight} className={styles.workText}>{t("workPage.work")}</motion.p>
            <motion.p variants={toLeft} className={styles.text}>{t("workPage.subtitle")}</motion.p>
     

        <motion.div variants={toUp}  className={styles.containerWorks}>
        <WorkBox onClick={() => window.open('https://natural-deluxe.vercel.app/', '_blank')}
            pic={Natural}
            title='Ayrton Portfolio'
            
            text={t("workPage.textNatural")}
            />

        <WorkBox onClick={() => window.open('https://ayrton-sosa.vercel.app/', '_blank')}
            pic={ayrtonImg}
            title='Ayrton Portfolio'
            
            text={t("workPage.textAyrton")}
            />
          
            <WorkBox onClick={() => window.open('https://popular-movies-e.netlify.app/', '_blank')}
            pic={WorkImg}
            title='Popular Movies'
            
            text={t("workPage.textMovies")}
            />
             <WorkBox onClick={() => window.open('https://weather-app-pe.netlify.app/', '_blank')}
            pic={weatherImg}
            title='Weather App'
      
            
            text={t("workPage.textWeather")}
            />
              <WorkBox onClick={() => window.open('https://crud-redux-toolkit.netlify.app/', '_blank')}
            pic={crudImg}
            title='CRUD'
          
            text={t("workPage.textcrud")}
            />
            <WorkBox onClick={() => window.open('https://to-do-list-pe.netlify.app/', '_blank')}
            pic={toDoList}
            title='To Do List'
         
            text={t("workPage.textToDo")}
            />
            
          
        </motion.div>
        
        </div>
        <Footer/>
        </motion.div>
    
  )
}

export default Work