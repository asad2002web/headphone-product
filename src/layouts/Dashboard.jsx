import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is the dashboard</p>
      <Outlet />
    </div>
  )
}

export default Dashboard