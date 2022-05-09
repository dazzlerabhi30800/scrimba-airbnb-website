import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card";
import ContactCard from "./Components/ContactCard";
import "./Components/ContactCard.css";
import Jokes from './Components/Jokes';
import JokesData from "./Components/JokesData";

function App() {
  // const jokeElement = JokesData.map((joke, index) => {
  //     return <Jokes setup={joke.setup} key={index} punchline={joke.punchline} />
  // })
  
  



  // const date = new Date();
  // const hours = date.getHours();
  // let timeOfDay;
  // if (hours < 12) {
  //   timeOfDay = "morning";
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon";
  // } else {
  //   timeOfDay = "evening";
  // }

  // const nums = [1, 2, 3, 4, 5];
  // const squares = nums.map(num => num * num) 
  // console.log(squares);

  // const names = ["alice", "bob", "charlie", "danielle"];
  // const cap = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
  // console.log(cap)

  // const pokemon = ["Bulbasaur", "Charmender", "Squirtle"];
  // const pok = pokemon.map((mon) =>  `<p>${mon}</p>`)
  // console.log(pok);
  // const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

  return (
    <div className="App">
      {/* {jokeElement} */}
      {/* {colors.map((color, index) => <h3 className="m-2" key={index}>{color}</h3>)} */}
      {/* <h1 className='mx-2'>Good {timeOfDay}! </h1> */}
      {/* <ContactCard
        name="Mr. Whiskerson"
        CatImg="./images/mr-whiskerson.png"
        email="mr.whiskaz@catnap.meow"
        phone="(212) 555-1234"
      />
      <ContactCard
        name="Fluffykins"
        CatImg="./images/fluffykins.png"
        email="fluff@me.com"
        phone="(212) 555-2345"
      />
      <ContactCard
        name="Felix"
        CatImg="./images/felix.png"
        email="thecat@hotmail.com"
        phone="(212) 555-4567"
      />
      <ContactCard
        name="Pumpkins"
        CatImg="./images/pumpkin.png"
        email="pumpkin@scrimba.com"
        phone="(0800) CAT KING"
      /> */}
      <Navbar />
      <HeroSection />
      <Card />
    </div>
  );
}

export default App;
