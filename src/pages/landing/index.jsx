import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import hero from '../../assets/images/hero.jpg'; // Replace with your image path
import { useNavigate } from "react-router-dom";



const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div>
                {/* Hero Section */}
                <motion.div
                    className="relative w-full h-screen bg-cover bg-center"
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
                    viewport={{ once: false, amount: 0.5 }} // Changed once to false to make it trigger on every scroll
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
                                onClick={() => (window.location.href = "/about-us")}
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

                {/* Our Impact Section - Slide from Bottom */}
                <motion.div
                    className="py-16 px-6 md:px-12 bg-white"
                    whileInView={{
                        y: 0,         // Slide from bottom to top
                        opacity: 1,   // Fade in
                    }}
                    initial={{ y: "50vh", opacity: 0 }}  // Start from below the viewport
                    viewport={{ once: false, amount: 0.5 }} // Trigger every time section is in view
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Our Impact
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.6 }}
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
                                transition={{ duration: 1, delay: 1.8 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                                    Reclaimed Lands
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    We actively work to reclaim lands degraded by illegal mining, giving farmers a fresh start.
                                </p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                                    Eco-Friendly Practices
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Supporting a greener planet with sustainable, eco-conscious agricultural practices.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Landing;
