import CardList from './components/CardList'
import './App.css';

let cards = [{id: 0}, {id: 1}];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Some text on header</div>
      </header>
      <body>
        <CardList content={cards}/>
      </body>
    </div>
  );
}

export default App;
