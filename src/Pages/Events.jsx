import { FaUmbrellaBeach, FaHiking, FaSwimmingPool, FaCampground, FaTree, FaSpa } from 'react-icons/fa';
import serviceImage from '../assets/services-bg.jpg';
import AdvImg from '../assets/Adventure_image-03.jpg';
import Campning from '../assets/Campning_img.avif'; 
import Lake from '../assets/Lake_img.jpg';
import moutain from '../assets/moutain_img.jpg';
import Skating from '../assets/Ice_Scaking.jpg';
import Cottage from '../assets/AC_Cottage.webp';

const Events = () => {
  return (
    <div className="bg-[#f7f7f6]">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src= {serviceImage}
              alt="Nature Nest Services"
              className="w-full h-full object-cover object-center brightness-90 contrast-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center w-full px-4">
              <div className="inline-block">
                <img 
                  src="https://ext.same-assets.com/726936217/1953479614.svg" 
                  alt="Leaf" 
                  className="h-12 mb-4 opacity-90 mx-auto" 
                />
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  OUR SERVICES
                </h1> 
                <p className='text-white text-5xl font-bold' >& EVENTS </p>
                <div className="w-24 h-1 bg-white mt-6 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#17804b] mb-4">Experience the Best of Nature</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of services to make your stay unforgettable. From adventurous activities to relaxing retreats, we have something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUmbrellaBeach className="text-4xl text-[#17804b] mb-4" />,
              title: "Riverside Camping",
              description: "Comfortable tents with modern amenities right by the Ganges",
              image:Campning 
            },
            {
              icon: <FaHiking className="text-4xl text-[#17804b] mb-4" />,
              title: "Adventure Activities",
              description: "Trekking, rafting, and nature walks with experienced guides",
              image: AdvImg
            },
            {
              icon: <FaSwimmingPool className="text-4xl text-[#17804b] mb-4" />,
              title: "Natural Lake",
              description: "Refreshing pool with mountain views",
              image: Lake
            },
            {
              icon: <FaCampground className="text-4xl text-[#17804b] mb-4" />,
              title: "AC Cottages",
              description: "Modern cottages with all comforts amidst nature",
              image: Cottage
            },
            {
              icon: <FaTree className="text-4xl text-[#17804b] mb-4" />,
              title: "Nature Walks",
              description: "Guided tours through our 12-acre property",
              image: moutain
            },
            {
              icon: <FaSpa className="text-4xl text-[#17804b] mb-4" />,
              title: "Ice Skating",
              description: "Best palce for Ice Skating with family",
              image: Skating
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#17804b] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#17804b] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The riverside camping experience was magical. Waking up to the sound of the Ganges was unforgettable.",
                author: "Rahul Sharma, Delhi"
              },
              {
                quote: "The adventure activities were well-organized and our guide was extremely knowledgeable about the area.",
                author: "Priya Patel, Mumbai"
              },
              {
                quote: "Perfect blend of nature and comfort. The AC cottages were spotless with beautiful views.",
                author: "Anil Kumar, Bangalore"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#17804b] mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8">Book your stay today and enjoy the best of nature with modern comforts</p>
          <a 
            href="/contact" 
            className="inline-block bg-[#17804b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#126a3d] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section> 
    </div>
  );
};

export default Events; 
