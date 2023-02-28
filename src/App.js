
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      key = {item.id}
      item ={item}
      />
    )
  })
  return (
    <div className='App'> 
        <Navbar />
        <Navbar2 />
        <Hero />
        <Hero2 />
        <section className='cards-list'>
          {cards}
        </section>
      
      
    </div>
  );
}

export default App;

