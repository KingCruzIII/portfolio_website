import StarGroup from "./StarGroup"
import {useMemo} from "react"

const getRandomInt = (max:number, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  
};

type Star = {
  opacity: number,
  offset: number,
  size: number,
  speed: number,
  spacing: number,
}


const Stars = ({pages}:{pages:number}) => {
  const pageStarCount = 40; //Number of Stars per page

  // calculate all of the stars
  const starGroups = useMemo(() => {
    let ret: Star[][] = []
    
    for (let row = 0; row < pages; row++) {
      let rowStars: Star[] = []
      for (let column = 0; column < pageStarCount; column++) {
        let dotSpeed = getRandomInt(10, 1) / 10;
        dotSpeed = Math.random() < 0.2 ? -0.2 : dotSpeed;
        // const fuzz = getRandomInt(100) * .1

        const fuzz = getRandomInt(100) * 0.01
        let star:Star = {
          offset: row + fuzz,
          spacing: Math.floor(Math.random() * 100 + 1),
          opacity: getRandomInt(100),
          size: getRandomInt(15, 6),
          speed: dotSpeed,
        }
        rowStars.push(star)        
      }
      ret.push(rowStars)
    }
    return ret;
  }, [pages, pageStarCount])

  return (
      <>
      {
        starGroups.map((stars) => {
          return <StarGroup stars={stars}/>
        })
      }
      </>
  )
}

export default Stars;
