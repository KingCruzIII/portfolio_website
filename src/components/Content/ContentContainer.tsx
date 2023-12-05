import { Avatar, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const StyledPaper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  zIndex: "100",
  margin: "auto",
  padding: "2rem",
}));

const Content = styled("div")(() => ({
  display: "flex",
  flexGrow: "1",
}));

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
}));

const Links = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexShrink: "1",
}));

const Nav = styled("nav")(() => ({
  flexGrow: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
}));

const IconButton = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  fill: theme.palette.primary.main,
  height: "56px",
  width: "56px",
  margin: "1rem",
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 200,
  height: 200,
  marginBottom: "1rem",
}));

const StyledDownloadIcon = styled(FaDownload)(() => ({
  marginLeft: ".25rem",
}));

const AvatarWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const Intro = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: "1",
}));

const IconLink = styled("a")(() => ({}));

const ContentContainer = () => {
  return (
    <StyledWrapper>
      <StyledPaper>
        <Content>
          <AvatarWrapper>
            <StyledAvatar src="https://avatars.githubusercontent.com/kingcruziii" />
            <Button variant="contained">
              {"Resume"} <StyledDownloadIcon />
            </Button>
          </AvatarWrapper>
          <Intro>
            <Typography variant="h2">Hi,</Typography>
            <Typography component="span" variant="h2">
              {"I'm "}
              <Typography color="primary.main" component="span" variant="h2">
                Cruz Muniz,
              </Typography>
            </Typography>
            <Typography component="span">
              {"A "}
              <Typography component="span" color="primary.main">
                {"Fullstack Developer "}
                <Typography component="span" color="text.primary">
                  {"who has a passion for "}
                  <Typography component="span" color="primary.main">
                    {"Frontend Development"}
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          </Intro>
        </Content>
        <Links>
          <Nav>
            <IconLink
              target="_blank"
              href="https://www.linkedin.com/in/cruz-muniz-iii"
            >
              <IconButton as={SiLinkedin} />
            </IconLink>
            <IconLink target="_blank" href="https://github.com/KingCruzIII">
              <IconButton as={SiGithub} />
            </IconLink>
            {/* <IconLink
              target="_blank"
              // href="https://www.linkedin.com/in/cruz-muniz-iii"
            >
              <IconButton as={FaEnvelope} />
            </IconLink> */}
          </Nav>
        </Links>
      </StyledPaper>
    </StyledWrapper>
  );
};

export default ContentContainer;
