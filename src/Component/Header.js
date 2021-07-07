
import Button from './Button';

const Header = ({AddToggle,toggle})=> {
    

   return(
    <div>
        <h2>task tracker</h2>
        <Button title={toggle ? "close" : "add"}  color={toggle ? "green":"red"} onClick={AddToggle}/>    
        <hr />
        </div>
  )
}

export default Header;