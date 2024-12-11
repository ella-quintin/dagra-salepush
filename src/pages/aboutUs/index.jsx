import Navbar from "../../components/navbar";
import hero from '../../assets/images/hero.jpg';
import ceo from '../../assets/images/ceo.jpg';
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700 mb-8">
                        Who We Are
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center">
                        <div className="sm:w-1/2 mb-8 sm:mb-0 sm:mr-6">
                            <img
                                src={hero}
                                alt="About DAGRA SalePush Enterprise"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="sm:w-1/2">
                            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-8">
                                At <strong>DAGRA SALEPUSH ENTERPRISE</strong>, located in the heart of Juaben-Ashanti, Ghana, we are on a mission to transform agriculture and promote environmental sustainability through innovative, natural soil solutions. With a deep commitment to supporting farmers and protecting the planet, we strive to create sustainable practices that yield healthier crops, restore degraded lands, and ensure a greener future for generations to come.
                            </p>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-8">
                                Our flagship product, <strong>DAGRA Organic Soil Conditioner</strong>, is crafted from locally sourced agricultural and organic waste, including wood residues, manure, egg shells, coconut husks, and bird droppings. This premium soil conditioner not only rejuvenates soil health but also plays a vital role in reducing carbon emissions and enhancing biodiversity. Its innovative formulation provides benefits ranging from nutrient retention and microbial activity enhancement to long-term carbon sequestration and soil structural improvements.
                            </p>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-8">
                                As a response to the devastating effects of galamsey (illegal mining) in Ghana, which has left countless farmlands barren, we are committed to reclaiming and restoring these lands. By leveraging our organic solutions, farmers can achieve higher yields, reduce their dependence on chemical fertilizers, and cultivate fertile, sustainable farmlands once again.
                            </p>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-8">
                                Our vision extends beyond soil rejuvenation. At DAGRA SALEPUSH ENTERPRISE, we believe in empowering local communities and fostering practices that balance agricultural productivity with environmental responsibility. Every step we take is driven by our passion for innovation, sustainability, and the well-being of both farmers and the ecosystem.
                            </p>
                            <p className="text-lg sm:text-xl text-gray-700 font-bold">
                                Together, we can revolutionize agriculture, restore our environment, and create a future where both people and the planet thrive. Join us on this transformative journey.
                            </p>
                        </div>
                    </div>

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
                                    className="text-green-500 uppercase tracking-wide font-semibold mb-2"
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
                                    Mr. Daniel Mensah, Founder and CEO of DAGRA SALEPUSH ENTERPRISE, is a skilled chemical engineer with a BTech and HND from Kumasi Technical University. With certifications in industrial engineering and waste management, he has extensive experience in process optimization, sustainability, and environmental stewardship.

                                    His career highlights include roles at Juaben Oil Mills, where he was recognized as "Best Staff of the Year" in 2021 and served as Assistant Project Coordinator for a biomass energy plant. He has also worked with OKO Energy and currently serves as an Assistant Officer in Small-Scale Mining at the Mineral Commission.

                                    A dedicated professional with a passion for sustainability, Mr. Mensah is committed to transforming agriculture through innovative organic solutions. He is also a devoted husband and father of two.
                                </motion.p>

                                <motion.button
                                    onClick={() => navigate("/about-founder")}
                                    className="bg-green-500 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    Learn More
                                </motion.button>
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
                                    className="rounded-full bg-[#EDE2C4] shadow-lg w-64 h-64 md:w-80 md:h-80 object-contain"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
