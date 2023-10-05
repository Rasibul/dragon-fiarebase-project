
const NewsCard = ({ news }) => {
    const { title, thumbnail_url, details } = news
    return (
        <div className="card  bg-base-100 shadow-xl">
            <img src={thumbnail_url} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;