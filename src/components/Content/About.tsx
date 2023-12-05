import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import {
  SiJavascript,
  SiReact,
  SiJenkins,
  SiDocker,
  SiGit,
  SiYarn,
  SiLinux,
  SiAnsible,
  SiGooglecloud,
  SiKubernetes,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

import { FaDownload } from "react-icons/fa";

const StyledAvatar = styled(Avatar)(() => ({
  width: 200,
  height: 200,
  marginBottom: "1rem",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: "1",
}));

const Picture = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "40%",
}));

const Info = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: "1",
}));

const IconWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  fill: theme.palette.primary.main,
  height: "56px",
  width: "56px",
  margin: "1rem",
}));

const SKillsWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  maxWidth: "100%",
  flexGrow: "1",
  flexWrap: "wrap",
  justifyContent: "center",
}));

const IconButton = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  fill: theme.palette.primary.main,
  height: "56px",
  width: "56px",
  margin: "1rem",
}));

const StyledDownloadIcon = styled(FaDownload)(({ theme }) => ({
  marginLeft: ".25rem",
}));

const About = () => {
  return (
    <Wrapper>
      <Picture>
        <StyledAvatar src="https://avatars.githubusercontent.com/kingcruziii" />
        <Button variant="contained">
          {"Resume"} <StyledDownloadIcon />
        </Button>
        <div>
          <IconButton as={SiLinkedin} />
          <IconButton as={SiGithub} />
        </div>
      </Picture>
      <Info>
        <SKillsWrapper>
          <IconWrapper as={SiJavascript} />
          <IconWrapper as={SiReact} />
          <IconWrapper as={SiGit} />
          <IconWrapper as={SiLinux} />
          <IconWrapper as={SiDocker} />
          <IconWrapper as={SiYarn} />
          <IconWrapper as={SiKubernetes} />
          <IconWrapper as={SiAnsible} />
          <IconWrapper as={SiJenkins} />
          <IconWrapper as={SiGooglecloud} />
        </SKillsWrapper>
      </Info>
    </Wrapper>
  );
};

export default About;
