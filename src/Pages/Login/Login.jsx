import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import NavBAr from "../../shared/NavBar/NavBAr";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
    const { logIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const handelSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password)
        logIn(email,password)
        .then(res =>{
            console.log(res.user)

          navigate(location?.state? location.state : '/')
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
                    <h2 className="text-center font-bold text-4xl mt-4">Login Your Account</h2>
                    <form onSubmit={handelSubmit} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center mt-4 font-semibold">Don't Have An Account? <Link className="text-blue-500" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;