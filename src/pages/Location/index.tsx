import { useNavigate, useParams } from "react-router";
import Layout from "../../layouts/Layout";

export default function Location() {

    const { id } = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Layout>
            <div>
                <h2>Find Location</h2>
                <p>{id}</p>
                <button onClick={handleClick}>Back to Home</button>
            </div>
        </Layout>
    )
}
