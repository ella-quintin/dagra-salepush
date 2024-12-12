import Navbar from "../../components/navbar";
import hero from '../../assets/images/hero.jpg';
import sack from '../../assets/images/sack.jpg'
import soil from '../../assets/images/soil.jpg'
import Footer from "../../components/footer";
import { motion } from "framer-motion";

const Product = () => {
    return (
        <>
            <Navbar />
            <div>
                {/* Hero Section */}
                <motion.div
                    className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${soil})`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">Our Product</h1>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className="py-16 px-4 sm:px-6 lg:px-8 mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Content */}
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h4 className="text-green-500 uppercase tracking-wide font-semibold text-xl sm:text-2xl">
                                DAGRA Organic Soil Conditioner
                            </h4>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                                An Eco-Friendly Soil Enhancer
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                DAGRA Organic Soil Conditioner is a premium product crafted from agricultural and organic waste. It revitalizes soil health, boosts crop yields, and mitigates climate impact.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                            <ul className="list-disc pl-6 text-gray-600 text-base sm:text-lg mb-6">
                                <li>Improves soil structure, retains moisture and nutrients.</li>
                                <li>Enriches microbial activity for better soil health.</li>
                                <li>Reduces dependency on chemical fertilizers.</li>
                                <li>Reclaims degraded lands, including areas affected by galamsey.</li>
                                <li>Sequesters excess carbon dioxide to combat climate change.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Lifespan and Impact</h3>
                            <ul className="list-disc pl-6 text-gray-600 text-base sm:text-lg mb-6">
                                <li><strong>Short-Term (1-5 years):</strong> Nutrient retention and microbial activity enhancement.</li>
                                <li><strong>Medium-Term (10-50 years):</strong> Water retention and cation exchange improvement.</li>
                                <li><strong>Long-Term (100-1000+ years):</strong> Carbon sequestration and soil structural development.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Sustainability Promise</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                By integrating DAGRA Organic Soil Conditioner into your farming practices, you contribute to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 text-base sm:text-lg mt-4">
                                <li>Reducing greenhouse gas emissions.</li>
                                <li>Restoring degraded lands to productivity.</li>
                                <li>Supporting sustainable agriculture for future generations.</li>
                            </ul>
                            <div className="mt-8">
                                <motion.button
                                    onClick={() => window.location.href = `tel:+233241375734`}
                                    className="bg-green-500 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    Call Us Now
                                </motion.button>
                            </div>

                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="rounded-lg overflow-hidden shadow-md"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <img
                                src={soil}
                                alt="DAGRA Organic Soil Conditioner"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
