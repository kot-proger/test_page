import React, {Component, useState} from "react";
import './CardListStyles.css'
import CstmCard from './Card'
import {Button} from "@material-ui/core";


function CardList({content}) {
    const [cards, setCards] = useState(content);

    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    }

    console.log('content', content)
    console.log('cards', cards)

    return <div>
        <div>
            <Button className={'card-list-btn'} onClick={() => setCards(content)}>Refresh</Button>
        </div>
        <div className={'card-list'}>
            {cards.map((card) => {
                return <CstmCard
                  key={card.id}
                  id={card.id}
                  handleDelete={handleDelete}
                  image={card.image}
                  filesize={card.filesize}
                  timestamp={card.timestamp}
                  category={card.category}
                />
            })}
        </div>
    </div>;
}

export default CardList;