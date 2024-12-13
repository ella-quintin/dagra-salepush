import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logoText.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation(); // Get the current location

    // Close menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-8 sm:h-10" />
                    <img src={logoText} alt="logo" className="h-6 sm:h-8 mt-4" />
                </div>

                {/* Navigation Links */}
                <div
                    ref={menuRef}
                    className={`${isMenuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:items-center absolute md:static top-20 right-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-3/4 md:w-auto z-40 p-4 md:p-0`}
                >
                    <div className="flex flex-col md:flex-row md:space-x-8 md:ml-auto">
                        <Link
                            to="/"
                            className={`block md:inline py-2 md:py-0 text-center font-semibold ${
                                location.pathname === "/" ? "text-[#088E31]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about-us"
                            className={`block md:inline py-2 md:py-0 text-center font-semibold ${
                                location.pathname === "/about-us" ? "text-[#088E31]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/our-product"
                            className={`block md:inline py-2 md:py-0 text-center font-semibold ${
                                location.pathname === "/our-product" ? "text-[#088E31]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Our Product
                        </Link>

                        <Link
                            to="/contact-us"
                            className={`block md:inline py-2 md:py-0 text-center font-semibold ${
                                location.pathname === "/contact-us" ? "text-[#088E31]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    className="md:hidden text-black z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
