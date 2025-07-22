import React from "react";
import CarCard from "../components/CarCard"; // Update the path as needed

const dummyCars = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model S",
    price: 7500000,
    fuel: "Electric",
    mileage: 550,
    transmission: "Automatic",
    seats: 5,
    image: "/assets/cars/Tesla.jpg",
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Huracan EVO",
    price: 32000000,
    fuel: "Petrol",
    mileage: 7,
    transmission: "Automatic",
    seats: 2,
    image: "/assets/cars/sports.jpg",
  },
  {
    id: 3,
    brand: "Rolls Royce",
    model: "Ghost",
    price: 68000000,
    fuel: "Petrol",
    mileage: 6,
    transmission: "Automatic",
    seats: 5,
    image: "/assets/cars/Rolls Royce.jpg",
  },
  {
    id: 4,
    brand: "Mercedes-Benz",
    model: "G63 AMG",
    price: 25000000,
    fuel: "Petrol",
    mileage: 8,
    transmission: "Automatic",
    seats: 5,
    image: "/assets/cars/Mercedez.avif",
  },
  ...Array.from({ length: 46 }).map((_, index) => {
    return {
      id: index + 5,
      brand: [
        "Ford", "BMW", "Audi", "Mercedes-Benz", "Lamborghini",
        "Ferrari", "Porsche", "Rolls-Royce", "Bentley", "McLaren",
        "Bugatti", "Koenigsegg", "Aston Martin", "Lucid Motors", "Nissan"
      ][index % 15],
      model: [
        "Mustang", "X5", "A8", "S-Class", "Aventador",
        "812 Superfast", "911", "Phantom", "Continental GT", "720S",
        "Chiron", "Jesko", "DB11", "Air Dream", "GT-R"
      ][index % 15],
      price: 5000000 + index * 1250000,
      fuel: index % 2 === 0 ? "Petrol" : "Electric",
      mileage: 300 + (index % 5) * 20,
      transmission: index % 3 === 0 ? "Manual" : "Automatic",
      seats: 4 + (index % 2),
      image: `/assets/cars/lux${(index % 15) + 1}.jpg`,
    };
  })
];

const CarList = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center animate-fadeInUp">
          🚗 Explore Premium Car Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyCars.map((car) => (
            <div
              key={car.id}
              className="transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarList;
