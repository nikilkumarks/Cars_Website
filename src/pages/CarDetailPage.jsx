import React from "react";
import { useParams } from "react-router-dom";
import { Fuel, GaugeCircle, Settings2, Users2, IndianRupee } from "lucide-react";

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
  }),
];

const CarDetailPage = () => {
  const { id } = useParams();
  const car = dummyCars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">🚫 Car Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center px-6 py-12">
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        className="w-full max-w-3xl rounded-2xl shadow-xl mb-8"
      />
      
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
        {car.brand} {car.model}
      </h1>

      <div className="w-full max-w-3xl p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6 text-base md:text-lg">
        <div className="flex items-center gap-3">
          <IndianRupee className="text-green-400" />
          <span><strong>Price:</strong> ₹{car.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-3">
          <Fuel className="text-blue-400" />
          <span><strong>Fuel:</strong> {car.fuel}</span>
        </div>
        <div className="flex items-center gap-3">
          <GaugeCircle className="text-yellow-400" />
          <span><strong>Mileage:</strong> {car.mileage} km/l</span>
        </div>
        <div className="flex items-center gap-3">
          <Settings2 className="text-purple-400" />
          <span><strong>Transmission:</strong> {car.transmission}</span>
        </div>
        <div className="flex items-center gap-3">
          <Users2 className="text-pink-400" />
          <span><strong>Seats:</strong> {car.seats}</span>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
