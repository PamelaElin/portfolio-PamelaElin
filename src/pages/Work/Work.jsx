import WorkImg from '../../assets/workImg.jpeg';
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
          
            <WorkBox
            pic={WorkImg}
            title='Popular Movies'
            demo='https://popular-movies-e.netlify.app/'
            code='https://github.com/PamelaElin/popular-movies'
            text={t("workPage.textMovies")}
            />
             <WorkBox
            pic={weatherImg}
            title='Weather App'
            demo='https://weather-app-pe.netlify.app/'
            code='https://github.com/PamelaElin/weather-app'
            text={t("workPage.textWeather")}
            />
              <WorkBox
            pic={crudImg}
            title='CRUD'
            demo='https://crud-redux-toolkit.netlify.app/'
            code='https://github.com/PamelaElin/CRUD-redux'
            text={t("workPage.textcrud")}
            />
            <WorkBox
            pic={toDoList}
            title='To Do List'
            demo='https://to-do-list-pe.netlify.app/'
            code='https://github.com/PamelaElin/todo-list'
            text={t("workPage.textToDo")}
            />
            
          
        </motion.div>
        
        </div>
        <Footer/>
        </motion.div>
    
  )
}

export default Work