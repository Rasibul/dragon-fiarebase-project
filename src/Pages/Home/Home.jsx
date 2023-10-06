import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../BreakinNews/BreakingNews";
import Header from "../../shared/Header/Header";
import LeftSiteNav from "../../shared/LeftSiteNav/LeftSiteNav";
import NavBAr from "../../shared/NavBar/NavBAr";
import RightSiteNav from "../../shared/RightSiteNav/RightSiteNav";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBAr></NavBAr>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="">
                    <LeftSiteNav></LeftSiteNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;