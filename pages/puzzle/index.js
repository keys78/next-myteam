import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";


export const getStaticProps = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    return {
        props: { people: data }
    }
}

const Puzzle = ({ people }) => {

    const renderPeople = people && people.map((val, i) => (
        <motion.div key={i}
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96], delay: i * 0.1 }}
        >
            <Link href={`/puzzle/${val.id}`} key={i}>
                <div className="rdp">
                    <h1>{val.name}</h1>
                </div>
            </Link>
        </motion.div>

    ))
    return (


        <div className="gen-wrapper py-40">
            <h1 className="text-center text-4xl pb-6"><span className="italic"> Welcome to the lair</span>  ✌️&#128521;</h1>
            {renderPeople}
        </div>
    );
}

export default Puzzle;