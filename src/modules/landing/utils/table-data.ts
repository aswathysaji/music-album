import { Column } from "../types/data-table";

export const columns: readonly Column[] = [
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
