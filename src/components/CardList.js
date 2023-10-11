import React, {Component, useState} from "react";
import './CardListStyles.css'
import CstmCard from './Card'
import {Button} from "@material-ui/core";


function CardList({content}) {
    const [cards, setCards] = useState(content)

    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    }

    return <div className={'card-list'}>
        <div>
            <Button onClick={() => setCards(content)}>Refresh</Button>
        </div>
        {cards.map((card) => {
            return <CstmCard key={card.id} id={card.id} handleDelete={handleDelete}/>
        })}
    </div>;
}

export default CardList;