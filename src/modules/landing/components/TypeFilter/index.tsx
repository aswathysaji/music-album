import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import ArrowDown from "../../../../../public/icons/ArrowDown";
import { css } from "../../../../../styled-system/css";
import UncheckedCheckBox from "../../../../../public/icons/UncheckedCheckBox";
import CheckedCheckBox from "../../../../../public/icons/CheckedCheckBox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 205,
      boxShadow: "none",
      borderRadius: "8px",
      padding: "8px",
      border: "1px solid #E1E4E9",
    },
  },
  MenuListProps: {
    sx: {
      paddingTop: 0,
      paddingBottom: 0,
      display: "grid",
      gap: "8px",
    },
  },
};

const types = [
  { name: "Album", id: "ALBUM" },
  { name: "EP", id: "EP" },
  { name: "Single", id: "SINGLE" },
];

export const TypeFilter = () => {
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof filterTypes>) => {
    const {
      target: { value },
    } = event;
    setFilterTypes(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <FormControl
      sx={{
        m: 0,
        "& .MuiSelect-select": {
          p: "0px !important",
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            borderColor: filterTypes.length ? "#084782" : "transparent",
          },
        },
      }}
    >
      <Select
        sx={{
          borderRadius: "8px",
          p: "6px 8px",
          backgroundColor: filterTypes.length ? "#EBF5FF" : "#E1E4E9",
          "& .MuiSelect-icon": {
            top: "inherit",
          },
          width: "100%",
        }}
        multiple
        displayEmpty
        value={filterTypes}
        onChange={handleChange}
        IconComponent={() => <ArrowDown />}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <p
                className={css({
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  px: "4px",
                })}
              >
                Type
              </p>
            );
          }
          return (
            <p
              className={css({
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                px: "4px",
                color: selected.length ? "#084782" : "#29313A",
              })}
            >{`Type (${selected.length})`}</p>
          );
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Select music collection type filter" }}
      >
        {types.map((type) => (
          <MenuItem
            key={type.id}
            value={type.name}
            sx={{
              p: 0,
              height: "32px",
              backgroundColor: "transparent !important", // ✅ Remove background color
              "&:hover": {
                backgroundColor: "transparent !important", // ✅ Prevent hover effect
              },
              gap: "8px",
            }}
          >
            <Checkbox
              icon={<UncheckedCheckBox />}
              checkedIcon={<CheckedCheckBox />}
              checked={filterTypes.includes(type.name)}
              sx={{ p: "5px" }}
            />
            <ListItemText primary={type.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
