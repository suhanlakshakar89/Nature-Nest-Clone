// import React, { useState, useEffect } from "react";
// import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; 


// function HomePage() {

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [
//     "https://ext.same-assets.com/726936217/832689159.jpeg",
//     "https://nature-nest.com/wp-content/uploads/2023/03/img2-scaled.jpg", 
//     "https://nature-nest.com/wp-content/uploads/2023/03/slide3.jpeg" 
//   ];

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);
//   return (
//     <div className="min-h-screen font-sans text-[#393d3b] bg-[#f7f7f6]">
//       {/* Top bar */}
//       <div className="bg-[#17804b] text-white text-sm">
//         <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

//           {/* LEFT: Contacts with Icons */}
//           <div className="flex gap-6 items-center">
//             <a href="tel:+918860134967" className="hover:opacity-80 flex items-center gap-2">
//               <FaPhoneAlt className="text-xs" /> 88-60134-967
//             </a>
//             <a href="tel:+919211942642" className="hover:opacity-80 flex items-center gap-2">
//               <FaPhoneAlt className="text-xs" /> 92-119426-42
//             </a>
//             <a href="mailto:naturenest81@gmail.com" className="hover:opacity-80 flex items-center gap-2">
//               <FaEnvelope className="text-xs" /> naturenest81@gmail.com
//             </a>
//           </div>

//           {/* CENTER: Social Icons */}
//           <div className="flex gap-4">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400">
//               <FaFacebookF />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-400">
//               <FaTwitter />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400">
//               <FaInstagram />
//             </a>
//           </div>

//           {/* RIGHT: Book Now */}
//           <div>
//             <a href="#booking" className="bg-white text-[#17804b] px-4 py-1 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#17804b] transition">
//               BOOK NOW
//             </a>
//           </div>

//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-white sticky top-0 z-50 shadow-sm">
//         <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

//           {/* LEFT: Logo */}
//           <a href="#" className="flex items-center gap-2">
//             <img
//               src="https://ext.same-assets.com/726936217/397242796.png"
//               alt="Nature Nest"
//               className="h-20 w-auto"  // Increased size from h-10 → h-20
//             />
//           </a>

//           {/* CENTER: Navbar */}
//           <nav className="hidden md:flex items-center gap-8 text-base font-medium">
//             <a className="hover:text-[#785e4f]" href="#home">Home</a>
//             <a className="hover:text-[#785e4f]" href="#about">About</a>
//             <a className="hover:text-[#785e4f]" href="#events">Events</a>
//             <a className="hover:text-[#785e4f]" href="#packages">Packages</a>
//             <a className="hover:text-[#785e4f]" href="#contact">Contact</a>
//           </nav>

//           {/* RIGHT: Mobile Menu Button */}
//           <button className="md:hidden inline-flex items-center justify-center w-10 h-10 border rounded">
//             Menu
//           </button>
//         </div>
//       </header>


//       {/* Hero slider mock */}

    //   <section id="home" className="relative">
    //     <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
    //       {/* Carousel images */}
    //       <div className="relative w-full h-full z-0">
    //         {images.map((img, index) => (
    //           <div
    //             key={index}
    //             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
    //           >
    //             <img
    //               src={img}
    //               alt={`Hero ${index + 1}`}
    //               className="w-full h-full object-cover"
    //             />
    //             <div className="absolute inset-0 bg-black/30" />
    //           </div>
    //         ))}
    //       </div>

    //       {/* Text content - different for each slide */}
    //       <div className="absolute inset-0 z-10 flex items-center justify-center">
    //         <div className="max-w-6xl w-full px-4">
    //           {currentSlide === 0 && (
    //             <div className="text-white max-w-xl animate-fadeIn">
    //               <img src="https://ext.same-assets.com/726936217/1953479614.svg" alt="Leaf" className="h-8 mb-3 opacity-90" />
    //               <p className="uppercase tracking-widest text-sm">NATURE'S NEST RESORT</p>
    //               <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-pink-500">
    //                 Riverside Camps and AC Cottages</h1>
    //             </div>
    //           )}

    //           {currentSlide === 1 && (
    //             <div className="text-white max-w-xl animate-fadeIn">
    //               <p className="uppercase tracking-widest text-sm">CAMPING IN RISHIKESH</p>
    //               <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-yellow-300">in the heart of rishikesh</h1>
    //             </div>
    //           )}

    //           {currentSlide === 2 && (
    //             <div className="text-white max-w-xl animate-fadeIn">
    //               <p className="uppercase tracking-widest text-sm">GARDEN WITH MOUNTAIN VIEWS</p>
    //               <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-green-400">
    //                 acompannied with fun activities<br />
    //                 and mouth watering delecacies
    //               </h1>
    //             </div>
    //           )}
    //         </div>
    //       </div>

    //       {/* Navigation dots */}
    //       <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
    //         {images.map((_, index) => (
    //           <button
    //             key={index}
    //             onClick={() => setCurrentSlide(index)}
    //             className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </section>









