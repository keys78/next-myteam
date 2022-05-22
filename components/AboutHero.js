const AboutHero = () => {
    return ( 
        <>
        <section className="flex xl:text-left text-center xl:flex-row flex-col items-start justify-between gen-wrapper sm:pt-32 pt-24 xl:pb-40 sm:pb-10 pb-40">
            <div className="xl:w-2/12 w-full">
                <h1 className="about-heading xl:text-left text-center">About</h1>
            </div>
            <div className="w-full flex items-center xl:justify-end  justify-center xl:pt-0 pt-6">
                <div className="about-description">
                    <div className="hide-append-2 style-append-2 mb-16"></div>
                    We help companies build dynamic teams made up of top global talent. 
                    Using our network of passionate professionals we drive innovation and deliver incredible outcomes. 
                    Talented, diverse teams shape the best products and experiences. 
                    We&apos;ll bring those teams to you.
                </div>
            </div>
        </section>

        <div className="relative">
            <img className='page-art-about' src="/images/bg-pattern-about-1-mobile-nav-1.svg" />
        </div>
    </>
     );
}
 
export default AboutHero;