import Navbar from "../../components/navbar";
import hero from '../../assets/images/hero.jpg';

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
                </div>
            </div>
        </>
    );
};

export default AboutUs;
