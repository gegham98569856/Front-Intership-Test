import { Link } from "react-router-dom";
import useStyles, { Button } from "./style";

export default function Signup (){
     
    const style = useStyles()
    return (
        <div className={style.container}>
            <div className={style.pageTop}>
                <p>Logo</p>
                <div className={style.buttons}>
                    <Link to="/login"><Button>Login</Button></Link>
                    <Link to="/register"><Button>Register</Button></Link>
                </div>
            </div>
            <div className={style.content}>
            <p className={style.title}>Welcome to our platform</p>  
            </div> 
        </div>
    )
};