import Header from "./Header/Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx";
import Button from "./Button.jsx";

function App() {

    return(
      <body className="body">
        <Header/>
        <Card title="Mantas" text="I make things :)"/>
        <Card title="Ezreal" text="Rumours of my death were... greatly exaggerated."/>
        <Card title="Annoying Guy" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis accusamus corrupti dolorum iste reprehenderit quam ratione officia nihil suscipit? Veritatis expedita id consequuntur dolorum ullam exercitationem natus temporibus tempora."/>
        <Button/>
        <Footer/>
      </body>
    );
}

export default App
