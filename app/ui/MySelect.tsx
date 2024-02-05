import { MenuItem, Select } from "@mui/material";

type IMenuItems = {
   name: string;
   value: string;
}[];

export default function MySelect({
   value,
   onChange,
   menuItems,
}: {
   value: string;
   onChange: any;
   menuItems: IMenuItems;
}) {
   return (
      <Select
         labelId="select"
         id="select"
         value={value}
         label="theme"
         onChange={onChange}
         sx={{
            color: "white",
            fill: "white",
            "& .mui-1v3d52w-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
               {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               },
            "& .MuiSelect-select": {
               height: "0.5rem",
            },
            "& .mui-1d3z3hw-MuiOutlinedInput-notchedOutline": {
               borderColor: "#fff",
            },
            "& .mui-1d3z3hw-MuiOutlinedInput-notchedOutline:hover": {
               borderColor: "#fff",
            },
            "& .mui-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
               fill: "white",
            },
         }}
         size="small"
      >
         {menuItems &&
            menuItems.map((item, index) => (
               <MenuItem key={index} value={item.value}>
                  {item.name}
               </MenuItem>
            ))}
      </Select>
   );
}
