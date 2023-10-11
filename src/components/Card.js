import './CardStyle.css';
import React from "react";
import {useState} from "react";
import {Card, CardMedia, CardContent, Typography, Button} from "@material-ui/core";

export default function CstmCard({id, handleDelete}) {
    const [isShown, setIsShown] = useState(true);


    const handleClick = event => {
        setIsShown(current => !current)
    }

    return (
    isShown && <Card className={'cstm-card'}>
      <Button onClick={() => handleDelete(id)}>
        Close
      </Button>
      <CardMedia
        component={'img'}
        alt={'some pic'}
        image={'../images/img.jpg'}
      />
      <CardContent>
        <Typography>Some text on Card</Typography>
      </CardContent>
    </Card>
    );
}