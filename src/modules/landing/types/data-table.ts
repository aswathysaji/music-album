import { ReactNode } from "react";

export type Column = {
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
};

export type Data = {
  name: ReactNode;
  type: "EP" | "Album" | "Single";
  count: number;
  duration: string;
  size: string;
  released_on: string;
  view_details: ReactNode;
};
