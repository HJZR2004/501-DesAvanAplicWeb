/** @jsxImportSource react */
import { useContext } from "react";
import { UserContext } from "./UserContext";
import './RBAC.css'

const Dashboard = () => {
  const { user, login } = useContext(UserContext);

  // Selector embebido para cambiar de rol
  const RoleSwitcherInline = () => {
    return (
      <div className="mb-4">
        <label htmlFor="role-select" className="mr-2 font-semibold">Cambiar Rol:</label>
        <select
          id="role-select"
          value={user.role}
          onChange={(e) => login(e.target.value as "employee" | "manager" | "admin")}
          className="bg-gray-700 text-white px-2 py-1 rounded"
        >
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    );
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <RoleSwitcherInline />

      {user.role === "employee" && (
        <div>
          <h2 className="text-xl font-semibold">Employee View</h2>
          <p>Submitted Travel Requests</p>
        </div>
      )}

      {user.role === "manager" && (
        <div>
          <h2 className="text-xl font-semibold">Manager View</h2>
          <p>Pending Travel Requests</p>
        </div>
      )}

      {user.role === "admin" && (
        <div>
          <h2 className="text-xl font-semibold">Admin View</h2>
          <p>User Management</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
