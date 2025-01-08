import { Link, Outlet } from "react-router";
import Layout from "../../layouts/Layout";

export default function Dashboard() {
  return (
    <Layout>
        <h2>Dashboard Here</h2>
        <div>
            <Link to={"/dashboard/courses"}>Courses</Link>
            <Link to={"/dashboard/reports"}>Reports</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </Layout>
  )
}
