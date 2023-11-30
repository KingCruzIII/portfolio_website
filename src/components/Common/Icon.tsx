import * as R from 'ramda'
import { IconName, IconPrefix, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export type IconType = {
  autoSize?: Boolean,
  size?: "xxl" | "xl" | "lg" | "m" | "s" | number,
  style?: object,
  icon: IconName,
  prefix?: IconPrefix,
  className?: string,
}


const Icon = (props:IconType) => {
  const getSize = () => {
    let autoSize = props.autoSize;
    let dimensions;
    switch (props.size) {
      case "xxl":
        dimensions = autoSize ? "50%" : "256px";
        break;
      case "xl":
        dimensions = autoSize ? "40%" : "128px";
        break;
      case "lg":
        dimensions = autoSize ? "30%" : "64px";
        break;
      case "m":
        dimensions = autoSize ? "20%" : "32px";
        break;
      case "s":
        dimensions = autoSize ? "10%" : "16px";
        break;
      default:
        dimensions = props.size;
        break;
    }
    return dimensions;
  };

  let ops = R.omit(["size", "autoSize"], props);
  let iconSize = getSize();



  const iconStyle = R.mergeRight(ops.style || {}, {
    width: iconSize,
    height: iconSize
  });
  return <FontAwesomeIcon style={iconStyle} icon={[props.prefix || "fas", props.icon]} />;
  // return <MuiIcon {...ops} className={"fa " + prefix + "-" + props.icon} />;
};

export default Icon;
