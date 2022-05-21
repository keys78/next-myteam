import { useState } from 'react'
import Link from "next/link";

const Navbar = () => {
    const [isActiveBurger, setIsActiveBurger] = useState(false)

    return (
        <>
            <nav className="flex items-center justify-between gen-wrapper pt-16 text-xl">
                <div className="flex space-x-3 items-center">
                    <Link href='/'><a><img className="sm:pr-10 pr-0 " src="/images/logo.svg" /></a></Link>
                    <Link href="/"><a className="font-normal hide-mobile">home</a></Link>
                    <Link href="/about"><a className="font-normal hide-mobile" >about</a></Link>
                </div>
                <Link href="/contact-us"><a>
                    <h1 className="contact-us hide-mobile">contact us</h1>
                </a>
                </Link>
                <div className="toggle-side">
                <div onClick={() => setIsActiveBurger(!isActiveBurger)} className={`${isActiveBurger ? 'hamburger is-active' : 'hamburger'}`}  id="hamburger-9">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                </div>
                
            </nav>

            {isActiveBurger &&
                <div className="mobile-nav">
                    <Link href="/"><a onClick={() => setIsActiveBurger(!isActiveBurger)}  className="font-normal show-hide-mobile">home</a></Link> <br/>
                    <Link href="/about"><a onClick={() => setIsActiveBurger(!isActiveBurger)}  className="font-normal show-hide-mobile" >about</a></Link><br/>
                    <Link href="/contact-us"><a onClick={() => setIsActiveBurger(!isActiveBurger)}  className="font-normal show-hide-mobile" >contact us</a></Link>
                </div>
            }

        </>
    );
}

export default Navbar;


