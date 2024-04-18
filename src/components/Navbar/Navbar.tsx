import { Link } from "react-router-dom";
import useStyles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <FontAwesomeIcon icon={faBars} className={styles.icon} 
                onClick={() => {}}/>
                <nav className={styles.navBar}>
                <span className={styles.logo}>Logo</span>
                    <ul className={styles.navList}>
                        <li><Link to="/home" className={styles.link}>Home</Link></li>
                        <li><Link to="/posts" className={styles.link}>Posts</Link></li>
                        <li><Link to="/images" className={styles.link}>Images</Link></li>
                        <li><Link to="/comments" className={styles.link}>Comments</Link></li>
                    </ul>
                </nav>
                <Link to="/"><button className={styles.button}>Logout</button></Link>
            </div >
        </div>
    );
}