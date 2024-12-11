import Navbar from "../../components/navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                {/* Header Section */}
                <div className="text-center py-12 bg-green-500 text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
                    <p className="text-base sm:text-lg mt-4">
                        We’re here to help! Reach out to us via any of the options below.
                    </p>
                </div>

                {/* Contact Details Section */}
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Get in Touch</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Whether you have a question or just want to say hi, our team is always ready to assist you.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="material-icons text-green-500 text-2xl mr-3">location:</span>
                                <p className="text-sm sm:text-base text-gray-700">
                                Juaben-Ashanti 
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="material-icons text-green-500 text-2xl mr-3">phone:</span>
                                <p className="text-sm sm:text-base text-gray-700">+233 2413 75734</p>
                            </li>
                            <li className="flex items-start">
                                <span className="material-icons text-green-500 text-2xl mr-3">email</span>
                                <p className="text-sm sm:text-base text-gray-700">danielmenah43@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div>
                        <iframe
                            className="w-full h-64 sm:h-80 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537354158923!3d-37.81720974201644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c6b0b7b7%3A0xe56ed1a4c8f0dbf5!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1601539697607!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>

                {/* Social Links */}
                <div className="bg-gray-800 py-6 sm:py-8 text-center text-white">
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
                </div>
            </div>
        </>
    );
};

export default Contact;
