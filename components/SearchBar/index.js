"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted");
  };

  return (
    <div className="overflow-visible flex items- justify-between lg:w-[700px] md:w-[500px] w-full mx-auto md:rounded-lg rounded-xl md:p-3 p-2 bg-white shadow-lg">
      <input
        type="text"
        // value={searchTerm}
        // onChange={handleSearchChange}
        // onKeyPress={handleKeyPress}
        className="w-3/5 px-4 focus:outline-none focus:ring-0 border-0 font-normal"
        placeholder="Search for doctor, disease or symptom..."
      />
      <button
        // onClick={handleSearch}
        className="md:w-1/5 bg-green-light-1 text-white p-2 hover:bg-green-dark rounded-lg focus:outline-none transition-colors duration-300"
      >
        Search
      </button>
    </div>
  );
}