//       {/* Upper Section: Gallery with Hover */}
//       <section className="py-16" id="gallery">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold text-center">NATURE NEST GALLERY</h2>
//           <div className="mt-6 flex justify-center gap-3 text-sm">
//             <button className="px-4 py-2 rounded-full bg-[#393d3b] text-white">ALL PHOTOS</button>
//             <button className="px-4 py-2 rounded-full border">ROOMS</button>
//             <button className="px-4 py-2 rounded-full border">EVENTS</button>
//           </div>
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
//             {[
//               '3203835925.jpeg',
//               '3082491975.jpeg',
//               '2561521118.jpeg',
//               '2744695433.jpeg',
//               '3145493737.jpeg',
//               '1081983233.jpeg',
//             ].map((id) => (
//               <div key={id} className="overflow-hidden rounded">
//                 <img
//                   className="w-full h-44 md:h-60 object-cover rounded transform transition-transform duration-300 hover:scale-105 hover:brightness-90"
//                   src={`https://ext.same-assets.com/726936217/${id}`}
//                   alt="Gallery"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="about" className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-16 flex flex-col gap-10 items-center">

//           {/* IMAGE */}
//           <div className="relative w-full overflow-hidden rounded shadow-md">
//             <img
//               src="https://ext.same-assets.com/726936217/3247814876.jpeg"
//               alt="Camping in Rishikesh"
//               className="w-full h-auto object-cover transform transition duration-500 hover:scale-105 hover:shadow-xl"
//             />
//             <h3 className="absolute top-4 left-4 text-[18px] font-semibold text-black bg-white/70 px-3 py-1 rounded">
//               Camping In Rishikesh
//             </h3>
//           </div>

//           {/* CONTENT / WRITING */}
//           <div className="w-full text-center">
//             <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-[#42E410]">Nature Nest - The Eco Resort</h2>
//             <p className="mt-4 leading-7 text-[#555]">
//               If you're looking for an honest, rustic experience of camping in Rishikesh, this is the place for you. Situated bang on the banks of the Ganga, this isn't your average luxury escapade of riverside camping in Rishikesh. It is for the hard core.
//             </p>
//             <p className="mt-3 leading-7 text-[#555]">
//               Situated at a 30-minute-trek from the nearest road-head on the Rishikesh-Badrinath highway, this Rishikesh adventure camp offers accommodation on a twin sharing basis.
//             </p>
//             <p className='flex justify-center pt-6'>SPONSORED</p>
//             <p className="mt-3 leading-7 text-[#555]">
//               Nature Nest is best enjoyed at night, gazing at the stars as you sit outside your tent, around a bonfire. Besides camping in Rishikesh, you can indulge in a number of activities on offer here like badminton, volleyball, yoga, and trekking, as a part of their packages. You can mix and match and choose the option best suited for you.
//             </p>

//             <div className="mt-6 flex justify-center md:justify-start">
//               <a href="#packages" className="inline-block px-6 py-3 bg-[#393d3b] text-white rounded hover:bg-black">
//                 View Packages
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}

//       <footer id="contact" className="bg-[#393d3b] text-white">
//         <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
//           {/* Logo and Description */}
//           <div>
//             <img
//               src="https://ext.same-assets.com/726936217/397242796.png"
//               alt="logo"
//               className="h-20 w-auto"   // increased logo size
//             />
//             <p className="mt-4 text-sm opacity-90">
//               The Rafting Camping in Rishikesh is one of the best riverside rafting camps in Rishikesh.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-3">Quick Links</h4>
//             <ul className="space-y-2 text-sm opacity-90">
//               <li><a href="#home" className="hover:underline">Home</a></li>
//               <li><a href="#about" className="hover:underline">About Nature Nest</a></li>
//               <li><a href="#events" className="hover:underline">Services</a></li>
//               <li><a href="#packages" className="hover:underline">Our Packages</a></li>
//               <li><a href="#contact" className="hover:underline">Contact us</a></li>
//             </ul>
//           </div>

//           {/* Get In Touch */}
//           <div>
//             <h4 className="font-semibold mb-3">Get In Touch</h4>
//             <ul className="space-y-3 text-sm opacity-90">
//               <li className="flex items-center gap-2">
//                 <i className="fas fa-phone"></i> 88-60134-967
//               </li>
//               <li className="flex items-center gap-2">
//                 <i className="fas fa-phone"></i> 92-119426-42
//               </li>
//               <li className="flex items-center gap-2">
//                 <i className="fas fa-envelope"></i> naturenest81@gmail.com
//               </li>
//             </ul>
//           </div>

