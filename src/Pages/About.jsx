import { FaLeaf, FaUmbrellaBeach, FaTree, FaMountain } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-[#f7f7f6]">


            {/* Hero Section */}
            <section className="relative">
                <div className="relative h-[70vh] md:h-[90vh] overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/197593421.jpg?k=f799ebd26e37710c605c52ee6866b4fc82c803dd11017e7caa52c3c572317c75&o="
                            alt="About Nature's Nest"
                            className="w-full h-full object-cover object-center brightness-100"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-black/20" /> {/* Lighter overlay */}
                    </div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="text-center w-full px-4 transform translate-y-[-10%]"> {/* Slightly raised */}
                            <div className="inline-block animate-fadeIn">
                                <FaLeaf className="h-14 w-14 text-white mb-6 mx-auto opacity-90" /> {/* Larger icon */}
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                                    ABOUT US
                                </h1>
                                <div className="w-32 h-1.5 bg-white mt-8 mx-auto bg-opacity-80"></div> {/* Thicker line */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#17804b] mb-6">Our Story</h2>
                        <p className="text-lg mb-4">
                            Nestled in the heart of Rishikesh, Nature's Nest Resort was founded in 2010 with a vision to create
                            sustainable eco-tourism experiences. What began as a small riverside camping site has blossomed into
                            a premier nature retreat while maintaining our commitment to environmental preservation.
                        </p>
                        <p className="text-lg">
                            Our 12-acre property combines lush gardens with breathtaking mountain views, offering guests
                            an unforgettable blend of adventure and relaxation in harmony with nature.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                            alt="Our Resort"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-[#17804b] mb-12 text-center">Why Choose Us</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaLeaf className="text-4xl text-[#17804b] mb-4" />,
                                title: "Eco-Friendly",
                                description: "Sustainable practices and green initiatives"
                            },
                            {
                                icon: <FaUmbrellaBeach className="text-4xl text-[#17804b] mb-4" />,
                                title: "Riverside Location",
                                description: "Direct access to the Ganges with private beach"
                            },
                            {
                                icon: <FaTree className="text-4xl text-[#17804b] mb-4" />,
                                title: "Lush Gardens",
                                description: "12 acres of beautifully landscaped property"
                            },
                            {
                                icon: <FaMountain className="text-4xl text-[#17804b] mb-4" />,
                                title: "Mountain Views",
                                description: "Panoramic views of the Himalayas"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                {feature.icon}
                                <h3 className="text-xl font-bold text-[#17804b] mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-[#17804b] mb-12 text-center">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Raj Sharma",
                                role: "Founder & CEO",
                                image: "https://randomuser.me/api/portraits/men/32.jpg",
                                bio: "Nature enthusiast with 15+ years in eco-tourism"
                            },
                            {
                                name: "Priya Patel",
                                role: "Operations Manager",
                                image: "https://randomuser.me/api/portraits/women/44.jpg",
                                bio: "Hospitality expert ensuring your perfect stay"
                            },
                            {
                                name: "Amit Singh",
                                role: "Head Chef",
                                image: "https://randomuser.me/api/portraits/men/75.jpg",
                                bio: "Creates delicious meals with local organic ingredients"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-[#17804b] font-medium">{member.role}</p>
                                    <p className="mt-2 text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#17804b] text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to Experience Nature's Nest?</h2>
                    <p className="text-xl mb-8">Book your stay today and immerse yourself in nature's beauty</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#17804b] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;