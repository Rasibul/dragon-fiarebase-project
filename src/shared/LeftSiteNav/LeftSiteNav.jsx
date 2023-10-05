import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSiteNav = () => {
    const [categories,setCategories] = useState([])

    useEffect (() => {
        fetch ('categories.json')
        .then (res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-5">
            <h2>All Catagories</h2>
            {
                categories.map(catagoroy =><Link to={`/catagoroy/${catagoroy.id}`} className="block ml-4 text-xl font-semibold " key={catagoroy.id}>{catagoroy.name}</Link>)
            }
        </div>
    );
};

export default LeftSiteNav;