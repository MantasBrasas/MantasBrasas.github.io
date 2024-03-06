import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <p>
                <small>Thanks for viewing the website! &copy; {new Date().getFullYear()} brasas.net</small>
            </p>
        </div>
    );
}

export default Footer