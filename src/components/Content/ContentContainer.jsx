import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Icon from "../Common/Icon";
import About from "./About";
// import Intro from "./Intro";

const StyledPaper = styled(Paper)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    zIndex: "100",
    margin: "auto",
    height: "100vh",
    width: "100vw",
    maxHeight: "791px",
    maxWidth: "1280px",
    padding: "2rem",
    // background: "linear-gradient(to top, transparent, black)",
    // backgroundColor: `radial-gradient(${theme.palette.background.paper}, transparent)`,
  })
);

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  flexGrow: "1",
}));

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
}));

const Links = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexShrink: "1",
  })
);

const IconWrapper = styled(Icon)(({ theme }) => ({
  // margin: "1rem",
  // float: "right",
}));

const Nav = styled("nav")(({ theme }) => ({
  flexGrow: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
}));

const ContentContainer = () => {
  return (
    <StyledWrapper>
      <StyledPaper>
        <Content elevation={2}>
          {/* <div>
            <IconWrapper icon="github" prefix="fab" size="lg" />
            <IconWrapper icon="linkedin" prefix="fab" size="lg" />
            <IconWrapper icon="git-alt" prefix="fab" size="lg" />
          </div> */}
          {/* <Intro /> */}
          <About />
        </Content>
        <Links>
          <Nav>
            <IconWrapper icon="home" prefix="fas" size="lg" />
            <IconWrapper icon="address-card" prefix="fas" size="lg" />
            <IconWrapper icon="envelope" prefix="fas" size="lg" />
          </Nav>
        </Links>
      </StyledPaper>
    </StyledWrapper>
  );
};

export default ContentContainer;
