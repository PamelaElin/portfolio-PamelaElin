import "./App.css";
import RouterApp from "./RouterApp.jsx";
import bgVideo from "../src/assets/videoBg7.mp4";

export const App = () => {
  return (
    <div className="app">
       <video autoPlay loop muted>
					<source src={bgVideo} type='video/mp4' />
				</video>
      <RouterApp />
    </div>
  );
};

export default App;
