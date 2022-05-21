import Link from "next/link";

const GetStarted = () => {
    return (
        <>
            <section className="lightCoral relative">
                <div className="flex sm:flex-row flex-col items-center justify-between pink-width gen-wrapper 2xl:py-16 py-24">
                    <div className="get-started">
                        Ready to get started?
                    </div>
                    <Link href="/contact-us"><a>
                        <h1 className="contact-us-2">contact us</h1>
                    </a>
                    </Link>
                </div>
                <img className='page-art-6' src="/images/bg-pattern-home-6-about-5.svg" />
            </section>
        </>
    );
}

export default GetStarted;