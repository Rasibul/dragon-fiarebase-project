import { useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import RightSiteNav from "../../shared/RightSiteNav/RightSiteNav";
import NavBAr from "../../shared/NavBar/NavBAr";


const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <NavBAr></NavBAr>
            <div className="grid md:grid-colos-4">
                <div className="col-span-3">
                    <h2>News Deatils</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>

        </div>
    );
};

export default News;