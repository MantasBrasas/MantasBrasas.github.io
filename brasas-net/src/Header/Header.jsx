import styles from "./Header.module.css"

function Header(){
    return(
        <div className={styles.header}>
            <h1>MANTAS</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
}

export default Header