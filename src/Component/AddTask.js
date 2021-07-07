import React from 'react';
import {useState} from "react";
const AddTask = ({addTask}) => {

const [fname,setfname] = useState('');
const [lname,setlname] = useState('');
const [reminder,setreminder] = useState(false);

const handleSumit = (e) => {
  e.preventDefault();
  if(!fname){
    alert("Please Enter Text");
  return
  }

  addTask({fname,lname,reminder});
setfname('');
setlname('');
setreminder(false);
}

return (
      <form className="add-form" onSubmit = {handleSumit}>
            
               <div class="form-control">
                 <label>Task</label>
                 <input type="text" placeholder="Add Task"
                  value={fname}
                  onChange = {(e) =>setfname(e.target.value)}
                 />
               </div>
               
               <div class="form-control">
                 <label>Day & Time</label>
                 <input type="text" placeholder="Add Day & Time"
                 value={lname}
                 onChange = {(e) =>setlname(e.target.value)}
                 />
               </div>
               
               <div class="form-control form-control-check">
                 <label>Set Reminder</label>
                 <input type="checkbox" 
                 value={reminder}
                 checked={reminder}
                 onChange = {(e) =>setreminder(e.currentTarget.checked)}
                 />

                 </div>
               <input type="submit" value="Save Task" className="btn btn-block"/>
            </form>
    );
};

export default AddTask;