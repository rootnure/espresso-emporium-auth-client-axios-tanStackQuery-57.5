import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section style={{ backgroundImage: 'url("https://i.ibb.co/kHL4dPJ/3.png")' }} className="h-[820px] bg-fixed bg-cover bg-no-repeat">
            <div className="container mx-auto flex justify-end items-center h-full">
                <div className="text-white w-6/12 flex flex-col gap-y-6">
                    <h2 className="text-5xl font-rancho">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="leading-7">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <Link to='/' className="mt-2">
                        <button className="px-4 py-1 border border-[#E3B577] hover:border-white bg-[#E3B577] hover:bg-transparent text-[#242222] hover:text-white duration-100 font-rancho text-2xl">Learn More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;