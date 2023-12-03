import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Icon from "../Common/Icon";
import Avatar from "@mui/material/Avatar";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: "1",
}));

const Picture = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Info = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: "1",
}));

const IconWrapper = styled(Icon)(({ theme }) => ({
  // margin: "1rem",
  // float: "right",
}));

const About = () => {
  // const date = new Date();
  // const startDate = new Date("9-17-2018");
  return (
    <Wrapper>
      <Picture>
        <StyledAvatar src="https://avatars.githubusercontent.com/kingcruziii" />
        <Typography fontSize="2rem" variant="body1">
          Cruz Muniz III
        </Typography>
      </Picture>
      <Info>
        <Typography fontSize="2rem" variant="body1">
          Skills
        </Typography>
        <div>
          <IconWrapper icon="js" prefix="fab" size="lg" />
          <IconWrapper icon="react" prefix="fab" size="lg" />
          <IconWrapper icon="jenkins" prefix="fab" size="lg" />
          <IconWrapper icon="docker" prefix="fab" size="lg" />
          <IconWrapper icon="git-alt" prefix="fab" size="lg" />
          <IconWrapper icon="yarn" prefix="fab" size="lg" />
          <IconWrapper icon="database" prefix="fas" size="lg" />
          <IconWrapper icon="linux" prefix="fab" size="lg" />
          <Typography fontSize="2rem" variant="body1">
            Ansible, Google Cloud, ruby, Kubernetes, typescript
          </Typography>
        </div>
      </Info>
    </Wrapper>
  );
};

export default About;
