import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Collection } from "../../../../../schema";
import { ReactNode } from "react";
import { Data } from "../../types/data-table";
import {
  formatDateTime,
  formatDuration,
  formatFileSize,
} from "../../../../../utils";
import View from "../../../../../public/icons/View";
import { columns } from "../../utils/table-data";

type DataTableBodyProps = {
  collections: Collection[];
  order: "asc" | "desc";
  orderBy: keyof Data;
};

function createData(
  name: ReactNode,
  type: "EP" | "Album" | "Single",
  count: number,
  duration: string,
  size: string,
  released_on: string,
  view_details: ReactNode
): Data {
  return { name, type, count, duration, size, released_on, view_details };
}

export const DataTableBody = (props: DataTableBodyProps) => {
  const { collections, order, orderBy } = props;
  const navigate = useNavigate();
  if (!collections) return;
  const rows = collections.map((collection) => {
    return createData(
      <>
        <p>{collection.name}</p>
        <p style={{ color: "#677A90" }}>{collection.artist}</p>
      </>,
      collection.type,
      collection.songCount,
      formatDuration(collection.durationInSeconds),
      formatFileSize(collection.sizeInBytes),
      formatDateTime(collection.releasedOn),
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
        onClick={() => {
          navigate(`/details/${collection.id}`);
        }}
      >
        View details
      </Button>
    );
  });
  const sortedRows = [...rows].sort((a, b) => {
    if (orderBy === "view_details") return 0;
    if (orderBy === "name") {
      if (
        (a[orderBy] as any)?.props?.children?.[0].props.children <
        (b[orderBy] as any)?.props?.children?.[0].props.children
      )
        return order === "asc" ? -1 : 1;
      if (
        (a[orderBy] as any)?.props?.children?.[0].props.children >
        (b[orderBy] as any)?.props?.children?.[0].props.children
      )
        return order === "asc" ? 1 : -1;
      return 0;
    }
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });
  return (
    <TableBody>
      {sortedRows.length ? (
        sortedRows.map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.duration}>
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
        })
      ) : (
        <TableRow>
          <TableCell>No results found</TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
