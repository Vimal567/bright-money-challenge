import "./Landingpage.css";
import { useState } from "react";
import Billdashboard from "./Billdashboard";
import Filter from "./Filter";
import Header from "./Header";
import data from "../data.json"
import Chart from "./Chart";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

const Landingpage = () => {

    const[billData, setBillData] = useState(data.bills);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState("");
    const [editMode, setEditMode] = useState({
        editStatus: false,
        billId: null,
      });

    const handlesort = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        let newArr;
        const sortLow = (a, b) => {
          return a.amount - b.amount;
        };
        const sortHigh = (a, b) => {
          return b.amount - a.amount;
        };
        if(newValue === "low")
          newArr = billData.sort(sortLow);
        if(newValue === "high")
          newArr = billData.sort(sortHigh);
        setBillData(newArr);
    }

    const handleDelete = (index) => {
        const newArr = billData.filter((item, i) => {
            return index !== i;
        })
        setBillData(newArr);
    }

    const updateBillData = (e, billId) => {
        let billCopy = JSON.parse(JSON.stringify(billData));
        billCopy[billId][e.target.name] = e.target.value;
        console.log(billCopy)
        setBillData(billCopy);
    }
    
    return(
        <>
            <Header />
            <Filter 
                billData = {billData}
                setBillData = {setBillData}
                handleOpen = {handleOpen}
                value = {value}
                handlesort = {handlesort}
            />
            <Billdashboard 
                billData = {billData}
                handleDelete = {handleDelete}
                editMode = {editMode}
                handleEditButtonClick={(billId) =>
                    setEditMode({ editStatus: true, billId })
                }
                handleSaveClick={(billId) => {
                      setEditMode({
                        editStatus: false,
                        billId: null,
                      });
                }}
                handleEditChange = {(e, billId) => updateBillData(e, billId)}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Chart billData = {billData} />
                </Box>
            </Modal>
        </>
    )
}
export default Landingpage;