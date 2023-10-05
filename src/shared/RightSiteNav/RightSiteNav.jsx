import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import Quazone1  from '../../assets/qZone1.png'
import Quazone2  from '../../assets/qZone2.png'
import Quazone3  from '../../assets/qZone3.png'

const RightSiteNav = () => {
    return (
        <div>
            <div className='space-y-3 p-4'>
                <h2 className="text-3xl">Login with</h2>
                <button className="btn button-outline w-full text-blue-400">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn button-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='space-y-3 p-4'>
                <h2 className="text-3xl">Find Us</h2>
                <a className="flex p-4 items-center gap-2 text-lg border rounded-t-lg" href=''>
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center gap-2 text-lg border rounded-t-lg" href=''>
                   <FaTwitter></FaTwitter>
                   Twitter
                </a>
                <a className="flex p-4 items-center gap-2 text-lg border rounded-b-lg" href=''>
                   <FaInstagram></FaInstagram>
                   InstaGram
                </a>
                
            </div>
            <div className='space-y-3 p-4'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={Quazone1} alt="" />
                <img src={Quazone2} alt="" />
                <img src={Quazone3} alt="" />
                
            </div>

        </div>
    );
};

export default RightSiteNav;