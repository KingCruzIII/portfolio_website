import Stars from "./components/Stars/Stars";
import { Parallax } from "@react-spring/parallax";
import Theme from "./components/Theme/Theme";
import ContentContainer from "./components/Content/ContentContainer";

const App = () => {
  return (
    <Theme>
      <>
        <ContentContainer />
        <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <Stars pages={3} />
        </Parallax>
      </>
    </Theme>
  );
};

export default App;
