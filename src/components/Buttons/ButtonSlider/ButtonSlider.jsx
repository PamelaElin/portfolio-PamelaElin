import { useTranslation } from "react-i18next";
import { useState } from "react";

const ButtonSlider = () => {
  const {i18n}=useTranslation();
  const [lang,setLang]=useState(false);

  const handleChange=()=>setLang(!lang)
  const changeLanguage=()=>{lang?i18n.changeLanguage("es"):i18n.changeLanguage("en")}
  return (
    <div  className="w-full flex justify-end mt-12 "onChange={handleChange} onClick={changeLanguage}> 
    <label className="switch">
    <input type="checkbox"/>
    <span className="slider"></span>
  </label></div>

  )
}

export default ButtonSlider