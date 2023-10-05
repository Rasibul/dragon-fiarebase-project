import { Link } from "react-router-dom";
import userDefaultPic from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const NavBAr = () => {
    const { user,logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
        .then()
        .catch()
    }
    return (
        <div>
            <nav className="flex justify-evenly items-center gap-5 py-5">
                <ul className="flex gap-5 ">
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/carrer'>
                            Carrer
                        </Link>
                    </li>
                </ul>
                <div className="flex gap-3 ">
                    <img className="w-10 h-10" src={userDefaultPic} alt="s" />
                    {
                        user ? <button onClick={handelLogOut} className="bg-[#403F3F] text-white px-4 py-2 rounded">LogOut</button>
                            :
                            <Link to='/login' className="bg-[#403F3F] text-white px-4 py-2 rounded">Login</Link>
                    }

                </div>
            </nav>
        </div>
    );
};

export default NavBAr;