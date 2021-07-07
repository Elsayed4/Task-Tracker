// import PropTypes from 'prop-types';

const Button = ({color,title,onClick})=> {

    return(
       <div>
           <button className="btn" onClick={onClick}
            style={{backgroundColor:color}}>{title}</button>    
       </div>
     )
   }
   
//    Button.defaultProps ={
//        color:blue,
//        title:"Default",
// }


// Button.propTypes ={
//        text:propTypes.string,
// }

   export default Button;