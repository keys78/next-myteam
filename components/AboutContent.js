import Directors from "./Directors";

const AboutContent = () => {
    return (
        <>
                   

            <section className="jungle relative">
            <img className='page-art-about-2' src="/images/bg-pattern-about-2-contact-1.svg" />
                <div className="gen-wrapper lg:py-40 py-16">
                    <Directors/>
                </div>
                <img className='page-art-about-3' src="/images/bg-pattern-home-4-about-3.svg" />
            </section>
        </>
    );
}

export default AboutContent;