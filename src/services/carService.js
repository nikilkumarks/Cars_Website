/**
 * TorqueZone Luxury API Service (Curated Version)
 * Provides high-accuracy details and premium high-resolution imagery.
 */

const LUXURY_DATABASE = [
    {
        id: "lambo-hrev",
        brand: "Lamborghini",
        model: "Huracán STO",
        price: 48900000,
        fuel: "Petrol",
        mileage: 6.5,
        transmission: "7-Speed DCT",
        seats: 2,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1400",
        engine: "5.2L V10",
        power: "640 HP",
        topSpeed: "310 km/h",
        acceleration: "3.0s 0-100",
        desc: "A track-focused beast with unparalleled aerodynamic efficiency."
    },
    {
        id: "ferrari-sf90",
        brand: "Ferrari",
        model: "SF90 Stradale",
        price: 75000000,
        fuel: "Hybrid",
        mileage: 12.0,
        transmission: "8-Speed DCT",
        seats: 2,
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1400",
        engine: "4.0L V8 + 3 Motors",
        power: "986 HP",
        topSpeed: "340 km/h",
        acceleration: "2.5s 0-100",
        desc: "The most powerful Ferrari road car ever made, combining V8 roar with electric soul."
    },
    {
        id: "porsche-911ts",
        brand: "Porsche",
        model: "911 Turbo S",
        price: 31000000,
        fuel: "Petrol",
        mileage: 9.0,
        transmission: "8-Speed PDK",
        seats: 4,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400",
        engine: "3.7L Flat-6 Twin-Turbo",
        power: "641 HP",
        topSpeed: "330 km/h",
        acceleration: "2.7s 0-100",
        desc: "The benchmark for everyday usable supercars with explosive performance."
    },
    {
        id: "rolls-royce-phant",
        brand: "Rolls-Royce",
        model: "Phantom VIII",
        price: 110000000,
        fuel: "Petrol",
        mileage: 6.0,
        transmission: "8-Speed Automatic",
        seats: 5,
        image: "https://images.unsplash.com/photo-1631215539199-6021d70b018b?q=80&w=1400",
        engine: "6.75L V12 Twin-Turbo",
        power: "563 HP",
        topSpeed: "250 km/h (Ltd)",
        acceleration: "5.3s 0-100",
        desc: "The pinnacle of luxury. Silence is gold, and the Phantom is a vault."
    },
    {
        id: "tesla-mods-p",
        brand: "Tesla",
        model: "Model S Plaid",
        price: 12500000,
        fuel: "Electric",
        mileage: 637, // Range
        transmission: "Single Speed",
        seats: 5,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1400",
        engine: "Tri-Motor AWD",
        power: "1020 HP",
        topSpeed: "322 km/h",
        acceleration: "2.1s 0-100",
        desc: "Fastest accelerating car in production today. Silent but deadly."
    },
    {
        id: "aston-valk",
        brand: "Aston Martin",
        model: "Vantage F1 Ed",
        price: 18500000,
        fuel: "Petrol",
        mileage: 8.5,
        transmission: "8-Speed Automatic",
        seats: 2,
        image: "https://images.unsplash.com/photo-1603584173870-7f1efd9e48a1?q=80&w=1400",
        engine: "4.0L V8 Biturbo",
        power: "527 HP",
        topSpeed: "314 km/h",
        acceleration: "3.6s 0-100",
        desc: "Born and bred on the track, the official F1 safety car reborn for the road."
    },
    {
        id: "bentley-cont-gt",
        brand: "Bentley",
        model: "Continental GT Speed",
        price: 49000000,
        fuel: "Petrol",
        mileage: 7.5,
        transmission: "8-Speed Dual-Clutch",
        seats: 4,
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1400",
        engine: "6.0L W12 TSI",
        power: "650 HP",
        topSpeed: "335 km/h",
        acceleration: "3.6s 0-100",
        desc: "A breathtaking combination of power, craftsmanship, and serenity."
    },
    {
        id: "audi-rs6-av",
        brand: "Audi",
        model: "RS6 Avant Performance",
        price: 24500000,
        fuel: "Petrol",
        mileage: 8.0,
        transmission: "8-Speed Tiptronic",
        seats: 5,
        image: "https://images.unsplash.com/photo-1606152424101-ad4e9ca4599d?q=80&w=1400",
        engine: "4.0L V8 TFSI",
        power: "621 HP",
        topSpeed: "305 km/h",
        acceleration: "3.4s 0-100",
        desc: "The ultimate wolf in sheep's clothing. Speed for the whole family."
    }
];

export const carService = {
    // Simulate fetch with a slight delay for realism
    getMakes: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const makes = ["All", ...new Set(LUXURY_DATABASE.map(c => c.brand))];
                resolve(makes);
            }, 300);
        });
    },

    getModels: async (make = "All") => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (make === "All") {
                    resolve(LUXURY_DATABASE);
                } else {
                    const filtered = LUXURY_DATABASE.filter(c => c.brand.toLowerCase() === make.toLowerCase());
                    resolve(filtered);
                }
            }, 500);
        });
    },

    getCarById: async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const car = LUXURY_DATABASE.find(c => c.id === id);
                resolve(car || null);
            }, 400);
        });
    },

    // Search feature simulating API behavior
    searchCars: async (query, fuel = "All") => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let results = LUXURY_DATABASE;
                if (query) {
                    results = results.filter(c =>
                        c.brand.toLowerCase().includes(query.toLowerCase()) ||
                        c.model.toLowerCase().includes(query.toLowerCase())
                    );
                }
                if (fuel !== "All") {
                    results = results.filter(c => c.fuel === fuel);
                }
                resolve(results);
            }, 400);
        });
    }
};
