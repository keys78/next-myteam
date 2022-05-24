import axios from "axios";
import { useRouter } from 'next/router'


export const getStaticPaths = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    const paths = data && data.map(val => {
        return {
            params: { id: val.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    return {
        props: { people: data }
    }
}

const DetailsPage = ({ people }) => {
    const router = useRouter();
    return (
        <div className="gen-wrapper py-32">
            <div className="cursor-pointer pb-5" onClick={() => router.back()}> ~ back</div>
            <div className=" p-details">
                <p className="details-head ">{people.name.split(" ")[0]}&apos;s Details</p>
                <h1>{people.name}</h1>
                <h1>{people.email}</h1>
                <h1>{people.phone}</h1>
                <h1>{people.website}</h1>
            </div>

        </div>
    );
}

export default DetailsPage;