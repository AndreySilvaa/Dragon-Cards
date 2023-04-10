import './App.css';

// Components
import Game from './Components/Game';
import Card from './Components/Card';
import { dragons } from './data/dragons';

function App() {
  /*
  let luck = [{id:1}, {id:0}, {id: 4}, {id:7}, {id:9}]
  let luckDragons = []

  for(let i of luck){
    for (let i2 of dragons) {
      if(i.id === i2.id){
        luckDragons.push(i2)
      }
    }
  }

  console.log(luckDragons)
*/
  return (
    <div className="App">
      <h1>Dragon Cards</h1>

      <Game/>
      {/*dragons.map((dragon) => (
        <Card key={dragon.id} name={dragon.name} element={dragon.element} hp={dragon.hp_score} image={dragon.image} atk_fis={dragon.atk_fis} atk_ele={dragon.atk_ele} vel={dragon.vel} powers={dragon.powers} def={dragon.def} weak={dragon.weak}/>
      ))*/}
      
    </div>
  );
}

export default App;
