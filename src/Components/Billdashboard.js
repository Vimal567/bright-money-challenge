import "./Billdashboard.css";
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Billdashboard = ({billData, handleDelete, editMode, handleEditButtonClick, handleSaveClick, handleEditChange}) => {

    return(
        <div className="bills">
            {billData.map((item, index) => {
            return <div>
                {editMode.editStatus && editMode.billId === index ? 
                <Paper 
                key={index}
                elevation={3}
                className="bill-edit-paper"
                >
                 <div className="bill-container">
                    <div className="bill-items">Description: <input required type="text" name="description" onChange={(e) => handleEditChange(e, index)}/></div>
                    <div className="bill-items">Category: <input required type="text" name="category" onChange={(e) => handleEditChange(e, index)}/></div>
                    <div className="bill-items">Amount: <input required type="number" name="amount" onChange={(e) => handleEditChange(e, index)}/></div>
                    <div className="bill-items">Date: <input required type="date" name="date" onChange={(e) => handleEditChange(e, index)}/></div>
                 </div>
                 <div className="crud-section">
                    <button onClick={() => handleSaveClick(index)}  className="crud-icons"><SaveIcon /></button>
                 </div>
                </Paper>
                :<Paper 
            key={index}
            elevation={3}
            className="bill-paper"
            >
             <div className="bill-container">
                <div className="bill-items">Description: {item.description}</div>
                <div className="bill-items">Category: {item.category}</div>
                <div className="bill-items">Amount: {item.amount}</div>
                <div className="bill-items">Date: {item.date}</div>
             </div>
             <div className="crud-section">
                <button onClick={() => handleEditButtonClick(index)}  className="crud-icons"><EditIcon /></button>
                <button onClick={() => handleDelete(index)} className="crud-icons"><DeleteOutlineIcon /></button>
             </div>
            </Paper>}</div>
            })
            }
            {<Paper 
            elevation={3}
            className="bill-paper bill-cursor"
            >
                <div className="bill-add">
                <PostAddIcon />
                </div>
                <div className="bill-add-text"><h4>Add Bill</h4></div>
            </Paper>}
        </div>
    )
}

export default Billdashboard;