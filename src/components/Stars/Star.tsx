import { ParallaxLayer } from "@react-spring/parallax";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Icon from "../Common/Icons/Icon";
import { styled } from "@mui/material/styles";

export type StarType = {
  opacity: number;
  offset: number;
  size: number;
  speed: number;
  spacing: number;
};

const StyledIcon = styled(Icon)();

const Star = ({ opacity, offset, size, speed, spacing }: StarType) => {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <div style={{ display: "flex", zIndex: "0" }}>
        <StyledIcon
          icon="circle"
          autoSize
          size={size}
          sx={{
            marginLeft: `${spacing}%`,
            opacity: `${opacity}%`,
            zIndex: "0",
          }}
        />
      </div>
    </ParallaxLayer>
  );
};

export default Star;
