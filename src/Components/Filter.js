import "./Filter.css";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import data from "../data.json"

const Filter = ({billData, setBillData, handleOpen, value, handlesort}) => {


  const handleSearch = (event) => {
    const newValue = event.target.value;
    if(newValue === "")
      return setBillData(data.bills);
    const newArr = billData.filter((item) => {
      return item.category.toLowerCase().indexOf(newValue.toLowerCase()) !== -1
    })
    setBillData(newArr)
  }

    return(
        <div className="filter-section">
          <TextField
            label="Seach bills by category" 
            className="search-bar"
            onChange={handleSearch}
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
            }} 
          />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="sort">Sort</InputLabel>
          <Select
            labelId="sort"
            id="sort"
            value={value}
            label="sort"
            onChange={handlesort}
          >
            <MenuItem value={"low"}>Price: low to high</MenuItem>
            <MenuItem value={"high"}>Price: high to low</MenuItem>
          </Select>
        </FormControl>
        <button className="chart-button" onClick={handleOpen}>Chart</button>
        </div>
    )
}

export default Filter;