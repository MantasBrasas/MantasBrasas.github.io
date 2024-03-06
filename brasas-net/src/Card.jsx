import ppic from './assets/argo.png'
import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <div className="card-image-holder">
                <img className="card-image" src={ppic} alt="picture of my dog Argo!"></img>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.text}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}
Card.defaultProps = {
    title: "Mantas",
    text: "yippee :)",
}

export default Card