import { css } from "../../../../styled-system/css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "../../../../public/icons/Search";
import { TypeFilter } from "../TypeFilter";

export const MusicCollectionFilters = () => {
  return (
    <div
      className={css({
        py: "16px",
        px: "14px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        gap: "12px",
        border:'1px #E6ECF0',
        borderRadius:'8px'
      })}
    >
      <FormControl sx={{ m: 0 }} variant="outlined">
        <OutlinedInput
          sx={{
            border: "1px #C2CAD3",
            borderRadius: "4px",
            p: "5px 9px",
            "& .MuiInputBase-input": {
              p: 0,
              "&::placeholder": {
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
              },
            },
          }}
          id="search-music-collections"
          placeholder="Search"
          endAdornment={
            <InputAdornment position="end" sx={{ ml: 0 }}>
              <div
                className={css({
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                })}
              >
                <Search />
              </div>
            </InputAdornment>
          }
          aria-describedby="search-music-collections"
          inputProps={{
            "aria-label": "search-music-collections",
          }}
        />
      </FormControl>
      <TypeFilter />
    </div>
  );
};
