import React,{useState} from 'react';
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
const [people,setPeople] = useState<IState["people"]>([])

  return (
    <div>
      <h1>Party Invited List </h1>
      <List people={people}/>
    </div>
  );
}

export default App;