//           {/* Enquire Form */}
//           <div>
//             <h4 className="font-semibold mb-3">Enquire Now</h4>
//             <form className="space-y-3">
//               <input className="w-full px-3 py-2 rounded text-[#393d3b]" placeholder="Name" />
//               <input className="w-full px-3 py-2 rounded text-[#393d3b]" placeholder="Your email" />
//               <input className="w-full px-3 py-2 rounded text-[#393d3b]" placeholder="Phone" />
//               <button type="button" className="w-full px-3 py-2 rounded bg-white text-[#393d3b] font-medium hover:bg-gray-200">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="bg-[#17804b]">
//           <div className="max-w-6xl mx-auto px-4 py-4 text-xs opacity-80 flex items-center justify-between">
//             <span>© 2025</span>
//             <div className="flex items-center gap-4 text-sm">
//               <a href="tel:+918860134967" className="flex items-center gap-1 hover:underline">
//                 <i className="fas fa-phone"></i> Call
//               </a>
//               <a href="https://wa.me/918860134967?text=" className="flex items-center gap-1 hover:underline">
//                 <i className="fab fa-whatsapp"></i> WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   )
// }

// export default HomePage;


import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";  
import img1 from '../assets/img_1.jpeg';
import img2 from '../assets/img_2.jpg';
import img3 from '../assets/img_3.jpeg';
import GrassImg from '../assets/GrassImage.jpeg';


function HomePage() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1,img2,img3];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]); 
  
  return (
    <div className="min-h-screen font-sans text-[#393d3b] bg-[#f7f7f6]">
      {/* Hero slider mock */}

      <section id="home" className="relative">
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          {/* Carousel images */}
          <div className="relative w-full h-full z-0">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={img}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>

          {/* Text content - different for each slide */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="max-w-6xl w-full px-4">
              {currentSlide === 0 && (
                <div className="text-white max-w-xl animate-fadeIn">
                  <img src="https://ext.same-assets.com/726936217/1953479614.svg" alt="Leaf" className="h-8 mb-3 opacity-90" />
                  <p className="uppercase tracking-widest text-sm">NATURE'S NEST RESORT</p>
                  <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-pink-500">
                    Riverside Camps and AC Cottages</h1>
                </div>
              )}

              {currentSlide === 1 && (
                <div className="text-white max-w-xl animate-fadeIn">
                  <p className="uppercase tracking-widest text-sm">CAMPING IN RISHIKESH</p>
                  <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-yellow-300">in the heart of rishikesh</h1>
                </div>
              )}

              {currentSlide === 2 && (
                <div className="text-white max-w-xl animate-fadeIn">
                  <p className="uppercase tracking-widest text-sm">GARDEN WITH MOUNTAIN VIEWS</p>
                  <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-green-400">
                    acompannied with fun activities<br />
                    and mouth watering delecacies
                  </h1>
                </div>
              )}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upper Section: Gallery with Hover */}
      <section className="py-16" id="gallery">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">NATURE NEST GALLERY</h2>
          <div className="mt-6 flex justify-center gap-3 text-sm">
            <button className="px-4 py-2 rounded-full bg-[#393d3b] text-white">ALL PHOTOS</button>
            <button className="px-4 py-2 rounded-full border">ROOMS</button>
            <button className="px-4 py-2 rounded-full border">EVENTS</button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '3203835925.jpeg',
              '3082491975.jpeg',
              '2561521118.jpeg',
              '2744695433.jpeg',
              '3145493737.jpeg',
              '1081983233.jpeg',
            ].map((id) => (
              <div key={id} className="overflow-hidden rounded">
                <img
                  className="w-full h-44 md:h-60 object-cover rounded transform transition-transform duration-300 hover:scale-105 hover:brightness-90"
                  src={`https://ext.same-assets.com/726936217/${id}`}
                  alt="Gallery"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-16 flex flex-col gap-10 items-center">

          {/* IMAGE */}
          <div className="relative w-full overflow-hidden rounded shadow-md">
            <img
              src={GrassImg}
              alt="Camping in Rishikesh"
              className="w-full h-auto object-cover transform transition duration-500 hover:scale-105 hover:shadow-xl"
            />
            <h3 className="absolute top-4 left-4 text-[18px] font-semibold text-black bg-white/70 px-3 py-1 rounded">
              Camping In Rishikesh
            </h3>
          </div>

          {/* CONTENT / WRITING */}
          <div className="w-full text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-[#42E410]">Nature Nest - The Eco Resort</h2>
            <p className="mt-4 leading-7 text-[#555]">
              If you're looking for an honest, rustic experience of camping in Rishikesh, this is the place for you. Situated bang on the banks of the Ganga, this isn't your average luxury escapade of riverside camping in Rishikesh. It is for the hard core.
            </p>
            <p className="mt-3 leading-7 text-[#555]">
              Situated at a 30-minute-trek from the nearest road-head on the Rishikesh-Badrinath highway, this Rishikesh adventure camp offers accommodation on a twin sharing basis.
            </p>
            <p className='flex justify-center pt-6'>SPONSORED</p>
            <p className="mt-3 leading-7 text-[#555]">
              Nature Nest is best enjoyed at night, gazing at the stars as you sit outside your tent, around a bonfire. Besides camping in Rishikesh, you can indulge in a number of activities on offer here like badminton, volleyball, yoga, and trekking, as a part of their packages. You can mix and match and choose the option best suited for you.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <a href="#packages" className="inline-block px-6 py-3 bg-[#393d3b] text-white rounded hover:bg-black">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage;


