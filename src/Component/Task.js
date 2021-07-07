
import { FaTimes } from 'react-icons/fa';
const Task = ({task,deletTask,toggleReminder}) => {
    return ( 
   <div className={ ` task  ${task.reminder ? "reminder" : " "}`}
   onDoubleClick={()=> toggleReminder(task.id)}>
    <h3>{task.fname} <br/>{task.lname}<FaTimes style={{color:'red'}} onClick={()=>deletTask(task.id)}/>
     
    </h3>
   </div>
     )
}
export default Task;
 
