import { Helmet } from "react-helmet-async";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';


const UpdateExisting = () => {

    const coffee = useLoaderData();

    const { _id, name: oldName, quantity: oldQuantity, chef: oldChef, supplier: oldSupplier, category: oldCategory, details: oldDetails, photo: oldPhoto, price: oldPrice } = coffee;

    const coffeeFormFields = [
        { id: "updateCoffeeName", label: "Name", type: "text", defaultValue: oldName, placeholder: "Enter coffee name" },
        { id: "updateCoffeeQuantity", label: "Quantity", type: "number", defaultValue: oldQuantity, placeholder: "Enter coffee quantity" },
        { id: "updateCoffeeChef", label: "Chef", type: "text", defaultValue: oldChef, placeholder: "Enter coffee chef" },
        { id: "updateCoffeeSupplier", label: "Supplier", type: "text", defaultValue: oldSupplier, placeholder: "Enter coffee supplier" },
        { id: "updateCoffeeCategory", label: "Category", type: "text", defaultValue: oldCategory, placeholder: "Enter coffee category" },
        { id: "updateCoffeeDetails", label: "Details", type: "text", defaultValue: oldDetails, placeholder: "Enter coffee details" },
        { id: "updateCoffeePhoto", label: "Photo", type: "text", defaultValue: oldPhoto, placeholder: "Enter coffee photo" },
        { id: "updateCoffeePrice", label: "Price", type: "number", defaultValue: oldPrice, placeholder: "Enter coffee price" }
    ]

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.updateCoffeeName.value;
        const quantity = form.updateCoffeeQuantity.value;
        const chef = form.updateCoffeeChef.value;
        const supplier = form.updateCoffeeSupplier.value;
        const category = form.updateCoffeeCategory.value;
        const details = form.updateCoffeeDetails.value;
        const photo = form.updateCoffeePhoto.value;
        const price = form.updateCoffeePrice.value;
        form.reset();
        const updatedCoffee = { name, quantity, chef, supplier, category, details, photo, price }
        console.log(updatedCoffee);

        /* // using axios */
        axios.put(`https://espresso-emporium-auth-server-rootnure.vercel.app/coffee/${_id}`, updatedCoffee)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

        /* // using fetch
        fetch(`https://espresso-emporium-auth-server-rootnure.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
             */
    }


    return (
        <>
            <Helmet>
                <title>Update Coffee Info | Espresso Emporium</title>
            </Helmet>
            <main className="my-28 bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/hB6Tp24/11.png")' }}>
                <div className="container mx-auto px-20">
                    <section className="pt-12 pb-6">
                        <button className="font-rancho text-2xl [text-shadow:_2px_2px_8px_#242222EE]"><Link to="/" className="flex items-center py-4 ps-2 pe-3 hover:bg-[#D2B48C] rounded-lg duration-150 gap-x-3"><MdArrowBack></MdArrowBack> Back to home</Link></button>
                    </section>
                    <section className="bg-[#F4F3F0] rounded p-12">
                        <div className="text-center my-6 space-y-6">
                            <SectionHeader
                                sectionTitle="Update Existing Coffee Details" />
                            <p className="mt-4 px-8 text-lg">Experience the art of coffee at its finest with <span className="font-rancho text-2xl">Espresso Emporium</span>. Journey begins at the world&apos;s finest coffee farms, meticulously brewed by our expert baristas. Explore a world of flavor and passion in every cup.</p>
                        </div>

                        {/* form */}
                        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-6">
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
                                <button className="font-rancho text-2xl text-center w-full border-2 border-[#331A15] py-2 rounded-md bg-[#D2B48C] hover:bg-[#D2B48CDD] duration-75 text-[#331A15]" type="submit">Update Coffee Info</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
};

export default UpdateExisting;