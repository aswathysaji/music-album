import { TableCell, TableRow } from "@mui/material";
import { columns } from "../../utils/table-data";

export const DataTableRow = () => {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          sx={{
            p: "12px 8px",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
            color: "#29313A",
            borderBottomColor: "#C2CAD3",
          }}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};
