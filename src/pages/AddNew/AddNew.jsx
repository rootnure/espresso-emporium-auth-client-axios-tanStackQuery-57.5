import { Helmet } from "react-helmet-async";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const AddNew = () => {

    const coffeeFormFields = [
        { id: "coffeeName", label: "Name", type: "text", defaultValue: "", placeholder: "Enter coffee name" },
        { id: "coffeeQuantity", label: "Quantity", type: "number", defaultValue: "", placeholder: "Enter coffee quantity" },
        { id: "coffeeChef", label: "Chef", type: "text", defaultValue: "", placeholder: "Enter coffee chef" },
        { id: "coffeeSupplier", label: "Supplier", type: "text", defaultValue: "", placeholder: "Enter coffee supplier" },
        { id: "coffeeCategory", label: "Category", type: "text", defaultValue: "", placeholder: "Enter coffee category" },
        { id: "coffeeDetails", label: "Details", type: "text", defaultValue: "", placeholder: "Enter coffee details" },
        { id: "coffeePhoto", label: "Photo URL", type: "text", defaultValue: "", placeholder: "Enter coffee photo url (Direct Link)" },
        { id: "coffeePrice", label: "Price", type: "number", defaultValue: "", placeholder: "Enter coffee price" }
    ]

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.coffeeName.value;
        const quantity = form.coffeeQuantity.value;
        const chef = form.coffeeChef.value;
        const supplier = form.coffeeSupplier.value;
        const category = form.coffeeCategory.value;
        const details = form.coffeeDetails.value;
        const photo = form.coffeePhoto.value;
        const price = form.coffeePrice.value;
        form.reset();
        const newCoffee = { name, quantity, chef, supplier, category, details, photo, price }
        console.log(newCoffee);

        fetch('https://espresso-emporium-auth-server-rootnure.vercel.app//coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Coffee added successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <>
            <Helmet>
                <title>Add New Coffee | Espresso Emporium</title>
            </Helmet>
            <main className="my-24 bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/hB6Tp24/11.png")' }}>
                <div className="container mx-auto px-20">
                    <section className="pt-12 pb-6">
                        <button className="font-rancho text-2xl [text-shadow:_2px_2px_8px_#242222EE]"><Link to="/" className="flex items-center py-4 ps-2 pe-3 hover:bg-[#D2B48C] rounded-lg duration-150 gap-x-3"><MdArrowBack></MdArrowBack> Back to home</Link></button>
                    </section>
                    <section className="bg-[#F4F3F0] rounded p-12">
                        <div className="text-center my-4">
                            <SectionHeader
                                sectionTitle="Add New Coffee" />
                            <p className="mt-4 px-8 text-lg">Experience the art of coffee at its finest with <span className="font-rancho text-2xl">Espresso Emporium</span>. Journey begins at the world&apos;s finest coffee farms, meticulously brewed by our expert baristas. Explore a world of flavor and passion in every cup.</p>
                        </div>

                        {/* form */}
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                            {
                                coffeeFormFields.map(field => <div
                                    key={field.id}
                                    className="space-y-2">
                                    <label
                                        className="font-bold"
                                        htmlFor={field.id}>{field.label}</label>
                                    <input
                                        className="p-2 w-full rounded-md"
                                        type={field.type}
                                        name={field.id}
                                        id={field.id}
                                        defaultValue={field.defaultValue}
                                        placeholder={field.placeholder}
                                        required />
                                </div>)
                            }
                            <div className="col-span-2">
                                <button className="font-rancho text-2xl text-center w-full border-2 border-[#331A15] py-2 rounded-md bg-[#D2B48C] hover:bg-[#D2B48CDD] duration-75 text-[#331A15]" type="submit">Add Coffee</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
};

export default AddNew;