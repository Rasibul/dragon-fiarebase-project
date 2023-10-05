import { Link } from "react-router-dom";
import NavBAr from "../../shared/NavBar/NavBAr";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";



const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handelSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)     
        createUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

   

    return (
        <div>
            <NavBAr></NavBAr>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-center font-bold text-3xl mt-4">Register your account</h2>
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center mt-4 font-semibold">Alredy Have An Account? <Link className="text-blue-500" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;