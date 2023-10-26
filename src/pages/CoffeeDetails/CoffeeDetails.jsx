import { Helmet } from "react-helmet-async";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

    const coffee = useLoaderData();

    const { name, quantity, chef, supplier, category, details, photo, price } = coffee;

    return (
        <>
            <Helmet>
                <title>{name} Details | Espresso Emporium</title>
            </Helmet>
            <main className="my-28 bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/hB6Tp24/11.png")' }}>
                <div className="container mx-auto px-20">
                    <section className="pt-12 pb-6">
                        <button className="font-rancho text-2xl [text-shadow:_2px_2px_8px_#242222EE]"><Link to="/" className="flex items-center py-4 ps-2 pe-3 hover:bg-[#D2B48C] rounded-lg duration-150 gap-x-3"><MdArrowBack></MdArrowBack> Back to home</Link></button>
                    </section>
                    <section className="bg-[#F4F3F0] rounded p-12 grid grid-cols-2 gap-12">
                        <figure>
                            <img src={photo} alt={name} className="w-6/12 mx-auto" />
                        </figure>
                        <div className="flex items-center">
                            <div>
                                <div>
                                    <SectionHeader
                                        sectionTitle="Niceties" />
                                </div>
                                <div className="space-y-2.5 mt-10 text-lg">
                                    <p><span className="font-bold">Name: </span><span>{name}</span></p>
                                    <p><span className="font-bold">Quantity: </span><span>{quantity} Cups</span></p>
                                    <p><span className="font-bold">Chef: </span><span>{chef}</span></p>
                                    <p><span className="font-bold">Supplier: </span><span>{supplier}</span></p>
                                    <p><span className="font-bold">Category: </span><span>{category}</span></p>
                                    <p><span className="font-bold">Details: </span><span>{details}</span></p>
                                    <p><span className="font-bold">Price: </span><span>{price} Taka</span></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default CoffeeDetails;