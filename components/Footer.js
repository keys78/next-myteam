import Link from "next/link";
import LairAuth from "./LairAuth";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Footer = () => {
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            <footer className="sacramento">
                <section className="gen-wrapper footer-style py-10">
                    <div className="order-1 flex sm:flex-row flex-col sm:items-start items-center justify-between">
                        <div className="flex flex-col justify-between h-full">
                            <Link href='/'><a><img className="logo-adjust" src="/images/logo.svg" /></a></Link>
                            <div className="flex items-center justify-between sm:pt-0 pt-4" >
                                <Link href="/"><a className="font-normal">home</a></Link>
                                <Link href="/about"><a className="font-normal">about</a></Link>
                            </div>
                        </div>
                        <div className="order-2">
                            987 Hillcrest Lane<br />
                            <span onClick={() => setIsModal(!isModal)}>Irvine</span>, CA<br />
                            California 92714<br />
                            Call Us : 949-833-7432
                        </div>
                    </div>

                    <div className="order-3 flex lg:flex-col sm:flex-row flex-col justify-between lg:pt-0 pt-4">
                        <div className="flex items-center lg:justify-end sm:justify-start justify-center">
                            <div className="flex items-center lg:space-x-4 space-x-8 sm:mt-0 mt-5 sm:mb-0 mb-4">
                                <a href="#">
                                    <img src="./images/icon-facebook.svg" alt="Facebook" />
                                </a>
                                <a href="#">
                                    <img src="./images/icon-pinterest.svg" alt="Pinterest" />
                                </a>
                                <a href="#">
                                    <img src="./images/icon-twitter.svg" alt="Twitter" />
                                </a>
                            </div>
                        </div>

                        <div className="order-4 legal">
                            Copyright 2020. All Rights Reserved
                        </div>
                    </div>

                </section>
            </footer>

            <AnimatePresence>
            {isModal && 
            <LairAuth setIsModal={setIsModal} isModal={isModal} />}
            </AnimatePresence>
           
        </>
    );
}

export default Footer;