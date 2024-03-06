import Card from "../Card/Card.jsx"

function Home(){
    return(
        <div className="body">
            <Card title="Mantas" text="durrrrr :3" buttons={[{id: 0, title: "test", link: "https://www.google.com/"}]}/>
            <Card title="Yayopill" text="im drinking orang juie"/>
        </div>
    );
}

export default Home