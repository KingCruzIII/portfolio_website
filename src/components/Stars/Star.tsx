import { ParallaxLayer } from '@react-spring/parallax'

type StarType = {
  opacity: number,
  offset: number,
  size: number,
  speed: number,
  spacing: number,
}


const Star = ({opacity, offset, size, speed, spacing}: StarType) => {
  return (
      <ParallaxLayer offset={offset} speed={speed}>
        <div style={{display: "flex"}}>
          <p style={{
            marginLeft: `${spacing}%`,
            opacity: opacity,
            zIndex: "1050",
            display: "block",
            transitionProperty: "opacity",
            transitionDuration: "1s",
            transitionDelay: ".5s"
          }}>o</p>
        </div>
      </ParallaxLayer>
  )
}

export default Star;
