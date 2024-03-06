import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Card from "./Card.jsx";
import Button from "./Button.jsx";

function App() {

    return(
      <>
      <Header/>
      <div className="body">
        <Card title="Mantas" text="durrrrr :3"/>
        <Card title="Ezreal" text="Rumours of my death were... greatly exaggerated."/>
        <Card title="Annoying Guy" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis accusamus corrupti dolorum iste reprehenderit quam ratione officia nihil suscipit? Veritatis expedita id consequuntur dolorum ullam exercitationem natus temporibus tempora."/>
        <Card/>
        <Card/>
        <Card/>
        <Card title="Femward" text="Feel how cold my hands are!"/>
        <Card/>
      </div>
      <Footer/>
      </>
    );
}

export default App
