import { testimonial } from "../utiils/data";

const TestimonialCard = () => {
    const renderTestimonials = testimonial && testimonial.map((val, i) => (
        <div key={i} className="testimonial-container">
            <img className="quotes-art" src="/images/icon-quotes.svg" alt="" />
            <div className="testimonial">
                <p>{val.quote}</p>
                <h1>{val.name}</h1>
                <h2>{val.rank}</h2>
                <img src={val.icon} alt="person" />

            </div>
        </div>
    ))
    return (
        <div className="flex items-start justify-between pt-20" >
            {renderTestimonials}
        </div>
    );
}

export default TestimonialCard;
