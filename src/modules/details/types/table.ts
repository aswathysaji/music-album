export type Column = {
    id: "title" | "performers" | "duration" | "size";
    label: string;
    minWidth?: number;
    align?: "left";
  }

  export type Data = {
    title: string;
    performers: string;
    duration: string;
    size: string;
  }
  
  export function createData(
    title: string,
    performers: string,
    duration: string,
    size: string
  ): Data {
    return { title, performers, duration, size };
  }