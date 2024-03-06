import PropTypes from 'prop-types'
import styles from "./Button.module.css"
import { NavLink } from 'react-router-dom'

function Button(props){
    
    if(props.type === "external"){
        return(
            <NavLink to={props.link} target={props.target}>
                <button className={styles.button}>{props.title}</button>
            </NavLink>
        );
    }
    return(
        <NavLink to={props.link}>
            <button className={styles.button}>{props.title}</button>
        </NavLink>
    );
}

Button.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.string,
}
Button.defaultProps = {
    title: "Click me!",
    type: "external",
    link: "",
}

export default Button