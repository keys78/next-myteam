const Sponsors = () => {
    return (
        <div className="sacramento relative overflow-hidden">
            <img className="page-art-about-4" src="/images/bg-pattern-about-4.svg" alt="pattern" />
            <div className="gen-wrapper sm:py-40 py-20">
                <h1 className="lg:text-4xl text-3xl text-center sm:pb-20 pb-10 font-bold ">Some of our clients</h1>
                <div className="sponsors grid sm:grid-cols-5 grid-cols-1 gap-x-20 sm:gap-y-0 gap-y-10 items-center justify-between">
                    <img src="/images/logo-the-verge.png" alt="sponsor logo" />
                    <img src="/images/logo-jakarta-post.png" alt="sponsor logo" />
                    <img src="/images/logo-the-guardian.png" alt="sponsor logo" />
                    <img src="/images/logo-tech-radar.png" alt="sponsor logo" />
                    <img src="/images/logo-gadgets-now.png" alt="sponsor logo" />
                </div>
            </div>

        </div>
    );
}

export default Sponsors;