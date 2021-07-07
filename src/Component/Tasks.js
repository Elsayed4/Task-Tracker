import Task from "./Task";
const Tasks = ({tasks,deletTask,toggleReminder}) => {
    return ( 
   <>
    
        {tasks.map((task) => (
            <Task key={task.id} task={task} toggleReminder={toggleReminder} deletTask={deletTask}/>
       ))}
       
   </>
     
     )
}
export default Tasks;
 
