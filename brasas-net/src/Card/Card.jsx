import Button from '../Button/Button.jsx';
import ppic from '../assets/argo.png'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

function Card(props){

    const buttons = props.buttons;

    const buttonItems = buttons.map(button => <Button title={button.title} link={button.link}/>)

    return(
        <div className={styles.card}>
            <div className={styles.imageHolder}>
                <img className="card-image" src={ppic} alt="picture of my dog Argo!"></img>
            </div>
            <h2 className={styles.title}>{props.title}</h2>            
            <p className={styles.text}>{props.text}</p>
            <>
                {buttonItems}
            </>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttons: PropTypes.arrayOf
}
Card.defaultProps = {
    title: "Mantas",
    text: "yippee :)",
    buttons: [],
}

export default Card