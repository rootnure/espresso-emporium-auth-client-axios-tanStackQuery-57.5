import { Link } from 'react-router-dom';
import somethingWentWrong from '../../assets/animation_lns182vw.json';
import Lottie from "lottie-react";
import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { MdArrowBack } from 'react-icons/md';
import SectionHeader from '../../components/SectionHeader/SectionHeader';


const ErrorPage = () => {
    return (
        <>
            <NavBar />
            <main className='w-full min-h-96 flex flex-col items-center justify-center mt-40 mb-28'>
                <Helmet>
                    <title>Error!!!</title>
                </Helmet>
                <button className="font-rancho text-2xl [text-shadow:_2px_2px_8px_#242222EE]"><Link to="/" className="flex items-center py-4 ps-2 pe-3 hover:bg-[#D2B48C] rounded-lg duration-150 gap-x-3"><MdArrowBack></MdArrowBack> Back to home</Link></button>
                <Lottie className='w-72' animationData={somethingWentWrong} loop={true} />
                <div className="text-center">
                    <SectionHeader
                        sectionTitle='Oops!!! Something went wrong...' />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ErrorPage;