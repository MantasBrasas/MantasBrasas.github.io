import Card from "../../Card/Card.jsx"
import styles from './ColourPicker.module.css'

function ColourPicker(){
    return(
        <div className={styles.body}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default ColourPicker