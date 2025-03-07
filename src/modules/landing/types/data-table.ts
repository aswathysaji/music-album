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
  name: string;
  type: "EP" | "Album" | "Single";
  count: number;
  duration: number;
  size: number;
  released_on: Date;
  view_details: ReactNode;
};
