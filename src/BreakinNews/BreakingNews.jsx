import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200 shadow">
            <button className="btn btn-secondary">Secondary</button>
            <Marquee>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;