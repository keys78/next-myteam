
const Hero = () => {
    return (
        <>
            <img className='page-art' src="/images/bg-pattern-home-1.svg" />
            
            <section className="flex lg:text-left text-center lg:flex-row flex-col items-start justify-between gen-wrapper sm:pt-32 pt-24 lg:pb-64 pb-40">
                <div className="w-full">
                    <h1 className="hero-heading">Find the< br /> best <span className="accent">talent</span></h1>
                </div>
                <div className="w-full flex items-center lg:justify-end  justify-center lg:pt-0 pt-6">
                    <div className="hero-description">
                        <div className="style-append mb-16"></div>
                        Finding the right people and building high performing teams can be
                        hard. Most companies aren&apos;t tapping into the abundance of global
                        talent. We&apos;re about to change that.
                    </div>
                </div>
            </section>

            <div className="gen-wrapper relative">
                <img className='page-art-2' src="/images/bg-pattern-home-2.svg" />
            </div>
        </>
    );
}

export default Hero; 