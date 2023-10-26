import SectionHeader from "../SectionHeader/SectionHeader";


const Instagram = () => {
    const instagramImages = [
        "https://i.ibb.co/vX2M8vR/cup1.png",
        "https://i.ibb.co/ZKy7Mgh/cup2.png",
        "https://i.ibb.co/YNpkvFy/cup3.png",
        "https://i.ibb.co/JFGWhfQ/cup4.png",
        "https://i.ibb.co/PYcqmcm/cup5.png",
        "https://i.ibb.co/pvBX5Yr/cup6.png",
        "https://i.ibb.co/vJr6HDB/cup7.png",
        "https://i.ibb.co/x1JfRVT/cup8.png",
    ]

    return (
        <section className="container mx-auto px-20">
            <div className="text-center">
                <SectionHeader
                    sectionTop="Follow Us Now"
                    sectionTitle="Follow on Instagram"></SectionHeader>
            </div>
            <div className="grid grid-cols-4 gap-4 my-12">
                {
                    instagramImages.map((image, idx) => <img key={idx} src={image} className="w-full" />)
                }
            </div>

        </section>
    );
};

export default Instagram;