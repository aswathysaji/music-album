import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Collection } from "../../../../../schema";
import { DataTableRow } from "../DataTableRow";
import { DataTableBody } from "../DataTableBody";

type DataTableProps = {
  collections: Collection[];
};

export default function DataTable(props: DataTableProps) {
  const { collections } = props;
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius:'8px'
      }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="music-collections-listing-table">
          <TableHead>
            <DataTableRow />
          </TableHead>
          <DataTableBody collections={collections} />
        </Table>
      </TableContainer>
    </Paper>
  );
}
