import { Link } from "react-router";
import Layout from "../../layouts/Layout";

export default function Home() {
  return (
    <Layout>
        <div>
            <h2>Home Page</h2>
            <ul>
                <li><Link to="/find-location/123">Noida</Link></li>
                <li><Link to="/find-location/121">Gurugram</Link></li>
                <li><Link to="/find-location/122">Mumbai</Link></li>
            </ul>
        </div>
    </Layout>
  )
}
