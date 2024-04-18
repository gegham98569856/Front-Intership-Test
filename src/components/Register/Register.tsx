import { Link } from "react-router-dom";
import useStyle from "../Login/stayle";


function Register() {
  const style = useStyle()
    return (
      <div className={style.container}>
        <p className={style.title}>Register</p>
        <div className={style.formArea}>
          <p className={style.title}>Sign Up</p>
          <form className={style.loginForm}>
          <div className={style.inputContainer}>
            <label className={style.label}>Full Name</label>
            <input 
            type="text" 
            className={style.input}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Username</label>
            <input 
            type="text" 
            className={style.input}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Email</label>
            <input 
            type="email" 
            className={style.input}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Choose Password</label>
            <input 
            type="password" 
            className={style.input}
            />
          </div>
          <Link to="/login">
            <button 
              className={style.button} 
              type="submit"
               >
              Register
              </button>
            </Link>     
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;
  