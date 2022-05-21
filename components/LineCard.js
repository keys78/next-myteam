import { features } from "../utiils/data";

const LineCard = () => {

    const renderFeatures = features && features.map((val, i) => (
        <div key={i} className="line-card">
            <div>
                <img src={val.icon} alt="icons" />
            </div>
            <div>
                <h1 className="feature-heading">{val.title}</h1>
                <p className="feature-description">{`${val.desc}`}</p>
            </div>
        </div>
    ))


    return (
        <div>
            {renderFeatures}
        </div>
    );
}

export default LineCard;