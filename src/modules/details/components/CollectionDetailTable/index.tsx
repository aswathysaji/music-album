import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useCollectionDetails } from "../../hooks/use-collection-details";
import { formatDuration, formatFileSize } from "../../../../../utils";
import { Column, Data, createData } from "../../types/table";
import { useState } from "react";
import { TableSortLabel } from "@mui/material";

const columns: readonly Column[] = [
  { id: "title", label: "Song", minWidth: 412 },
  { id: "performers", label: "Performers", minWidth: 500 },
  {
    id: "duration",
    label: "Duration",
    minWidth: 300,
    align: "left",
  },
  {
    id: "size",
    label: "Size",
    minWidth: 180,
    align: "left",
  },
];

export default function CollectionDetailsTable() {
  const { collection, isLoading, error } = useCollectionDetails();
  const [orderBy, setOrderBy] = useState<keyof Data>("title");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  if (!collection) return;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  const handleSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const rows = collection.songs.map((song) => {
    return createData(
      song.title,
      song.performers.join(", "),
      formatDuration(song.durationInSeconds),
      formatFileSize(song.sizeInBytes)
    );
  });
  const sortedRows = [...rows].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        borderRadius: "8px",
      }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
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
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSort(column.id)}
                    style={{ color: "#29313A" }}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        sx={{
                          p: "14px 12px",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#29313A",
                          lineHeight: "20px",
                          borderBottomColor: "#E1E4E9",
                        }}
                        key={column.id}
                        align={column.align}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
