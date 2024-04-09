import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Field } from "formik";

const Dropdown: React.FC<{ id: string; label: string; options: string[] }> = ({ id, label, options }) => {
  return (
    <FormControl sx={{ flexGrow: 1 }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Field as={Select} id={id} name={id} label={label}>
        <MenuItem key={`${id}-0`} value="">
          None
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={`${id}-${index}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  );
};

export default Dropdown;
