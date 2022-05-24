import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export const getStaticProps = async () => {

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    return {
        props: { people: data }
    }
}

const Puzzle = ({ people }) => {
    // const router = useRouter();

    // useEffect(() => {
    //     router.back();
    // }, [])

    const renderPeople = people && people.map((val, i) => (
        <Link href={`/puzzle/${val.id}`} key={i}>
            <div className="rdp">
                <h1>{val.name}</h1>
            </div>
        </Link>
    ))
    return (

        
        <div className="gen-wrapper py-40">
            <h1 className="text-center text-4xl pb-6"><span className="italic"> Welcome to the lair</span>  ✌️&#128521;</h1>
            {renderPeople}
        </div>
    );
}

export default Puzzle;