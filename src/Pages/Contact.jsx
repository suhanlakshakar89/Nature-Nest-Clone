import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section - Same as your existing header */}

            <section id="home" className="relative">
                <div className="relative h-[80vh] md:h-[100vh] overflow-hidden">
                    {/* Single image with enhanced sizing */}
                    <div className="relative w-full h-full z-0">
                        <div className="absolute inset-0">
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-1046055913138602384/original/be46a0b2-8f9e-4a03-9d1a-46ad5abef9fe.jpeg"
                                alt="Nature's Nest Resort"
                                className="w-full h-full object-cover object-center" // Added object-center
                            />
                            <div className="absolute inset-0 bg-black/30" />
                        </div>
                    </div>

                    {/* Centered text content */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="text-center w-full px-4">
                            <div className="inline-block"> {/* Added container for centered alignment */}
                                <img src="https://ext.same-assets.com/726936217/1953479614.svg" alt="Leaf" className="h-12 mb-4 opacity-90 mx-auto" />
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                                    CONTACT US
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            {/* Contact Page Content */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#17804b] mb-4">WE'RE READY, LET'S TALK.</h1>
                    <p className="text-lg text-gray-600">Get in touch with us for bookings and inquiries</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Package</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#17804b]"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#17804b]"
                                    placeholder="Your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#17804b]"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Check In</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#17804b]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Check Out</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#17804b]"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#17804b] text-white py-3 rounded-md font-semibold hover:bg-[#126a3d] transition duration-300 mt-6"
                            >
                                BOOK YOUR PACKAGE
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">CONTACT INFO</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-[#17804b] text-xl mt-1" />
                                <div>
                                    <h3 className="font-medium">Address</h3>
                                    <p className="text-gray-600">Bairagarh, Mohan Chatti, Rishikesh</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaEnvelope className="text-[#17804b] text-xl mt-1" />
                                <div>
                                    <h3 className="font-medium">Email Us</h3>
                                    <a href="mailto:naturenest81@gmail.com" className="text-gray-600 hover:text-[#17804b]">
                                        naturenest81@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-[#17804b] text-xl mt-1" />
                                <div>
                                    <h3 className="font-medium">Call Us</h3>
                                    <a href="tel:+918860134967" className="text-gray-600 hover:text-[#17804b]">
                                        8860134967
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium mb-3">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#3b5998]">
                                        <FaFacebookF className="text-2xl" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2]">
                                        <FaTwitter className="text-2xl" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E1306C]">
                                        <FaInstagram className="text-2xl" />
                                    </a>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="https://wa.me/918860134967"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#128C7E] transition duration-300"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Click To Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section - Same as your existing footer */}
        </div>
    );
};

export default Contact;