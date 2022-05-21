import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <section className="flex items-center justify-between gen-wrapper pt-16 text-xl">
            <div className="flex space-x-3 items-center">
                <Link href={'/'}><a><img className="pr-10" src="/images/logo.svg" /></a></Link>
                <Link href="/"><a className="font-normal">home</a></Link>
                <Link href="/about"><a className="font-normal">about</a></Link>
            </div>
            <Link href="/contact-us"><a>
                <h1 className="contact-us">contact us</h1>
            </a>
            </Link>
        </section>
    );
}

export default Navbar;