import "./App.css";
import RouterApp from "./RouterApp.jsx";
import NavBar from"./components/NavBar/NavBar.jsx"
import { AnimatePresence } from "framer-motion";

export const App = () => {
  return (
    <div className="app">
     <NavBar/>
     <AnimatePresence>
          <RouterApp />
  
     </AnimatePresence>
    </div>
  );
};

export default App;
