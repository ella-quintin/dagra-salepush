import Navbar from "../../components/navbar";
import soiltwo from '../../assets/images/soiltwo.jpg';
import ceo from '../../assets/images/ceo.png';
import { motion } from "framer-motion";
import Footer from "../../components/footer";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-center text-[#088E31] mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        About Us
                    </motion.h2>
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-10"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="sm:w-1/2 mb-8 sm:mb-0 sm:mr-6">
                            <motion.img
                                src={soiltwo}
                                alt="About DAGRA SalePush Enterprise"
                                className="rounded-lg shadow-lg w-full h-auto"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="sm:w-1/2">
                            <motion.p
                                className="text-base sm:text-lg text-gray-700 mb-6 leading-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                At <strong>DAGRA SALEPUSH ENTERPRISE</strong>, located in the heart of Juaben-Ashanti, Ghana, we are on a mission to transform agriculture and promote environmental sustainability through innovative, natural soil solutions. With a deep commitment to supporting farmers and protecting the planet, we strive to create sustainable practices that yield healthier crops, restore degraded lands, and ensure a greener future for generations to come.
                            </motion.p>
                            <motion.p
                                className="text-base sm:text-lg text-gray-700 mb-6 leading-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            >
                                Our flagship product, <strong>DAGRA Organic Soil Conditioner</strong>, is crafted from locally sourced agricultural and organic waste, including wood residues, manure, egg shells, coconut husks, and bird droppings. This premium soil conditioner not only rejuvenates soil health but also plays a vital role in reducing carbon emissions and enhancing biodiversity. Its innovative formulation provides benefits ranging from nutrient retention and microbial activity enhancement to long-term carbon sequestration and soil structural improvements.
                            </motion.p>
                            <motion.p
                                className="text-base sm:text-lg text-gray-700 mb-6 leading-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2 }}
                            >
                                As a response to the devastating effects of galamsey (illegal mining) in Ghana, which has left countless farmlands barren, we are committed to reclaiming and restoring these lands. By leveraging our organic solutions, farmers can achieve higher yields, reduce their dependence on chemical fertilizers, and cultivate fertile, sustainable farmlands once again.
                            </motion.p>
                            <motion.p
                                className="text-base sm:text-lg text-gray-700 mb-6 leading-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2.5 }}
                            >
                                Our vision extends beyond soil rejuvenation. At DAGRA SALEPUSH ENTERPRISE, we believe in empowering local communities and fostering practices that balance agricultural productivity with environmental responsibility. Every step we take is driven by our passion for innovation, sustainability, and the well-being of both farmers and the ecosystem.
                            </motion.p>
                            <motion.p
                                className="text-base sm:text-lg text-gray-700 font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 3 }}
                            >
                                Together, we can revolutionize agriculture, restore our environment, and create a future where both people and the planet thrive. Join us on this transformative journey.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* About Founder & C.E.O Section */}
                    <motion.div
                        className="py-16 px-6 md:px-12 bg-gray-100 mt-16"
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        initial={{ x: "0vw", opacity: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <motion.h4
                                    className="text-[#088E31] uppercase tracking-wide font-semibold mb-2"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    About the Founder & C.E.O
                                </motion.h4>
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    Mr. Daniel Mensah
                                </motion.h2>
                                <motion.p
                                    className="text-gray-600 text-base md:text-lg mb-6"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    I am Mensah Daniel, a passionate entrepreneur dedicated to advancing sustainable agriculture and environmental restoration. As the founder of DAGRA SALEPUSH ENTERPRISE, I have committed my efforts to producing eco-friendly organic soil conditioners, including biochar, to address critical challenges in soil health, crop productivity, and climate resilience.
                                    With a deep understanding of the environmental and agricultural landscape, I focus on transforming agricultural waste into valuable soil-enhancing products.
                                </motion.p>
                                <motion.p
                                    className="text-gray-600 text-base md:text-lg mb-6"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    
                                    My vision is to empower farmers, revitalize degraded lands, and contribute to global efforts in carbon sequestration and sustainable farming practices. At DAGRA SALEPUSH ENTERPRISE, I am leading a mission to bring innovative solutions to the forefront, creating a positive impact on communities, the environment, and the future of agriculture.
                                </motion.p>

                                {/* <motion.button
                                    onClick={() => navigate("/about-founder")}
                                    className="bg-green-500 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    Learn More
                                </motion.button> */}
                            </div>
                            <motion.div
                                className="md:w-1/2 flex justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                <img
                                    src={ceo} // 
                                    alt="About the Founder"
                                    className="rounded-full bg-[#D9E4EA] shadow-lg w-72 h-72 md:w-80 md:h-80 object-contain"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
