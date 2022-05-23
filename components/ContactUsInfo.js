import { features } from "../utiils/data";

const ContactUsInfo = () => {

    const renderContactDetails = features && features.map((val, i) => (
        <div key={i} className="line-card">
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
            <div className="w-full contact-us-info">
                <h1 className="about-heading xl:text-left text-center">Contact</h1>
                <h2 className="ask-about">Ask us about</h2>
                <div> {renderContactDetails}</div>
            </div>

            <img className='page-art' src="/images/bg-pattern-about-2-contact-1.svg" />
        </>
    );
}

export default ContactUsInfo;