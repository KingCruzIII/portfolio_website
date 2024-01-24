import Stars from "./components/Stars/Stars";
import { Parallax } from "@react-spring/parallax";
import Theme from "./components/Theme/Theme";
import ContentContainer from "./components/Content/ContentContainer";
import { styled } from "@mui/system";

const StyledParalax = styled(Parallax)(() => ({
  top: "0",
  left: "0",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "&-ms-overflow-style:": {
    display: "none",
  },
  scrollbarWidth: "none",
  msOverflowStyle: "none",
}));

const App = () => {
  return (
    <Theme>
      <>
        <StyledParalax className="potato" pages={3}>
          <Stars pages={3} />

          <ContentContainer />
        </StyledParalax>
      </>
    </Theme>
  );
};

export default App;
