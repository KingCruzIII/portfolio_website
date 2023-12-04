import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { styled } from "@mui/material/styles";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import RubyLogo from "./RubyLogo";
import AnsibleLogo from "./AnsibleLogo";
import KubeLogo from "./KubeLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeScriptLogo from "./TypeScriptLogo";
import GoogleCloudLogo from "./GoogleCloudLogo";
import Potato from "../../../assets/google-cloud-svgrepo-com.svg";

library.add(fas, fab);

export type IconType = {
  autoSize?: Boolean;
  size?: "xxl" | "xl" | "lg" | "m" | "s" | number;
  style?: object;
  icon: IconName | "ansible" | "googlecloud" | "kube" | "ruby" | "typescript";
  prefix?: IconPrefix | "mui";
  className?: string;
  alt?: string;
  children?: any;
};

const SVGWrapper = (props: IconType) => {
  return (
    <svg className={props.className} viewBox="0 0 24 24">
      {props.children}
    </svg>
  );
};

const getSize = ({ size, autoSize }: IconType) => {
  switch (size) {
    case "xxl":
      return autoSize ? "50%" : "256px";
    case "xl":
      return autoSize ? "40%" : "128px";
    case "lg":
      return autoSize ? "30%" : "64px";
    case "m":
      return autoSize ? "20%" : "32px";
    case "s":
      return autoSize ? "10%" : "16px";
    default:
      return size || "";
  }
};

const StyledImg = styled(SVGWrapper)<IconType>(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
  fill: theme.palette.text.primary,
  height: getSize(props),
  width: getSize(props),
}));

const StyledImg2 = styled("img")<IconType>(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
  fill: theme.palette.text.primary,
  height: getSize(props),
  width: getSize(props),
}));

const StyledImg3 = styled(RubyLogo)<IconType>(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
  fill: theme.palette.text.primary,
  height: getSize(props),
  width: getSize(props),
  viewBox: "0 0 24 24",
}));
const StyledFA = styled(FontAwesomeIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  fill: theme.palette.text.primary,
}));

const Icon = (props: IconType) => {
  const pickIcon = () => {
    switch (props.icon) {
      case "ansible":
        return (
          <StyledImg {...props}>
            <AnsibleLogo />
          </StyledImg>
        );
      case "googlecloud":
        // return <GoogleCloudLogo {...props} />;
        return <StyledImg2 src={Potato} {...props} />;
      case "kube":
        // return <KubeLogo {...props} />;
        return (
          <StyledImg {...props}>
            <KubeLogo />
          </StyledImg>
        );
      case "ruby":
        // return <RubyLogo {...props} />;
        return (
          <StyledImg {...props}>
            <RubyLogo />
          </StyledImg>
        );
      case "typescript":
        // return <TypeScriptLogo {...props} />;
        return (
          <StyledImg {...props}>
            <TypeScriptLogo />
          </StyledImg>
        );
        break;
      default:
        return props.prefix === "mui" ? (
          ""
        ) : (
          <StyledFA
            className={props.className}
            sx={{ height: getSize(props), width: getSize(props) }}
            icon={[props.prefix || "fas", props.icon]}
          />
        );
    }
  };

  return <>{pickIcon()}</>;
  // return <MuiIcon {...ops} className={"fa " + prefix + "-" + props.icon} />;
};

export default Icon;
