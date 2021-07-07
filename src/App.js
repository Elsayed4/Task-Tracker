import './App.css';
import Header from './Component/Header';
import {useState} from 'react';
import Tasks from './Component/Tasks';
import AddTask from './Component/AddTask';

function App() {
  const [tasks,setTasks] = useState([
  {id :1,fname:"Doctor Meeting",lname:"12 may",reminder:true},
  {id :2,fname:"school",lname:"13 march",reminder:true},
  {id :3,fname:"food shopping",lname:"1 jan",reminder:false}]
);

const [toggle,setToggle] = useState(false);
const deletTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
}

const toggleReminder =(id)=>{
//  setTasks(tasks.map( (task) => task.id === id ? {...task ,reminder: !reminder}:task))
setTasks(tasks.map((task) => task.id === id ? {...task ,reminder : !task.reminder} : task  ) )
}

const addTask = (task)=>{
  const id = Math.floor(Math.random() * 10000);
  
  const newTask = {id , ...task};
  setTasks([...tasks , newTask]);
}

return (
    <div className="App container">
    <Header className="App-header" AddToggle = {()=>setToggle(!toggle) } toggle={toggle} />
    { toggle && <AddTask addTask={addTask}/> }

   {tasks.length ?  
      <Tasks tasks={tasks} toggleReminder={toggleReminder} deletTask={deletTask}/> :"No Tasks exest"
   }
    </div>
  );
}

export default App;