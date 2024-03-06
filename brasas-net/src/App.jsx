import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Card from "./Card/Card.jsx";
import Button from "./Button/Button.jsx";

function App() {

    return(
      <>
      <Header/>
      <div className="body">
        <Card title="Mantas" text="durrrrr :3" buttons={[{title: "test", link: "https://www.google.com/"}]}/>
        <Card title="Yayopill" text="im drinking orang juie"/>
      </div>
      <Footer/>
      </>
    );
}

export default App
