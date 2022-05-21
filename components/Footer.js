import Link from "next/link";

const Footer = () => {
    return (
        <footer className="sacramento">
            <section className="gen-wrapper footer-style">
                <div className="order-1">
                    <Link href={'/'}><a><img src="/images/logo.svg" /></a></Link>
                    <div className="flex items-center justify-between" >
                        <Link href="/"><a className="font-normal">home</a></Link>
                        <Link href="/about"><a className="font-normal">about</a></Link>
                    </div>
                </div>
                <div className="order-2">
                    987 Hillcrest Lane<br />
                    Irvine, CA<br />
                    California 92714<br />
                    Call Us : 949-833-7432
                </div>
                <div className="order-3">
                    <div class="flex items-center space-x-4">
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
            </section>
        </footer>

    );
}

export default Footer;