import React, {Component} from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import './CardListStyles.css'
import image from '../images/img.jpg'

class CardList extends Component {
    constructor(props) {
        super(props);
    }
    setContent = () => {
        let content = [];
        for (let i = 0; i<10; i++) {
            content.push (
                <Card className={'card'}>
                    <CardMedia
                        component={'img'}
                        alt={'some pic'}
                        image={image}
                    />
                    <CardContent>
                        <Typography>Some text on Card</Typography>
                    </CardContent>
                </Card>
                )
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