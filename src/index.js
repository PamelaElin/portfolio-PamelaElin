import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import bgVideo from "../src/assets/videoBg7.mp4";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import language_es from './translations/es/language.json';
import language_en from './translations/en/language.json';
i18next.init({interpolation:{escapeValue:false},
  lng:'es',
  resources:{
    es:{language:language_es},
    en:{language:language_en}
  }
});
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
   {/* <video autoPlay loop muted>
					<source src={bgVideo} type='video/mp4' />
				</video> */}
  <I18nextProvider i18n={i18next}> 
  <App/>
  </I18nextProvider>
  </BrowserRouter>
);

