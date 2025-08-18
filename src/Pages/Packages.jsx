import { FaHome, FaArrowRight, FaRupeeSign, FaStar } from 'react-icons/fa'; 
import low_cost_1 from '../assets/low-budget_Cottages_1.webp';
import Low_cost_2 from '../assets/Low_Cost_Cottages_2.jpg'; 
import Modrate_cost_2 from '../assets/Modrate_Cost.jpeg';
import Premium_Cost_1 from '../assets/Premium_Cost_1.jpg';
import Premium_Cost_2 from '../assets/Premium-Cost_2.webp';

const Cottages = () => {
    const cottageTypes = [
        {
            tier: "LOW BUDGET",
            color: "green",
            cottages: [
                {
                    name: "Basic Non-AC Cottage",
                    image:[low_cost_1],
                    prices: {
                        triple: 1500,
                        double: 2000,
                        single: 3000
                    },
                    features: ["Basic furnishings", "Shared bathroom", "Fan cooling"]
                },
                {
                    name: "Standard Non-AC Cottage",
                    image: [Low_cost_2],
                    prices: {
                        triple: 1800,
                        double: 2500,
                        single: 3500
                    },
                    features: ["Comfortable beds", "Private bathroom", "Fan cooling"]
                }
            ]
        },
        {
            tier: "MODERATE PRICE",
            color: "yellow",
            cottages: [
                {
                    name: "Standard AC Cottage",
                    image: [Modrate_cost_2],
                    prices: {
                        triple: 2500,
                        double: 3000,
                        single: 4000
                    },
                    features: ["AC cooling", "Attached bathroom", "TV", "Mini fridge"]
                }
            ]
        },
        {
            tier: "PREMIUM",
            color: "red",
            cottages: [
                {
                    name: "Deluxe AC Cottage",
                    image: [Premium_Cost_1],
                    prices: {
                        triple: 3500,
                        double: 4500,
                        single: 6000
                    },
                    features: ["Luxury bedding", "AC & heating", "Private balcony", "Minibar", "Daily housekeeping"]
                },
                {
                    name: "River View Premium Cottage",
                    image: [Premium_Cost_2],
                    prices: {
                        triple: 4000,
                        double: 5000,
                        single: 7000
                    },
                    features: ["Panoramic river views", "King size bed", "Jacuzzi", "24/7 room service"]
                }
            ]
        }
    ];

    const colorMap = {
        green: {
            bg: "bg-green-600",
            hover: "bg-green-700",
            text: "text-green-600",
            light: "bg-green-50"
        },
        yellow: {
            bg: "bg-yellow-600",
            hover: "bg-yellow-700",
            text: "text-yellow-600",
            light: "bg-yellow-50"
        },
        red: {
            bg: "bg-red-600",
            hover: "bg-red-700",
            text: "text-red-600",
            light: "bg-red-50"
        }
    };

    return (
        <div className="bg-[#f7f7f6] min-h-screen py-12">
            <section className="max-w-6xl mx-auto px-4 space-y-12">     
                {cottageTypes.map((type, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className={`p-4 ${colorMap[type.color].bg} text-white`}>
                            <h1 className="text-2xl md:text-3xl font-bold text-center">
                                <FaHome className="inline mr-2" />
                                {type.tier} COTTAGES
                            </h1>
                        </div>

                        <div className="p-4 md:p-6 space-y-8">
                            {type.cottages.map((cottage, cottageIndex) => (
                                <div key={cottageIndex} className="md:flex gap-6 border-b pb-8 last:border-0 last:pb-0">
                                    {/* Cottage Image */}
                                    <div className="md:w-1/3 mb-4 md:mb-0">
                                        <img
                                            src={cottage.image}
                                            alt={cottage.name}
                                            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                                        />
                                    </div>

                                    {/* Cottage Details */}
                                    <div className="md:w-2/3">
                                        <h2 className={`text-xl font-bold ${colorMap[type.color].text} mb-2`}>
                                            {cottage.name}
                                        </h2>

                                        {/* Features */}
                                        <div className="mb-4">
                                            <h3 className="font-medium mb-1">Features:</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                                                {cottage.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center">
                                                        <FaStar className={`mr-2 text-xs ${colorMap[type.color].text}`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Pricing Table */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className={`${colorMap[type.color].bg} text-white`}>
                                                        <th className="py-2 px-3 text-left border">Sharing Type</th>
                                                        <th className="py-2 px-3 border">Price Per Night</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className={`border-b hover:${colorMap[type.color].light}`}>
                                                        <td className="py-2 px-3 border font-medium">Triple Sharing</td>
                                                        <td className="py-2 px-3 border text-center">
                                                            <span className="flex items-center justify-center">
                                                                <FaRupeeSign className="mr-1" />
                                                                {cottage.prices.triple}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className={`border-b hover:${colorMap[type.color].light}`}>
                                                        <td className="py-2 px-3 border font-medium">Double Sharing</td>
                                                        <td className="py-2 px-3 border text-center">
                                                            <span className="flex items-center justify-center">
                                                                <FaRupeeSign className="mr-1" />
                                                                {cottage.prices.double}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className={`hover:${colorMap[type.color].light}`}>
                                                        <td className="py-2 px-3 border font-medium">Single Occupancy</td>
                                                        <td className="py-2 px-3 border text-center">
                                                            <span className="flex items-center justify-center">
                                                                <FaRupeeSign className="mr-1" />
                                                                {cottage.prices.single}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="text-center pt-4">
                                <button className={`${colorMap[type.color].bg} hover:${colorMap[type.color].hover} text-white font-bold py-2 px-6 rounded-full inline-flex items-center transition duration-300`}>
                                    VIEW {type.tier} OPTIONS
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>


                ))} 

                {/* Additional Packages Section - Optional */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#17804b] mb-4">Adventure Package</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>White water rafting</li>
              <li>Jungle trekking</li>
              <li>Camping under the stars</li>
              <li>Bonfire night</li>
            </ul>
            <p className="text-lg font-semibold text-[#17804b]">₹4500 per person</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#17804b] mb-4">Relaxation Package</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>Yoga sessions</li>
              <li>Ayurvedic spa</li>
              <li>Nature walks</li>
              <li>Meditation by the river</li>
            </ul>
            <p className="text-lg font-semibold text-[#17804b]">₹4000 per person</p>
          </div>
        </div>
            </section>
        </div> 


    );
};

export default Cottages;