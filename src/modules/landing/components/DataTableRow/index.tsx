import { TableCell, TableRow, TableSortLabel } from "@mui/material";
import { columns } from "../../utils/table-data";
import { Data } from "../../types/data-table";

type DataTableRowProps = {
  orderBy: keyof Data;
  setOrderBy: React.Dispatch<React.SetStateAction<keyof Data>>;
  order: "asc" | "desc";
  setOrder: React.Dispatch<React.SetStateAction<"desc" | "asc">>;
};

export const DataTableRow = (props: DataTableRowProps) => {
  const { setOrderBy, setOrder, order, orderBy } = props;
  console.log(order,orderBy);
  
  const handleSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
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
          {/* {column.id !== "name" ? (
            
          ) : (
            column.label
          )} */}
          <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : "asc"}
              onClick={() => handleSort(column.id)}
            >
              {column.label}
            </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
};
