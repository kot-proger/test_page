import React, {Component} from "react";
import './CardListStyles.css'
import CstmCard from './Card'

class CardList extends Component {
    constructor(props) {
        super(props);
    }
    setContent = () => {
        let content = [];
        for (let i = 0; i<20; i++) {
            content.push ({CstmCard})
        }
        return content;
    };
    
    render() {
        return <div className={'card-list'}>
            {this.setContent()}
        </div>;
    }
}
export default CardList;