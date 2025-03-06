export const formatDuration = (seconds: number): string => {
    if (seconds < 0) return "00:00:00";
  
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    return [hrs, mins, secs]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");
  };

  export function formatDurationToWord(time: string): string {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const parts = [];
  
    if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
    if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  
    return parts.join(" ");
  } 

  export const formatFileSize = (bytes: number): string => {
    if (bytes <= 0) return "0 B";
  
    const units = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
    return `${(bytes / Math.pow(1024, i)).toFixed(0)} ${units[i]}`;
  };

  export const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
  
    return date.toLocaleString(navigator.language, options);
  };

  export function formatDate(dateTime: string): string {
    const date = new Date(dateTime);
  
    const day = date.getDate();
    const month = date.toLocaleString(navigator.language, { month: "short" });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  
  
  