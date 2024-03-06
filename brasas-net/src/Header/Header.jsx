import styles from "./Header.module.css"

import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.title}>
                <h1 className={styles.name}>MANTAS</h1>
                <h1 className={styles.address}>brasas . net</h1>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header