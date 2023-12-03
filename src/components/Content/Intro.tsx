import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Icon from "../Common/Icon";

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: "1",
}));

const Intro = () => {
  return (
    <Content>
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
    </Content>
  );
};

export default Intro;
