import PropTypes from 'prop-types'
import styles from "./Button.module.css"

function Button(props){
    return(
        <a href={props.link} target={props.target}>
            <button className={styles.button}>{props.title}</button>
        </a>
    );
}

Button.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.string,
}
Button.defaultProps = {
    title: "Click me!",
    link: "",
    target: "_blank",
}

export default Button