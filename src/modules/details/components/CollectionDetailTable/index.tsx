import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useCollectionDetails } from "../../hooks/use-collection-details";
import {formatDuration, formatFileSize} from "../../../../../utils";

interface Column {
  id: "title" | "performers" | "duration" | "size";
  label: string;
  minWidth?: number;
  align?: "left";
}

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

interface Data {
  title: string;
  performers: string;
  duration: string;
  size: string;
}

function createData(
  title: string,
  performers: string,
  duration: string,
  size: string
): Data {
  return { title, performers, duration, size };
}
export default function CollectionDetailsTable() {
  const { collection, isLoading, error } = useCollectionDetails();
  if (!collection) return;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  const rows = collection.songs.map((song) => {
    return createData(
      song.title,
      song.performers.join(', '),
      formatDuration(song.durationInSeconds),
      formatFileSize(song.sizeInBytes)
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
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    console.log(index < columns.length);
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
