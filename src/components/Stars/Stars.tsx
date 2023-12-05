import { useMemo } from "react";
import Star, { StarType } from "./Star";

const getRandomInt = (max: number, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Stars = ({ pages }: { pages: number }) => {
  const pageStarCount = 40; //Number of Stars per page

  // calculate all of the stars
  const starGroups = useMemo(() => {
    const ret: StarType[] = [];

    for (let row = 0; row < pages; row++) {
      for (let column = 0; column < pageStarCount; column++) {
        // Give stars random speeds
        let dotSpeed = getRandomInt(10, 1) / 10;
        dotSpeed = Math.random() < 0.2 ? -0.2 : dotSpeed;
        // Star Vertical Fuzzyness
        // Stars get a whole number from the row number to start off
        // Then add a random number between .00 and 1
        const fuzz = getRandomInt(100) * 0.01;
        const star: StarType = {
          offset: row + fuzz,
          spacing: Math.floor(Math.random() * 100 + 1),
          opacity: getRandomInt(80, 10),
          size: getRandomInt(15, 6),
          speed: dotSpeed,
        };
        ret.push(star);
      }
    }
    return ret;
  }, [pages, pageStarCount]);

  return (
    <>
      {starGroups.map((star) => {
        return <Star {...star} />;
      })}
    </>
  );
};

export default Stars;
