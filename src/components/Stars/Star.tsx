import { ParallaxLayer } from "@react-spring/parallax";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Icon from "../Common/Icon";

export type StarType = {
  opacity: number;
  offset: number;
  size: number;
  speed: number;
  spacing: number;
};

const Star = ({ opacity, offset, size, speed, spacing }: StarType) => {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <div style={{ display: "flex" }}>
        <Icon
          icon="circle"
          autoSize
          size={size}
          style={{
            marginLeft: `${spacing}%`,
            opacity: `${opacity}%`,
          }}
        />
      </div>
    </ParallaxLayer>
  );
};

export default Star;
