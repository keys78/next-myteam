import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            {/* <div className="layout"> */}
                <Navbar />
                {children}
                <Footer />
            {/* </div> */}

        </div>
    );
}

export default Layout;