import React, { useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: Row[];
  slug: string;
};
type Row = {
  id: number;
  [key: string]: any;
};

const DataTable: React.FC<Props> = (props) => {
  const [rows, setRows] = useState(props.rows);

  const handleDelete = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    console.log("delete");
  };

  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div
            className="delete"
            onClick={() => handleDelete(params.row.id as number)}
          >
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <Box>
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  );
};

export default DataTable;
