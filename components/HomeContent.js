import LineCard from "./LineCard";
import TestimonialCard from "./TestimonialCard";

const HomeContent = () => {
    return (
        <>
            <section className="sacramento relative">
                <div className="home-part-one flex lg:flex-row flex-col items-start justify-between gen-wrapper lg:py-40 py-16">
                    <div className="part-one-header">
                        <div className="style-append-2 sm:mb-16 mb-8"></div>
                        Build & manange distributed team like no one else.
                    </div>
                    <div className="line-card-wrapper">
                        <LineCard />
                    </div>
                </div>
                <img className='page-art-3' src="/images/bg-pattern-home-3.svg" />
            </section>

            <section className="relative">
                <img className='page-art-4' src="/images/bg-pattern-home-4-about-3.svg" />
                <div className="gen-wrapper lg:py-40 sm:py-28 py-28 relative">
                    <div className="testimonial-heading ">
                        <h1>
                            Delivering real results for top companies. Some of our <span class="accent-2">success stories.</span>
                        </h1>
                    </div>
                    <div>
                        <TestimonialCard />
                    </div>
                </div>
                <img className='page-art-5' src="/images/bg-pattern-home-5.svg" />
            </section>

        </>
    );
}

export default HomeContent;