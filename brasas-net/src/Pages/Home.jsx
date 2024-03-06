import Card from "../Card/Card.jsx"

function Home(){
    return(
        <div className="body">
            <Card title="Colour Picker" text="Cute little react based colour picker!" buttons={[{id: 0, title: "Visit", link: "/colour-picker"}]}/>
        </div>
    );
}

export default Home