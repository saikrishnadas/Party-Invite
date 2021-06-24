import React,{useState} from 'react';
import "./App.css";
import List from './components/List';

interface IState {
  people: {
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}



function App() {
const [people,setPeople] = useState<IState["people"]>([
  {
    name:"Ronaldo",
    age:36,
    url:"https://phantom-marca.unidadeditorial.es/3cddf31fc0fa7f65567f202bf98c7e89/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/16/16238262149819.jpg",
    note: "Top Scorer in Euros"
  }
])

  return (
    <div className="App">
      <h1>Party Invited List </h1>
      <List people={people}/>
    </div>
  );
}

export default App;
