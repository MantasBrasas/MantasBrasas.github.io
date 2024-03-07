import Card from "../Card/Card.jsx"

function Home(){
    return(
        <div className="body">
            <Card title="Portfolio" text="Check out what I have worked on and am currently working on!" buttons={[{id: 0, title: "Visit", link: "/portfolio"}]}/>
        </div>
    );
}

export default Home