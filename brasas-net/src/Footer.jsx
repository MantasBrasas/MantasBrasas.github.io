function Footer(){
    return(
        <footer>
            <hr></hr>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <p>
                <small>Thanks for viewing the website! &copy; {new Date().getFullYear()} brasas.net</small>
            </p>
        </footer>
    );
}

export default Footer