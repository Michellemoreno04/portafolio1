import "./style.css"
import { Navegation } from "../../App.jsx"

export const Contacto = () =>{
    return(
       <div>
         <Navegation/>
       
        <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>First Name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Last Name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
</div>
  )
}