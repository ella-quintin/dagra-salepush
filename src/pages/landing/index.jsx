import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import hero from '../../assets/images/hero.jpg';

import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="overflow-hidden">
                {/* Hero Section */}
                <motion.div
                    className="relative w-full min-h-screen bg-cover bg-center pt-[80px]"
                    style={{ backgroundImage: `url(${hero})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 md:px-12">
                        <motion.h3
                            className="text-white text-3xl md:text-5xl font-bold mb-4"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Transforming Soils, Sustaining the Future
                        </motion.h3>
                        <motion.p
                            className="text-white text-base md:text-lg mb-6 max-w-lg md:max-w-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Premium organic solutions for healthier soils and a greener planet.
                        </motion.p>
                        <motion.button
                            onClick={() => navigate("/contact-us")}
                            className="bg-green-500 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>

                {/* About Us Section */}
                <motion.div
                    className="py-16 px-6 md:px-12 bg-gray-100"
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    initial={{ x: "0vw", opacity: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <motion.h4
                                className="text-green-500 uppercase tracking-wide font-semibold mb-2"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                About Us
                            </motion.h4>
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Let Us Tell You Our Story
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 text-base md:text-lg mb-6"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                At DAGRA SALEPUSH ENTERPRISE, we specialize in sustainable soil solutions that empower farmers and restore the environment. Learn more about how we’re transforming agriculture and promoting eco-friendly practices.
                            </motion.p>

                            <motion.button
                                onClick={() => navigate("/about-us")}
                                className="bg-green-500 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                Read More
                            </motion.button>
                        </div>
                        <motion.div
                            className="md:w-1/2 flex justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <img
                                src={hero} // Replace with your image path
                                alt="About Us"
                                className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Mission & Vision Section */}
                <section className="py-16 px-6 md:px-12 bg-gray-100">
                    <motion.div
                        className="max-w-7xl mx-auto text-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">Our Mission & Vision</h2>
                    </motion.div>
                    <motion.div
                        className="max-w-7xl mx-auto bg-green-500 text-white rounded-lg shadow-lg p-6 md:p-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-base md:text-lg leading-relaxed">
                            <span className="font-bold">Mission:</span> To create sustainable, eco-friendly organic soil conditioners that enhance soil fertility, improve crop yields, and support climate resilience by recycling agricultural waste into valuable resources while actively contributing to carbon sequestration.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed mt-6">
                            <span className="font-bold">Vision:</span> To become a global leader in promoting regenerative agriculture and environmental restoration, empowering communities through innovative soil solutions that foster food security, sustainable farming, and a healthier planet.
                        </p>
                    </motion.div>
                </section>

                {/* Our Impact Section */}
                <motion.div
                    className="py-16 px-6 md:px-12 bg-white"
                    whileInView={{
                        y: 0,       
                        opacity: 1,  
                    }}
                    initial={{ y: "50vh", opacity: 0 }} 
                    viewport={{ once: false, amount: 0.5 }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Impact
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                                    Healthy Soils
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Our organic soil conditioner restores nutrient-depleted soil, enhancing productivity and sustainability for farmers.
                                </p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8}}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                                    Carbon Sequestration
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    By utilizing agricultural waste, we promote carbon sequestration, helping to mitigate climate change.
                                </p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                                    Food Security
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Our products enhance soil health, increasing crop yields and contributing to long-term food security.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <section className="py-16 px-6 md:px-12 bg-gray-200 text-center">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Join Us in Making a Difference
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-base md:text-lg mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Partner with us to support sustainable agriculture, healthy soils, and a greener future.
                        </motion.p>
                        <motion.button
                            onClick={() => navigate("/contact-us")}
                            className="bg-green-500 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default Landing;
