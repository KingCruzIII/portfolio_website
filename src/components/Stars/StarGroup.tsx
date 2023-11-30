import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Star from "./Star"

type Star = {
  opacity: number,
  offset: number,
  size: number,
  speed: number,
  spacing: number,
}


type StarGroupProps = {
  stars: Star[]
}


const StarGroup = ({stars}: StarGroupProps) => {
  return (
      <>
        {
        stars.map((star) => {
          return <Star {...star}/>
        })
      }
      </>
  )
}

export default StarGroup;
