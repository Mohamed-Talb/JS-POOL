const OrbitalPeriod = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

function dogYears(planet, ageInSeconds) 
{
  const secondsInEarthYear = 31557600;
  const earthYears = ageInSeconds / secondsInEarthYear;
  const planetYears = earthYears / OrbitalPeriod[planet];
  const dogAge = planetYears * 7;
  return dogAge.toFixed(2);
}
console.log(dogYears("earth", 1000000000));
