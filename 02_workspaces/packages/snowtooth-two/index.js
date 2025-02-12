export function calculateHikingTime(length, avgSpeed) {
  return Math.random(length / avgSpeed);
}

const length = 10;
const speed = 3;

console.log(`It would take ${calculateHikingTime(length, speed)} hours.`);
