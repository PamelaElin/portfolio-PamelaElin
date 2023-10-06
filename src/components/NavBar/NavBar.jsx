import React from "react";
import pe from "../../assets/pe.png"
import { useState } from "react";
import { FaBars,  FaTimes} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useStyles from "./useStyles";
import { useTranslation } from "react-i18next";


const NavBar = () => {
  const [nav,setNav]=useState(false);
  const navigate=useNavigate();
  const styles=useStyles();
  const toHome=()=>navigate('/');
  const toAbout=()=>navigate('/about');
  const toSkills=()=>navigate('/skills');
  const toWork=()=>navigate('/work');
  const toContact=()=>navigate('/contact');

  const [t]=useTranslation("language");
const handleClick=()=>setNav(!nav);
  return (
    <div className={styles.container}>
      
        <img src={pe} alt="pes_img" className={styles.peImg} />
      

      {/* menu */}
        <ul  className={styles.menu}>
          <li onClick={toHome} className={styles.menu_text}>{t("navPage.home")}</li>
          <li onClick={toAbout} className={styles.menu_text}>{t("navPage.about")}</li>
          <li onClick={toSkills} className={styles.menu_text}>{t("navPage.skills")}</li>
          <li onClick={toWork} className={styles.menu_text}>{t("navPage.work")}</li>
          <li onClick={toContact} className={styles.menu_text}>{t("navPage.contact")}</li>
        </ul>
    
      {/* hamburger */}
    {!nav?<div className={styles.hamburger} onClick={handleClick}>
        <FaBars />  
      </div>: 
    
      <div onClick={handleClick} className={styles.mobile_menu}>
        
    
      <ul className={styles.mobile_menu_list}>
       <div className={styles.x}><FaTimes /> </div>
       <li  onClick={toHome} className={styles.mobile_menu_text}>{t("navPage.home")}</li>
        <li onClick={toAbout} className={styles.mobile_menu_text}>{t("navPage.about")}</li>
        <li onClick={toSkills} className={styles.mobile_menu_text}>{t("navPage.skills")}</li>
        <li onClick={toWork} className={styles.mobile_menu_text}>{t("navPage.work")}</li>
        <li onClick={toContact} className={styles.mobile_menu_text}>{t("navPage.contact")}</li>
      </ul>
      </div>}
    
    
    
    
    </div>
  );
};

export default NavBar;
