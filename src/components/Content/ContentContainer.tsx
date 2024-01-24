import { styled } from "@mui/material/styles";
// import { FaEnvelope } from "react-icons/fa";
import MainCard from "./MainCard";
import Projects from "./Projects";
import { ParallaxLayer } from "@react-spring/parallax";

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  width: "100vw",
  height: "100vh",
}));

const ContentContainer = () => {
  return (
    <StyledWrapper>
      <MainCard />
      <Projects />
    </StyledWrapper>
  );
};

export default ContentContainer;
