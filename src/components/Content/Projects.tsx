import { Divider, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ParallaxLayer } from "@react-spring/parallax";
import { FaExternalLinkAlt, FaGitAlt } from "react-icons/fa";

const Container = styled("div")(() => ({
  display: "flex",
  margin: "auto",
  padding: "2rem",
  zIndex: "100",
  justifyContent: "center",
}));

const ImageWrapper = styled(Paper)(() => ({
  padding: ".75rem",
  marginRight: "1rem",
}));

const DescriptionWrapper = styled(Paper)(() => ({
  padding: ".75rem",
  display: "flex",
  flexDirection: "column",
}));

const TechWrapper = styled("span")(() => ({
  paddingTop: ".5rem",
}));

const IconWrapper = styled("span")(() => ({
  paddingTop: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexGrow: "1",
  alignItems: "center",
}));

const IconButton = styled("div")(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.dark,
    fill: theme.palette.primary.dark,
  },
  color: theme.palette.primary.main,
  fill: theme.palette.primary.main,
  height: "56px",
  width: "56px",
  margin: "1rem",
  zIndex: "100",
}));

const Projects = () => {
  return (
    <>
      <ParallaxLayer offset={1} speed={2}>
        <Container>
          <ImageWrapper>
            <img
              height="202"
              width="323"
              src="https://raw.githubusercontent.com/KingCruzIII/next-project/main/preview.png"
            />
          </ImageWrapper>
          <DescriptionWrapper>
            <Typography paddingBottom=".5rem" variant="h5">
              Seasonal Animation Explorer
            </Typography>
            <Divider />
            <TechWrapper>
              <Typography
                component="span"
                paddingBottom=".5rem"
                paddingRight=".2rem"
                variant="subtitle1"
              >
                Technologies:
              </Typography>
              <Typography
                fontStyle="italic"
                paddingBottom=".5rem"
                variant="caption"
              >
                Nextjs, TypeScript, Graphql, Material UI
              </Typography>
            </TechWrapper>
            <IconWrapper>
              <Link
                target="_blank"
                href="https://next-project-16s3wrvl2-kingcruziiis-projects.vercel.app"
              >
                <IconButton as={FaExternalLinkAlt} />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/KingCruzIII/next-project/tree/main"
              >
                <IconButton as={FaGitAlt} />
              </Link>
            </IconWrapper>
          </DescriptionWrapper>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2}>
        <Container>
          <ImageWrapper>
            <img
              height="202"
              width="323"
              src="https://raw.githubusercontent.com/KingCruzIII/portfolio_website/main/preview.png"
            />
          </ImageWrapper>
          <DescriptionWrapper>
            <Typography paddingBottom=".5rem" variant="h5">
              Portfolio Website
            </Typography>
            <Divider />
            <TechWrapper>
              <Typography
                component="span"
                paddingBottom=".5rem"
                paddingRight=".2rem"
                variant="subtitle1"
              >
                Technologies:
              </Typography>
              <Typography
                fontStyle="italic"
                paddingBottom=".5rem"
                variant="caption"
              >
                React, TypeScript, Material UI
              </Typography>
            </TechWrapper>
            <IconWrapper>
              <Link target="_blank" href="https://cruzmuniziii.com">
                <IconButton as={FaExternalLinkAlt} />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/KingCruzIII/portfolio_website/tree/main"
              >
                <IconButton as={FaGitAlt} />
              </Link>
            </IconWrapper>
          </DescriptionWrapper>
        </Container>
      </ParallaxLayer>
    </>
  );
};
// WxH
// 969 x 606
// 323 x 202

export default Projects;
