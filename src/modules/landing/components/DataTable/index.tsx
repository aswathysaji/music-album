import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useCollectionsFetch } from "../../hooks/use-collections-list";
import { ReactNode } from "react";
import { Button } from "@mui/material";
import View from "../../../../../public/icons/View";
import {  useNavigate } from "react-router-dom";

interface Column {
  id:
    | "name"
    | "count"
    | "type"
    | "duration"
    | "size"
    | "released_on"
    | "view_details";
  label: string;
  minWidth?: number;
  align?: "left";
}

const columns: readonly Column[] = [
  { id: "name", label: "Collection Name", minWidth: 588 },
  { id: "type", label: "Type", minWidth: 120 },
  {
    id: "count",
    label: "Song Count",
    minWidth: 120,
    align: "left",
  },
  {
    id: "duration",
    label: "Duration",
    minWidth: 120,
    align: "left",
  },
  {
    id: "size",
    label: "Size",
    minWidth: 120,
    align: "left",
  },
  {
    id: "released_on",
    label: "Released on",
    minWidth: 200,
    align: "left",
  },
  {
    id: "view_details",
    label: "",
    minWidth: 124,
    align: "left",
  },
];

interface Data {
  name: ReactNode;
  type: "EP" | "Album" | "Single";
  count: number;
  duration: number;
  size: number;
  released_on: string;
  view_details: ReactNode;
}

function createData(
  name: ReactNode,
  type: "EP" | "Album" | "Single",
  count: number,
  duration: number,
  size: number,
  released_on: string,
  view_details: ReactNode
): Data {
  return { name, type, count, duration, size, released_on, view_details };
}
export default function DataTable() {
  const { collections, isLoading, error } = useCollectionsFetch();
  const navigate = useNavigate()
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  const rows = collections.map((collection) => {
    return createData(
      <div>
        <p>{collection.name}</p>
        <p style={{ color: "#677A90" }}>{collection.artist}</p>
      </div>,
      collection.type,
      collection.songCount,
      collection.durationInSeconds,
      collection.sizeInBytes,
      collection.releasedOn,
      <Button
        aria-label="view-details"
        startIcon={<View />}
        sx={{
          textTransform: "none",
          color: "#025992",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "20px",
          p: "4px",
        }}
        onClick={()=>{
          navigate(`/details/${collection.id}`)
        }}
      >
        View details
      </Button>
    );
  });
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: "none" }}>
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
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.duration}
                >
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
