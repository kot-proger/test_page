import CardList from './components/CardList'
import './App.css';
import React, {useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  if (loading && 0 === items.length) fetch('http://contest.elecard.ru/frontend_data/catalog.json')
    .then(response => response.json())
    .then(data => {
      let content = [];
      let i = 0;
      data.map((item) => {
        content.push({
          id: i++,
          category: item.category,
          filesize: item.filesize,
          image: item.image,
          timestamp: item.timestamp
        })
      })
      setItems(content);
      setLoading(false);
    });


  return (
    (<div className="App">
      <header className="App-header">
        <div>Some items with pictures</div>
      </header>
      <div>
      {loading && (<h1>Loading page</h1>)}
      {!loading && (<CardList content={items}/>)}
      </div>
    </div>)
  );
}

export default App;
