import Navbar from "../../components/navbar";
import { MapPin, Phone, Mail } from 'lucide-react';
import Footer from "../../components/footer";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                {/* Header Section */}
                <div className="text-center py-12 bg-green-500 text-white mt-16">
                    <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
                    <p className="text-base sm:text-lg mt-4">
                        Partner with us to reduce chemical fertilizer usage and improve soil health.
                    </p>
                </div>

                {/* Contact Details Section */}
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Join Us in Making a Difference</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Reach out to learn how Dagra Organic Soil Conditioner can transform your farmland!
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <MapPin className="text-green-500 w-6 h-6 mr-3" />
                                <p className="text-sm sm:text-base text-gray-700">
                                    <span className="font-bold">Location:</span> Juaben quarters-Ashanti
                                </p>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-green-500 w-6 h-6 mr-3" />
                                <p className="text-sm sm:text-base text-gray-700">
                                    <span className="font-bold">Phone:</span> +233 2413 75734
                                </p>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-green-500 w-6 h-6 mr-3" />
                                <p className="text-sm sm:text-base text-gray-700">
                                    <span className="font-bold">Email:</span> danielmenah43@gmail.com
                                </p>
                            </li>
                        </ul>

                    </div>

                    {/* Map Section */}
                    <div>
                        <iframe
                            className="w-full h-64 sm:h-80 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3961.841487495894!2d-1.4629803254596598!3d6.78913502002037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Juaben%20quarters!5e0!3m2!1sen!2sgh!4v1733937739715!5m2!1sen!2sgh"
                            allowFullScreen=""
                            loading="lazy"
                            title="Juaben Quarters, Ashanti"
                        ></iframe>
                    </div>

                </div>

                {/* Social Links */}
                {/* <div className="bg-gray-800 py-6 sm:py-8 text-center text-white">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex justify-center space-x-4 sm:space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-facebook-f text-xl sm:text-2xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-twitter text-xl sm:text-2xl"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-instagram text-xl sm:text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-linkedin-in text-xl sm:text-2xl"></i>
                        </a>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
};

export default Contact;
