import SectionHeader from "../SectionHeader/SectionHeader";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {

    const handleFooterFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        form.reset();
        console.log({ name, email, message });
    }

    return (
        <>
            <footer className="p-10 pt-24 bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/xCxM4js/13.jpg")' }}>
                <div className="container mx-auto px-20">
                    <img src="https://i.ibb.co/jV0kLgs/logo1.png" alt="Website Logo" className="w-20" />
                    <div className="text-[#1B1A1A] flex gap-20 mt-4">
                        <div className="flex flex-col gap-8 w-6/12">
                            <SectionHeader
                                sectionTitle="Espresso Emporium" />
                            <p className="mt-2">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="flex gap-4 text-4xl text-[#331A15]">
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaYoutube></FaYoutube>
                            </div>
                            <SectionHeader
                                sectionTitle="Get in Touch" />
                            <div className="space-y-2">
                                <p className="flex items-center gap-x-4"><span className="text-xl"><MdPhone></MdPhone></span><Link to="tel:+8801799999999">+880 1799-999999</Link></p>
                                <p className="flex items-center gap-x-4"><span className="text-xl"><MdEmail></MdEmail></span><Link to="mailto:contact@espresso-emporium.com">contact@espresso-emporium.com</Link></p>
                                <p className="flex items-center gap-x-4"><span className="text-xl"><MdLocationOn></MdLocationOn></span><span>72/2, Wall Street, King Road, Dhaka-1100</span></p>
                            </div>
                        </div>
                        <div className="w-6/12">
                            <div>
                                <SectionHeader
                                    sectionTitle="Connect with Us" />
                            </div>
                            <form onSubmit={handleFooterFormSubmit} className="space-y-5 mt-8">
                                <input className="w-full px-3 py-2 rounded hover:[box-shadow:_2px_2px_4px_#331A15BB,_-2px_-2px_4px_#331A15BB] duration-150" type="text" name="name" placeholder="Name" />
                                <br />
                                <input className="w-full px-3 py-2 rounded hover:[box-shadow:_2px_2px_4px_#331A15BB,_-2px_-2px_4px_#331A15BB] duration-150" type="email" name="email" placeholder="Email" />
                                <br />
                                <textarea className="w-full px-3 py-2 rounded hover:[box-shadow:_2px_2px_4px_#331A15BB,_-2px_-2px_4px_#331A15BB] duration-150" rows="4" name="message" placeholder="Message"></textarea>
                                <br />
                                <button type="submit" className="px-6 py-1.5 border-2 hover:text-white border-[#331A15] hover:bg-[#331A15] duration-200 rounded-full font-semibold hover:font-normal font-rancho">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div style={{ backgroundImage: 'url("https://i.ibb.co/g3RTg8D/24.jpg")' }} className="bg-cover">
                <p className="font-rancho text-center text-white py-4">Copyright 2023 &copy; Espresso Emporium ! All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;