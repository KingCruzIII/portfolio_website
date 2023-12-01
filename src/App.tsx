import Stars from "./components/Stars/Stars";
import { Parallax } from "@react-spring/parallax";
import Theme from "./components/Theme/Theme";
import Intro from "./components/Content/Intro";

const App = () => {
  return (
    <Theme>
      <>
        <Intro />

        <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <Stars pages={3} />
        </Parallax>
      </>
    </Theme>
  );
};

export default App;
