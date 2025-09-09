import React from "react";
import { useUsers } from "../../hooks/useUser";

const Users: React.FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {users.map((u) => (
          <tr key={u._id}>
            <td></td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
