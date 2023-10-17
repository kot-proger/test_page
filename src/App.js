import CardList from './components/CardList'
import './App.css';
import React, {useState} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import CstmTreeView from "./components/CstmTreeView";

function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [view, setView] = useState('cards');

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

  const handleViewChange = (event) => {
    setView(event.target.value);

  }

  const renderView = () => {
    if ('cards' === view) return <CardList content={items}/>;
    if ('tree' === view) return <CstmTreeView content={items}/>;
  }

  return (
    (<div className="App">
      <header className="App-header">
        <div>Some items with pictures</div>
        <FormControl >
          <FormLabel>View</FormLabel>
          <RadioGroup
            row
            name="view-radio-buttons"
            value={view}
            onChange={handleViewChange}
          >
            <FormControlLabel value="cards" control={<Radio />} label="Cards view" />
            <FormControlLabel value="tree" control={<Radio />} label="Tree view" />
          </RadioGroup>
        </FormControl>
      </header>
      <div>
      {loading && (<h1>Loading page</h1>)}
      {!loading && renderView()}
      </div>
    </div>)
  );
}

export default App;