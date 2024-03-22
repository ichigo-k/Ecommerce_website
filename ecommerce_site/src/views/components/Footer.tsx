
import { FaFacebook, FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
        <div className="bg-gray-800 p-5 text-white gap-x-3">
            <div className="container mx-auto">
            <div className="flex flex-wrap justify-between w-full">
                <div className="w-full lg:w-1/3">
                <h3 className="text-2xl font-semibold">About Us</h3>
                <p className="mt-3 text-gray-300">Discover a world of convenience and quality. Your go-to destination for curated products and seamless shopping experiences. Trust us to meet your needs, every time.</p>
                </div>
                <div className="w-full lg:w-1/3">
                <h3 className="text-2xl font-semibold max-md:mt-3">Contact Us</h3>
                <p className="mt-3 text-gray-300">Ghana</p>
                <p className="text-gray-300">Accra, Abeka</p>
                <p className="text-gray-300">Phone: +233 566060660</p>
                <a href="mailto:#" className="text-gray-300">Email Us</a>
                </div>
                <div className="w-full lg:w-1/3">
                <h3 className="text-2xl font-semibold">Follow Us</h3>
                <div className="mt-3">
                    <ul className="flex flex-wrap gap-2">
                    <li><a href="#"> <FaFacebook/> </a></li>
                    <li><a href="#"><FaInstagram /> </a></li>
                    <li><a href="#"> <FaTwitter/> </a></li>
                    <li><a href="#"><FaYoutube/></a></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="bg-gray-900 p-3 text-center text-white">
            <p>&copy; 2024 All Rights Reserved</p>
        </div>
    </footer>
  )
}
