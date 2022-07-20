import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TravelJournal from "../src/components/Hero/assets/data.js"
function App() {
  const getTravelJournal = TravelJournal.map(data => {
      return(
          <Hero
          key={data.id}
          {...data}
          />
      )
  })
  return (
    <div>
        <Navbar/>
        {getTravelJournal}
    </div>
  )
}

export default App
