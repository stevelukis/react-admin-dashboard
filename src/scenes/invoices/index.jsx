import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import Header from "../../components/Header.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData.js";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of invoices" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          columns={columns}
          rows={mockDataInvoices}
          sx={{
            border: "none",
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
