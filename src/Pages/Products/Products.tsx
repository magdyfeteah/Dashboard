
import "./products.scss";
import DataTable from "../../Components/DataTable/DataTable";

import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 120,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 150,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.inStock ? "in" : "out"}`}>
          <span>{params.row.inStock ? "in" : "out"}</span>
        </div>
      );
    },
  },
];

function Products() {

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
    </div>
  );
}

export default Products;
