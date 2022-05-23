import { features } from "../utiils/data";

const ContactUsInfo = () => {

    const renderContactDetails = features && features.map((val, i) => (
        <div key={i} className="line-card-contact">
            <div>
                <img src={val.icon} alt="icons" />
            </div>
            <div>
                <p className="feature-description text-lg pt-4 font-bold">{`${val.contact}`}</p>
            </div>
        </div>
    ));


    return (
        <>
            <div className="w-full re-ad">
                <div className="contact-us-info lg:text-left text-center">
                    <h1 className="about-heading ">Contact</h1>
                    <h2 className="ask-about">Ask us about</h2>
                </div>
                <div className="contact-us-info-2"> {renderContactDetails}</div>
            </div>

            <img className='page-art' src="/images/bg-pattern-about-2-contact-1.svg" />
        </>
    );
}

export default ContactUsInfo;