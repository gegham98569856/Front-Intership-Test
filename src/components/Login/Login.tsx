import { Link } from "react-router-dom";
import useStyle from "./stayle";

function Login() {

  const style = useStyle();
  
  return (
    <div className={style.container}>
      <p className={style.title}>Login</p>
      <div className={style.formArea}>
        <p className={style.title}>Welcome back</p>
        <form className={style.loginForm}>
          <div className={style.inputContainer}>
            <label className={style.label}>Username</label>
            <input 
            type="text" 
            className={style.input}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Password</label>
            <input 
            type="password" 
            
            className={style.input}
            />
          </div>
          <Link to="/home">
            <button 
              className={style.button} 
              type="submit"
               >
              Log In
              </button>
            </Link>
        </form>
        <p className={style.bottomText}>if you haven't registered yet, log in to <Link to="/register" className={style.link}>Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
