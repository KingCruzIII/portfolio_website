import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { styled } from "@mui/material/styles";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InternalSVG, { InternalSVGIconType } from "./InternalSVG";

library.add(fas, fab);

export type IconType = {
  autoSize?: boolean;
  size?: "xxl" | "xl" | "lg" | "m" | "s" | number;
  style?: object;
  intIcon?: InternalSVGIconType;
  icon?: IconName;
  prefix?: IconPrefix;
  className?: string;
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

const StyledInternalSVG = styled(InternalSVG)<IconType>(
  ({ theme, ...props }) => ({
    color: theme.palette.text.primary,
    fill: theme.palette.text.primary,
    height: getSize(props),
    width: getSize(props),
  })
);

const StyledFA = styled(FontAwesomeIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  fill: theme.palette.text.primary,
}));

const Icon = (props: IconType) => {
  if (props.intIcon) return <StyledInternalSVG {...props} />;
  if (props.icon)
    return (
      <StyledFA
        className={props.className}
        sx={{ height: getSize(props), width: getSize(props) }}
        icon={[props.prefix || "fas", props.icon]}
      />
    );

  // return <MuiIcon {...ops} className={"fa " + prefix + "-" + props.icon} />;
};

export default Icon;
