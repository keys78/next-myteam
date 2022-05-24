import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";


const Layout = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }


    return (
        <div className="layout-wrapper">
            <Navbar />
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
            >
                {children}
            </motion.div>

            <Footer />
        </div>
    );
}

export default Layout;