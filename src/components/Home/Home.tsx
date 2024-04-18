import Navbar from "../Navbar";
import useStyles from "../Signup/style";


export default function Home() {
    const style = useStyles()
    return (
        <div>
            <Navbar />
            <p className={style.title}>This is the home page</p>     
        </div>
    );
}