import { calculateHikingTime } from "../snowtooth-two";

calculateHikingTime()

function calculateElevation(feet) {
  const meters = feet * 0.3048;

  return Math.round(meters);
}

const verticalFeet = 1200;

console.log(
  `The restort has an elevation of ${calculateElevation(verticalFeet)} meters.`
);
