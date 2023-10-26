import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Instagram from "../../components/Instagram/Instagram";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const Home = () => {

    const allCoffee = useLoaderData();

    const [coffees, setCoffees] = useState(allCoffee);

    const handleUpdateUIAfterDelete = id => {
        const remaining = coffees.filter(coffee => coffee._id !== id);
        setCoffees(remaining);
    }

    return (
        <>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>
            <main className="my-24">
                <Banner />
                <BannerBottom />
                <PopularProducts
                    coffees={coffees}
                    handleUpdateUIAfterDelete={handleUpdateUIAfterDelete}
                />
                <Instagram />
            </main>
        </>
    );
};

export default Home;