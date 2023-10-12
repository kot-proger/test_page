import CardList from './components/CardList'
import './App.css';
import React, {useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  fetch('http://contest.elecard.ru/frontend_data/catalog.json')
    .then(response => response.json())
    .then(data => {
      data.map((item) => {
        items.push({
          id: item.id,
          category: item.category,
          filesize: item.filesize,
          image: item.image,
          timestamp: item.timestamp
        })
      })
      setLoading(false);
      console.log('content loaded', data)
    });


  return (
    (<div className="App">
      <header className="App-header">
        <div>Some text on header</div>
      </header>
      <body>
      {loading && (<h1>Loading page</h1>)}
      {!loading && (<CardList content={items}/>)}
      </body>
    </div>)
  );
}

export default App;
