import React, {useState} from "react";
import {TreeItem} from "@mui/x-tree-view";

function TreeView (content) {
  const [treeContent, setTreeContent] = useState(content.content);
  const [categories, setCategories] = useState([]);
  const [sorted, setSorted] = useState(false);

  if (!sorted) {
    let sortedItems = [...treeContent].sort((a, b) => a.category > b.category ? 1 : -1);

    let categories = [];
    sortedItems.map((item) => {
      if (!categories.includes(item.category)) categories.push(item.category);
    })

    setCategories(categories);
    setTreeContent(sortedItems);
    setSorted(true);
  }

  const getTreeLeafs = (category) => {
    let items = treeContent.filter(item => item.category === category);
    let leafs = [];

    items.map(item => {leafs.push(<TreeItem nodeId={item.id} label={item.image.slice(item.image.indexOf('/')+1)}/>)})

    console.log(items, leafs)
    return leafs;
  }

  getTreeLeafs('animals')

  return (
    <div class={'tree-view'}>
      <div>Some tree view</div>
      <div>{getTreeLeafs('animals')}</div>
    </div>
  )
}

export default TreeView;