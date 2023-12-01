import { ParallaxLayer } from "@react-spring/parallax";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  paddingBottom: "1rem",
  zIndex: "100",
  marginTop: "25vh",
  height: "50vh",
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
}));

const ProgramText = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingLeft: theme.typography.body1.fontSize,
}));

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
}));

const TitleBar = styled("div")(({ theme }) =>
  theme.unstable_sx({
    height: "20px",
    backgroundColor: "secondary.main",
  })
);

function Intro() {
  const theme = useTheme();
  return (
    <StyledWrapper>
      <StyledPaper>
        <TitleBar />
        <Content>
          <Typography variant="body1">{"$ greetings.sh"}</Typography>
          <ProgramText>
            <Typography variant="h2">Hi,</Typography>
            <Typography component="span" variant="h2">
              {"I'm "}
              <Typography color="secondary.main" component="span" variant="h2">
                Cruz Muniz,
              </Typography>
            </Typography>
            <Typography component="span">
              {"A "}
              <Typography component="span" color="secondary.main">
                {"Fullstack Developer "}
                <Typography component="span" color="text.primary">
                  {"who has a passion for "}
                  <Typography component="span" color="secondary.main">
                    {"Frontend Development"}
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          </ProgramText>
        </Content>
      </StyledPaper>
    </StyledWrapper>
  );
}

export default Intro;
