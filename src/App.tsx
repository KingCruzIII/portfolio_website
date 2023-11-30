import './App.css';
import Stars from "./components/Stars/Stars"
import { Parallax } from '@react-spring/parallax';

const App = () => {
  return (
    <div className="App" style={{height: "100vh", width:"100vw"}}>
      <Parallax pages={3} style={{ top: "0", left: "0"}}>  
        <Stars pages={3}/>
      </Parallax>
    </div>
  );
}

export default App;
