import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader/SectionHeader";


const Register = () => {

    const navigate = useNavigate();
    const { createUser, logOut } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const newUser = { name, email, password };
        // console.log(newUser);

        createUser(name, email, password)
            .then(result => {
                // console.log(result);
                // new user has been created
                const createAt = result.user.metadata.creationTime;
                const user = { name, email, createAt, encryptedPassword: btoa(password) };
                fetch('https://espresso-emporium-auth-server-rootnure.vercel.app//user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            logOut();
                            toast.info('Account created successfully. Please Login!')
                            navigate('/login');
                        }
                    })
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <Helmet>
                <title>Register | Espresso Emporium</title>
            </Helmet>
            <main className="hero min-h-fit my-24">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <SectionHeader
                            sectionTitle="Please Register to stay connect with us" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@domain.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-center mb-8">Already have an account? <Link to='/login' className="underline font-semibold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;