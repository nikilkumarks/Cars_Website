import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const carData = [
  {
    id: 1,
    brand: "Audi",
    model: "A8",
    image: "/assets/cars/lux3.jpg",
    price: 5890000,
    fuel: "Petrol",
    mileage: 14,
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 2,
    brand: "BMW",
    model: "X5",
    image: "/assets/cars/lux2.jpg",
    price: 6390000,
    fuel: "Diesel",
    mileage: 17,
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 3,
    brand: "Mercedes",
    model: "S-Class",
    image: "/assets/cars/lux4.jpg",
    price: 7540000,
    fuel: "Diesel",
    mileage: 16,
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 4,
    brand: "Jaguar",
    model: "XF",
    image: "/assets/cars/lux16.avif",
    price: 7100000,
    fuel: "Petrol",
    mileage: 13,
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 5,
    brand: "Volvo",
    model: "S90",
    image: "/assets/cars/lux17.avif",
    price: 6690000,
    fuel: "Hybrid",
    mileage: 18,
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 6,
    brand: "Porsche",
    model: "911",
    image: "/assets/cars/lux7.jpg", // 📌 Make sure this image exists
    price: 9900000,
    fuel: "Petrol",
    mileage: 10,
    transmission: "Automatic",
    seats: 4,
  },
  {
    id: 7,
    brand: "Rolls-Royce",
    model: "Phantom",
    image: "/assets/cars/lux8.jpg", // 📌 Ensure this path is valid
    price: 12000000,
    fuel: "Petrol",
    mileage: 8,
    transmission: "Automatic",
    seats: 4,
  },
  {
    id: 8,
    brand: "Bentley",
    model: "Continental GT",
    image: "/assets/cars/lux9.jpg", // 📌 Add this image to your assets
    price: 11000000,
    fuel: "Petrol",
    mileage: 9,
    transmission: "Automatic",
    seats: 4,
  },
];


const ComparePage = () => {
  const [selected, setSelected] = useState([]);

  const toggleCompare = (car) => {
    const exists = selected.find((c) => c.id === car.id);
    if (exists) {
      setSelected(selected.filter((c) => c.id !== car.id));
    } else if (selected.length < 3) {
      setSelected([...selected, car]);
    }
  };

  const bestValuePrice =
    selected.length > 0 ? Math.min(...selected.map((c) => c.price)) : null;

  return (
    <div className="min-h-screen bg-[#111] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Compare Luxury Cars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carData.map((car) => {
          const isSelected = selected.find((c) => c.id === car.id);
          return (
            <motion.div
              key={car.id}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl border ${
                isSelected ? "border-green-500" : "border-gray-700"
              } bg-[#1c1c1c] p-4 transition`}
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">
                {car.brand} {car.model}
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                {car.fuel} · {car.transmission}
              </p>
              <p className="mb-1">Mileage: {car.mileage} km/l</p>
              <p>Seats: {car.seats}</p>
              <p
                className={`mt-2 text-lg font-semibold ${
                  car.price === bestValuePrice ? "text-green-400" : ""
                }`}
              >
                ₹{car.price.toLocaleString()}
              </p>
              <button
                onClick={() => toggleCompare(car)}
                className={`mt-4 w-full py-2 rounded-md text-sm font-semibold ${
                  isSelected
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } transition`}
              >
                {isSelected ? (
                  <>
                    <XCircle className="inline w-4 h-4 mr-1" />
                    Remove
                  </>
                ) : (
                  <>
                    <CheckCircle className="inline w-4 h-4 mr-1" />
                    Add to Compare
                  </>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      {selected.length >= 2 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
          <div className="overflow-x-auto border border-gray-700 rounded-lg">
            <table className="min-w-full table-auto text-sm bg-[#1e1e1e]">
              <thead className="bg-[#2a2a2a] sticky top-0 z-10">
                <tr className="text-left text-gray-300 border-b border-gray-600">
                  <th className="p-3 w-36">Property</th>
                  {selected.map((car, i) => (
                    <th key={car.id} className="p-3">
                      <span className="font-semibold text-white">Car {i + 1}</span>
                      <div className="text-sm text-gray-400">
                        {car.brand} {car.model}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price", (c) => `₹${c.price.toLocaleString()}`],
                  ["Fuel", (c) => c.fuel],
                  ["Mileage", (c) => `${c.mileage} km/l`],
                  ["Transmission", (c) => c.transmission],
                  ["Seats", (c) => c.seats],
                ].map(([label, getValue], idx) => (
                  <tr
                    key={label}
                    className={`${
                      idx % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#131313]"
                    } border-t border-gray-700`}
                  >
                    <td className="p-3 font-medium text-gray-300">{label}</td>
                    {selected.map((car) => (
                      <td
                        key={car.id + label}
                        className={`p-3 ${
                          label === "Price" && car.price === bestValuePrice
                            ? "text-green-400 font-bold"
                            : ""
                        }`}
                      >
                        {getValue(car)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selected.length < 2 && (
        <p className="text-gray-400 text-sm mt-6">
          Select at least <span className="text-white font-medium">2 cars</span> to compare. (Max 3)
        </p>
      )}
    </div>
  );
};

export default ComparePage;
