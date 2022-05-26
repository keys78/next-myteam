import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { variants } from "../utiils/Animations";


const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <motion.main
            exit={{ opacity: 0 }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
}

export default Layout;