import  { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./users.scss";
import { userRows } from "../../data";

import DataTable from "../../Components/DataTable/DataTable";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    type: "string",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    type: "string",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    type: "string",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 150,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 120,
  },
];

const Users = () => {
  const [rows] = useState(userRows);


  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
      </div>
      <DataTable slug="users" columns={columns} rows={rows} />
    </div>
  );
};

export default Users;
