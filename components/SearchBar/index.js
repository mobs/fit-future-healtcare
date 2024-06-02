'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted")
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
      <div>

        <FormControl onSubmit={() => handleFormSubmit()} sx={{ m: 1, width: '100ch' }} className="bg-white rounded-lg" variant="outlined">
          <InputLabel htmlFor="" className='text-green-light-1'>Search for doctor...</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                
              </InputAdornment>
            }
            label=""
          />
        </FormControl>

     
      </div>
    </Box>
  );
}
