import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

interface InputProps {
  label: string;
  variant?: Variants;
  id?: string;
}

type Variants = "standard" | "filled" | "outlined" | undefined;
const Input: React.FC<InputProps> = ({ label, variant = "standard", id }) => {
  return <TextField id={id} label={label} variant={variant} />;
};

export default Input;
