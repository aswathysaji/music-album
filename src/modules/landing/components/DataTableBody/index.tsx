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
import { css } from "../../../../../styled-system/css";

type DataTableBodyProps = {
  collections: Collection[];
  order: "asc" | "desc";
  orderBy: keyof Data;
};

function createData(
  name: string,
  type: "EP" | "Album" | "Single",
  count: number,
  duration: number,
  size: number,
  released_on: Date,
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
      collection.name,
      collection.type,
      collection.songCount,
      collection.durationInSeconds,
      collection.sizeInBytes,
      new Date(collection.releasedOn),
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
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });
  return (
    <TableBody>
      {sortedRows.length ? (
        sortedRows.map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
              {columns.map((column) => {
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
                    {column.id === "name" ? (
                      <div>
                        <p>{row.name}</p>
                        <p className={css({color:'#677A90'})}>
                          {
                            collections.find(
                              (collection) => collection.name === row.name
                            )?.artist
                          }
                        </p>
                      </div>
                    ) : column.id === "duration" ? (
                      formatDuration(row.duration)
                    ) : column.id === "size" ? (
                      formatFileSize(row.size)
                    ) : column.id === "released_on" ? (
                      formatDateTime(row.released_on.toISOString())
                    ) : (
                      row[column.id]
                    )}
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
