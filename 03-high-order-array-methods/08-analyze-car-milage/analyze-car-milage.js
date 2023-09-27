const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000 },
  { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];

/**
 * Analyzes car mileage data using high order array methods.
 * @param {Array} cars - An array of car objects.
 * @returns {Object} - An object containing calculated values.
 */
function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((prev, next) => prev + next.mileage, 0);
  const averageMileage = totalMileage / cars.length;
  const carExtremes = { highestMileageCar: { mileage: 0 }, lowestMileageCar: { mileage: 0 } };
  cars.forEach((car) => {
    if (car.mileage > carExtremes.highestMileageCar.mileage) {
      carExtremes.highestMileageCar = car;
    } else if (car.mileage < carExtremes.highestMileageCar.mileage) {
      carExtremes.lowestMileageCar = car;
    }
  });

  return {
    averageMileage,
    highestMileageCar: carExtremes.highestMileageCar,
    lowestMileageCar: carExtremes.lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
