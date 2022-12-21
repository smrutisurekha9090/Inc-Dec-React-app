import React,{ useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const Todolist = () => {
  const [num,setNum] = useState(0);
  const incrementNum = () => {
    setNum(num+1);
  }
  const decrementNum = () => {
    if(num-1<0){
       alert("you can't decrease than 0 ")
    }else{
      setNum(num-1);
    }
  }
  return(
     <>
      <div className="main_div">
        <div className="main_center">
          <h1>{num}</h1>
          <div className="button_div">
          <Tooltip title="Add">
            <Button  onClick={incrementNum} className="btn_green">
             < AddIcon/>
             </Button>
             </Tooltip>
             <Tooltip title="Delete">
            <Button onClick= {decrementNum} className="btn_red"> 
             <DeleteIcon/>
             </Button>
             </Tooltip>
          </div>
        </div>

      </div>
     </>
  );
}
export default Todolist;
