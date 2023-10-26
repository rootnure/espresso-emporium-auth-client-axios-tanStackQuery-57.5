import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";


const Users2 = () => {

    const { isPending, isError, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://espresso-emporium-auth-server-rootnure.vercel.app/user');
            return res.json();
        }
    })

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     axios.get('https://espresso-emporium-auth-server-rootnure.vercel.app/user')
    //         .then(data => setUsers(data.data))
    // }, []);


    const handleDeleteUser = _id => {
        // make sure user is confirmed to delete
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#338d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://espresso--emporium-auth-server-rootnure.vercel.app/user/${_id}`,)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            // remove the user from the UI
                            // const remaining = users.filter(user => user._id !== _id);
                            // setUsers(remaining);
                            // successful delete confirmation
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    if (isPending) {
        return (
            <>
                <main className="my-24">
                    <div className="h-24 flex justify-center items-center text-blue-400">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                </main>
            </>
        )
    }

    if (isError) {
        return (
            <>
                <main className="my-24">
                    <div className="h-24 flex justify-center items-center">
                        <div className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error! Task failed successfully.</span>
                        </div>
                    </div>
                </main>
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>Users | Espresso Emporium</title>
            </Helmet>
            <main className="my-24">
                <section className="container mx-auto pt-8">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* caption */}
                            <caption className="font-bold text-3xl">All users info</caption>
                            {/* head */}
                            <thead>
                                <tr className="uppercase text-center">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Last Logged In</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {
                                    users.map((user, idx) => <tr key={user._id}>
                                        <th>{idx + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createAt}</td>
                                        <td>{user.lastLoggedAt}</td>
                                        <td>
                                            <button
                                                title="Edit"
                                                className="btn border-2 !border-blue-500 bg-blue-500 text-white hover:text-blue-500 hover:bg-transparent me-1.5"><AiFillEdit></AiFillEdit></button>
                                            <button
                                                title="Delete"
                                                onClick={() => handleDeleteUser(user._id)}
                                                className="btn border-2 !border-red-500 bg-red-500 text-white hover:text-red-500 hover:bg-transparent "><AiTwotoneDelete></AiTwotoneDelete></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Users2;